import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  valueTitle: string;
  valueDescription: string;
  iconColor: string;
};

export default function ValueCard({
  icon,
  valueTitle,
  valueDescription,
  iconColor,
}: Props) {
  return (
    <div className="flex flex-col max-w-[320px] border p-6 rounded-xl border-grayscale-100 bg-secondary-50 justify-center shadow-xl">
      <h3 className="text-3xl sm:text-3xl font-semibold text-grayscale-800 mb-2">
        {valueTitle}
      </h3>
      <p className="text-sm sm:text-base text-grayscale-500">
        {valueDescription}
      </p>
      <div
        className={
          "text-5xl sm:text-6xl text-primary-50 rounded-lg w-fit p-2 mt-6 " +
          iconColor
        }
      >
        {icon}
      </div>
    </div>
  );
}
