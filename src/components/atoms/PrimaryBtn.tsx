import { ReactNode } from "react";

type PropsType = {
  onClick: () => void;
  children: ReactNode;
};

export const PrimaryBtn = ({ onClick, children }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className="bg-lime-800 text-white p-4 text-lg rounded-lg"
    >
      {children}
    </button>
  );
};
