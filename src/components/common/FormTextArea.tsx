import { useState } from "react";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  label: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  placeholder: string;
};

export default function FormTextArea({
  label,
  registration,
  placeholder = "",
  error,
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      {/* Input */}
      <textarea
        {...registration}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(e.target.value !== "");
        }}
        placeholder={placeholder}
        className={`
          w-full h-40 pt-2 text-lg border-b-1 outline-none transition-colors placeholder:text-grayscale-300
          ${error ? "border-red-500" : " "}
          ${
            isFocused && !error
              ? "border-grayscale-950"
              : "border-grayscale-200"
          }
        `}
      />

      {/* Floating label */}
      <label
        className={`
          absolute left-0 transition-all text-sm -top-3.5 font-semibold
        ${isFocused ? "text-primary-500" : "text-grayscale-600"}
        `}
      >
        {label}
      </label>

      {/* Error message */}
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
