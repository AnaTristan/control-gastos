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
  | { type: "edit-expense"; payload: { id: Expense["id"] } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense["id"];
};

export const InitialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
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
      ),
    };
  }

  if (action.type === "edit-expense") {
    return {
      ...state,
      editingId: action.payload.id,
      modal: true,
    };
  }

  return state;
};
