import type { ReactNode } from "react";

// src/components/Hexagon.jsx
type Props = {
  className: string;
  children: ReactNode;
};

const Hexagon = ({ children, className }: Props) => {
  return (
    <>
      {/* This inline SVG defines the clipping path. 
        It's hidden and doesn't take up space in the layout.
      */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath
            id="hexagon-clip"
            clipPathUnits="objectBoundingBox"
          ></clipPath>
        </defs>
      </svg>

      {/* This is your visible div, styled and clipped by the SVG path */}
      <div className={className} style={{ clipPath: "url(#hexagon-clip)" }}>
        {children}
      </div>
    </>
  );
};

export default Hexagon;
