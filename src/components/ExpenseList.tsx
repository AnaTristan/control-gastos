import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = () => {
  const { state } = useBudget();

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);

  return (
    <div>
      {isEmpty ? (
        <p className="text-gray-500 text-2xl font-bold ml-10"> No hay gastos</p>
      ) : (
        <>
          <p className="text-2xl mx-10 my-6 font-bold text-gray-500">
            Listado de gastos
          </p>
          {state.expenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
