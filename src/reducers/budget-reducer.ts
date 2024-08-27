export type BudgetActions = {
  type: "add-budget";
  payload: { budget: number };
};

export type BudgetState = {
  budget: number;
};

export const InitialState: BudgetState = {
  budget: 0,
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

  return state;
};
