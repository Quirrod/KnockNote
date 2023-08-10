"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const buttonConfig = {
  primary: {
    bgColor: "bg-secondary",
    textColor: "text-white",
    bgColorHover: "hover:opacity-70",
    textColorHover: "hover:text-white",
    border: "border-2 border-secondary",
    borderHover: "hover:border-2 hover:border-secondary",
    width: "w-full",
  },
  secondary: {
    bgColor: "bg-primary",
    textColor: "text-white",
    bgColorHover: "hover:opacity-70",
    textColorHover: "hover:text-white",
    borderHover: "hover:border-2 hover:border-secondary",
    border: "border-2 border-secondary",
    width: "w-full",
  },
  circle: {
    bgColor: "bg-primary",
    textColor: "text-white",
    bgColorHover: "hover:opacity-70",
    textColorHover: "hover:text-white",
    borderHover: "hover:border-2 hover:border-secondary",
    border: "border-2 border-secondary",
    width: "w-15 h-15",
  },
};

type ButtonProps = {
  onClick?: () => void;
  theme?: keyof typeof buttonConfig;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disable?: boolean;
};

function Button({
  onClick,
  theme = "primary",
  children,
  type = "button",
  disable = false,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      disabled={disable}
      onClick={onClick}
      type={type}
      className={`${buttonConfig[theme]?.bgColor} 
      ${buttonConfig[theme]?.textColor} ${
        !disable && buttonConfig[theme]?.bgColorHover
      } 
      ${!disable && buttonConfig[theme]?.textColorHover} ${
        buttonConfig[theme]?.borderHover
      } 
      ${
        buttonConfig[theme]?.border
      } py-2 px-3 rounded-md flex  justify-between ${
        buttonConfig[theme]?.width
      }`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
