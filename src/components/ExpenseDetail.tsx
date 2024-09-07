import { useMemo } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import "react-swipeable-list/dist/styles.css";

type ExpenseDetailProps = {
  expense: Expense;
};

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {}}>Actualizar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {}} destructive={true}>
        Eliminar
      </SwipeAction>
    </LeadingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30} // cuantos px para hacer trigger en la accion del swipe
        leadingActions={leadingActions()} //Swipe izq a derecha
        trailingActions={trailingActions()} //Swipe derecha a izq
      >
        <div className="bg-white shadow-lg p-10 border-b border-gray-200 flex gap-5 items-center w-full">
          <div>
            <img
              src={`/icono_${categoryInfo.icon}.svg`}
              alt="Icono gasto"
              className="w-20"
            />
          </div>

          <div className="flex-1 space-y-2">
            <p className="text-sm font-bold uppercase text-slate-500">
              {categoryInfo.name}
            </p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">
              {formatDate(expense.date!.toString())}
            </p>
          </div>

          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseDetail;
