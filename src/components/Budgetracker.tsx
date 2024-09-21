import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";

const Budgetracker = () => {
  const { state, totalExpenses, remainingBudget } = useBudget();

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
          <AmountDisplay label="Disponible" amount={remainingBudget} />
          <AmountDisplay label="Gastado" amount={totalExpenses} />
        </div>
      </div>
    </div>
  );
};

export default Budgetracker;
