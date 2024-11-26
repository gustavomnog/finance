import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const transactionsCategoryMap = {
  HOUSING: "Moradia",
  FOOD: "Alimentação",
  TRANSPORTATION: "Transporte",
  ENTERTAINMENT: "Lazer",
  EDUCATION: "Educacional",
  HEALTH: "Saúde",
  OTHER: "Outros",
  SALARY: "Salário",
  UTILITY: "Utilidades",
};

export const transactionsPaymentMethodMap = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  PIX: "Pix",
  OTHER: "Outros",
};

export const transactionTypeOptions = [
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.DEPOSIT, label: "Depósito" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];

export const transactionPaymentMethodOptions = [
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: transactionsPaymentMethodMap.CREDIT_CARD,
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: transactionsPaymentMethodMap.DEBIT_CARD,
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: transactionsPaymentMethodMap.BANK_TRANSFER,
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: transactionsPaymentMethodMap.BANK_SLIP,
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: transactionsPaymentMethodMap.PIX,
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: transactionsPaymentMethodMap.CASH,
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: transactionsPaymentMethodMap.OTHER,
  },
];

export const transactionCategoryOptions = [
  {
    value: TransactionCategory.HOUSING,
    label: transactionsCategoryMap.HOUSING,
  },
  {
    value: TransactionCategory.FOOD,
    label: transactionsCategoryMap.FOOD,
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: transactionsCategoryMap.TRANSPORTATION,
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: transactionsCategoryMap.ENTERTAINMENT,
  },
  {
    value: TransactionCategory.EDUCATION,
    label: transactionsCategoryMap.EDUCATION,
  },
  {
    value: TransactionCategory.HEALTH,
    label: transactionsCategoryMap.HEALTH,
  },
  {
    value: TransactionCategory.OTHER,
    label: transactionsCategoryMap.OTHER,
  },
  {
    value: TransactionCategory.SALARY,
    label: transactionsCategoryMap.SALARY,
  },
  {
    value: TransactionCategory.UTILITY,
    label: transactionsCategoryMap.UTILITY,
  },
];
