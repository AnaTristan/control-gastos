import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";
import { useMemo } from "react";

const Budgetracker = () => {
  const { state } = useBudget();

  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => total + expense.amount, 0),
    [state.expenses]
  );

  const totalAvailable = useMemo(
    () => state.budget - totalExpenses,
    [state.expenses]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Grafico de gastos" />

        <div className="flex flex-col justify-center items-center gap-8 ">
          <button
            type="button"
            className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          >
            Resetear App
          </button>

          <AmountDisplay label="Presupuesto" amount={state.budget} />
          <AmountDisplay label="Disponible" amount={totalAvailable} />
          <AmountDisplay label="Gastado" amount={totalExpenses} />
        </div>
      </div>
    </div>
  );
};

export default Budgetracker;
