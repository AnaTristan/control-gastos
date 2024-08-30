import { useReducer, createContext, Dispatch, ReactNode } from "react";
import {
  BudgetReducer,
  BudgetState,
  InitialState,
  BudgetActions,
} from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
};

type BudgetProviderProps = {
  children: ReactNode; // Representa todos los elementos que react puede renderizar (p, div, form etc etc)
};

export const BugdetContext = createContext<BudgetContextProps>(null!);

// provider

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(BudgetReducer, InitialState);

  // Aqui conectamos el provider con el context
  return (
    <BugdetContext.Provider value={{ state, dispatch }}>
      {children}
    </BugdetContext.Provider>
  );
};
