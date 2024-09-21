import { v4 as uuid } from "uuid";
import { DraftExpense, Expense } from "../types";
import ExpenseModal from "../components/ExpenseModal";

export type BudgetActions =
  | {
      type: "add-budget";
      payload: { budget: number };
    }
  | { type: "show-modal" }
  | { type: "hide-modal" }
  | { type: "add-expense"; payload: { expense: DraftExpense } }
  | { type: "delete-expense"; payload: { id: Expense["id"] } }
  | { type: "get-expense-id"; payload: { id: Expense["id"] } }
  | { type: "update-expense"; payload: { expense: Expense } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense["id"];
};

const InitialBudget = (): number => {
  const localStorageBudget = localStorage.getItem("budget");
  return localStorageBudget ? +localStorageBudget : 0;
};

const LocalStorageExpenses = (): Expense[] => {
  const expenses = localStorage.getItem("expenses");
  return expenses ? JSON.parse(expenses) : [];
};

export const InitialState: BudgetState = {
  budget: InitialBudget(),
  modal: false,
  expenses: LocalStorageExpenses(),
  editingId: "",
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: uuid(),
  };
};

export const BudgetReducer = (
  state: BudgetState = InitialState,
  action: BudgetActions
) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === "show-modal") {
    return {
      ...state,
      modal: true,
    };
  }

  if (action.type === "hide-modal") {
    return {
      ...state,
      modal: false,
      editingId: false,
    };
  }

  if (action.type === "add-expense") {
    const expense = createExpense(action.payload.expense);

    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false,
    };
  }

  if (action.type === "delete-expense") {
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id != action.payload.id
      )[0],
    };
  }

  if (action.type === "get-expense-id") {
    return {
      ...state,
      editingId: action.payload.id,
      modal: true,
    };
  }

  if (action.type === "update-expense") {
    return {
      ...state,
      expenses: state.expenses.map((expense) =>
        expense.id === action.payload.expense.id
          ? action.payload.expense
          : expense
      ),
      modal: false,
      editingId: "",
    };
  }

  return state;
};
