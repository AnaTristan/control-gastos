import { useReducer, useMemo, createContext, Dispatch, ReactNode } from "react";
import {
  BudgetReducer,
  BudgetState,
  InitialState,
  BudgetActions,
} from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  totalExpenses: number;
  remainingBudget: number;
};

type BudgetProviderProps = {
  children: ReactNode; // Representa todos los elementos que react puede renderizar (p, div, form etc etc)
};

export const BugdetContext = createContext<BudgetContextProps>(null!);

// provider

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(BudgetReducer, InitialState);

  const totalExpenses = useMemo(
    () =>
      state.expenses.reduce(
        (total: number, expense: { amount: number }) => total + expense.amount,
        0
      ),
    [state.expenses]
  );

  const remainingBudget = useMemo(
    () => state.budget - totalExpenses,
    [state.expenses, state.budget]
  );

  // Aqui conectamos el provider con el context
  return (
    <BugdetContext.Provider
      value={{ state, dispatch, totalExpenses, remainingBudget }}
    >
      {children}
    </BugdetContext.Provider>
  );
};
