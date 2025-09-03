import type { ReactNode } from "react";

export default function Empty({ children }: { children: ReactNode }) {
  return (
    <div>
      <img src="empty.png" className="max-w-2xs mx-auto" alt="No Content" />
      {children}
    </div>
  );
}
