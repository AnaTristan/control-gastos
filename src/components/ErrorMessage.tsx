import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <div>
      <p className="bg-red-600 p-2 text-white font-bold text-center text-sm">
        {children}
      </p>
    </div>
  );
};

export default ErrorMessage;
