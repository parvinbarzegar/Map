import React from "react";
import cls from "classnames";
import "./Button.scss";

interface IButtonProp {
  children: string;
  onClick?: Function;
  type?: "primary" | "secondry" | "loading";
}

const Button: React.FunctionComponent<IButtonProp> = ({
  children,
  onClick,
  type = "primary",
}) => (
  <button
    onClick={()=>onClick?.()}
    className={cls(
      "button",
      { "button--primary": type === "primary" },
      { "button--secondry": type === "secondry" },
      { "button--loading": type === "loading" }
    )}
  >
    {children}
  </button>
);
export default Button;
