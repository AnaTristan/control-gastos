import { useContext } from "react";
import { BugdetContext } from "../context/BudgetContext";

export const useBudget = () => {
  const context = useContext(BugdetContext);

  if (!context) {
    throw new Error("useBudget must be used within a BugdetProvider");
  }

  return context;
};
