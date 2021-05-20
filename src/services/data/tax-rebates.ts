export enum TaxRebateType {
  Primary = "Primary",
  Secondary = "Secondary",
  Tertiary = "Tertiary",
}

export interface TaxRebateResponse {
  rebates: TaxRebate[];
  total: number;
}

export interface TaxRebate {
  type: TaxRebateType;
  amount: number;
}

interface TaxRebates {
  [TaxRebateType.Primary]: TaxRebate;
  [TaxRebateType.Secondary]: TaxRebate;
  [TaxRebateType.Tertiary]: TaxRebate;
}

export const taxRebates: TaxRebates = {
  [TaxRebateType.Primary]: { type: TaxRebateType.Primary, amount: 15714 },
  [TaxRebateType.Secondary]: { type: TaxRebateType.Secondary, amount: 15714 },
  [TaxRebateType.Tertiary]: { type: TaxRebateType.Tertiary, amount: 15714 },
};
