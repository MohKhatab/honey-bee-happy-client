import React from "react";
import { PiSpinnerBold } from "react-icons/pi";

type ButtonProps = {
  children: React.ReactNode;
  classes?: string;
  type?: "button" | "submit";
  handler?: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  classes,
  type = "button",
  handler,
  disabled = false,
  loading = false,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      type={type}
      onClick={handler}
      className={`text-3xl relative px-2 rounded-lg font-bold
         transition-all ${classes}
      ${
        variant === "primary" &&
        (loading || disabled
          ? "bg-primary-200 text-primary-950/4"
          : "active:bg-primary-500 bg-primary-400 text-primary-950 hover:text-primary-950/70 hover:bg-primary-200")
      }
      ${
        loading || disabled
          ? " cursor-not-allowed 0"
          : " cursor-pointer hover:-translate-y-1"
      }`}
    >
      <span className={`${loading ? "opacity-0" : ""}`}>{children}</span>
      {loading && (
        <PiSpinnerBold className="absolute top-1/2 left-1/2 -translate-1/2 animate-spin text-3xl" />
      )}
    </button>
  );
}
