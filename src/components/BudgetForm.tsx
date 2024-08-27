import { useState, ChangeEvent } from "react";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value);
  };

  return (
    <form className=" space-y-5 ">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir presupuesto
        </label>
        <input
          type="number"
          name="budget"
          id="budget"
          value={budget}
          onChange={handleChange}
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
        />
      </div>

      <input
        type="submit"
        value={"Definir presupuesto"}
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase"
      />
    </form>
  );
};

export default BudgetForm;
