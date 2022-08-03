import { FC } from "react";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#8181814c",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};
