export type BudgetActions =
  | {
      type: "add-budget";
      payload: { budget: number };
    }
  | { type: "show-modal" }
  | { type: "hide-modal" };

export type BudgetState = {
  budget: number;
  modal: boolean;
};

export const InitialState: BudgetState = {
  budget: 0,
  modal: false,
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

  return state;
};
