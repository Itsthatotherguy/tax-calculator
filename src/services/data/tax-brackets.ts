export interface TaxBracket {
  lowerLimit: number;
  upperLimit: number;
  rate: number;
  additionalAmount: number;
}

export const taxBrackets: TaxBracket[] = [
  {
    lowerLimit: 1,
    upperLimit: 216200,
    rate: 0.18,
    additionalAmount: 0,
  },
  {
    lowerLimit: 216201,
    upperLimit: 337800,
    rate: 0.26,
    additionalAmount: 38916,
  },
  {
    lowerLimit: 337801,
    upperLimit: 467500,
    rate: 0.31,
    additionalAmount: 70532,
  },
  {
    lowerLimit: 467501,
    upperLimit: 613600,
    rate: 0.36,
    additionalAmount: 110739,
  },
  {
    lowerLimit: 613601,
    upperLimit: 782200,
    rate: 0.39,
    additionalAmount: 163335,
  },
  {
    lowerLimit: 782200,
    upperLimit: 1656600,
    rate: 0.41,
    additionalAmount: 229089,
  },
  {
    lowerLimit: 1656601,
    upperLimit: Infinity,
    rate: 0.45,
    additionalAmount: 587593,
  },
];
