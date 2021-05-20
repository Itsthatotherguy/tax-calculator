import moment, { Moment } from "moment";
import { medicalTaxCreditRates } from "./data/medical-tax-credit";
import { TaxBracket, taxBrackets } from "./data/tax-brackets";
import {
  TaxRebate,
  TaxRebateResponse,
  taxRebates,
  TaxRebateType,
} from "./data/tax-rebates";
import { taxThresholds } from "./data/tax-thresholds";

export interface CalculateTaxDto {
  dateOfBirth: Moment;
  monthlySalary: number;
  medicalAidDependents: number;
}

export interface TaxCalculatorResponse {
  isAboveTaxThreshold: boolean;
  annualSalary?: number;
  monthlySalary?: number;
  initialTax?: number;
  taxRebates?: TaxRebateResponse;
  medicalTaxCredit?: number;
  totalTaxLiability?: number;
  monthlyPaye?: number;
  monthlyUif?: number;
  monthlyNettSalary?: number;
}

class TaxCalculatorService {
  static calculateTax(calculateTaxDto: CalculateTaxDto): TaxCalculatorResponse {
    const { monthlySalary, medicalAidDependents, dateOfBirth } =
      calculateTaxDto;

    const age = this.calculateAge(dateOfBirth);

    const annualSalary = monthlySalary * 12;

    const isAboveTaxThreshold = this.isAboveTaxThreshold(annualSalary, age);

    if (!isAboveTaxThreshold) {
      return {
        isAboveTaxThreshold,
      };
    }

    const initialTax = this.calculateInitialTax(annualSalary);

    const taxRebates = this.calculateTaxRebates(age);

    const medicalTaxCredit =
      this.calculateMedicalAidTaxCredit(medicalAidDependents);

    let totalTaxLiability = initialTax - taxRebates.total - medicalTaxCredit;

    let monthlyPaye = totalTaxLiability / 12;

    let monthlyUif = this.calculateUif(monthlySalary);

    let monthlyNettSalary = monthlySalary - monthlyPaye - monthlyUif;

    if (totalTaxLiability < 0) {
      totalTaxLiability = 0;
      monthlyPaye = 0;
      monthlyNettSalary = monthlySalary - monthlyUif;
    }

    return {
      isAboveTaxThreshold,
      annualSalary,
      monthlySalary,
      initialTax,
      taxRebates,
      medicalTaxCredit,
      totalTaxLiability,
      monthlyPaye,
      monthlyUif,
      monthlyNettSalary,
    };
  }

  private static calculateUif(monthlySalary: number): number {
    if (monthlySalary >= 14872) {
      return 148.72;
    }

    return monthlySalary * 0.01;
  }

  private static calculateAge(dateOfBirth: Moment): number {
    return moment().diff(dateOfBirth, "years");
  }

  private static isAboveTaxThreshold(
    annualSalary: number,
    age: number
  ): boolean {
    if (age <= 65) {
      return annualSalary > taxThresholds.primary;
    } else if (age <= 75) {
      return annualSalary > taxThresholds.secondary;
    } else {
      return annualSalary > taxThresholds.primary;
    }
  }

  private static calculateTaxRebates(age: number): TaxRebateResponse {
    const rebates: TaxRebate[] = [];
    let rebateTotal = 0.0;

    let applicableRebate = taxRebates[TaxRebateType.Primary];

    rebateTotal += applicableRebate.amount;
    rebates.push(applicableRebate);

    if (age > 65) {
      applicableRebate = taxRebates[TaxRebateType.Secondary];

      rebateTotal += applicableRebate.amount;
      rebates.push(applicableRebate);
    }

    if (age > 75) {
      applicableRebate = taxRebates[TaxRebateType.Tertiary];

      rebateTotal += applicableRebate.amount;
      rebates.push(applicableRebate);
    }

    return {
      rebates,
      total: rebateTotal,
    };
  }

  private static calculateMedicalAidTaxCredit(dependents: number): number {
    if (dependents < 1) {
      return 0;
    }

    let medicalTaxCredit = medicalTaxCreditRates.oneDependent;

    if (dependents < 3) {
      medicalTaxCredit = medicalTaxCreditRates.twoDependents;
    } else {
      const remainingDependents = dependents - 2;

      medicalTaxCredit +=
        medicalTaxCreditRates.perDependentAboveTwo * remainingDependents;
    }

    return medicalTaxCredit;
  }

  private static calculateInitialTax(annualSalary: number): number {
    const taxBracket = this.findTaxBracket(annualSalary);

    const tax =
      (annualSalary - (taxBracket.lowerLimit - 1)) * taxBracket.rate +
      taxBracket.additionalAmount;

    return tax;
  }

  private static findTaxBracket(annualSalary: number): TaxBracket {
    const applicableTaxBracket = taxBrackets.find(
      (taxBracket) =>
        annualSalary >= taxBracket.lowerLimit &&
        annualSalary <= taxBracket.upperLimit
    );

    if (!applicableTaxBracket) {
      throw new Error("Tax bracket not found.");
    }

    return applicableTaxBracket;
  }
}

export default TaxCalculatorService;
