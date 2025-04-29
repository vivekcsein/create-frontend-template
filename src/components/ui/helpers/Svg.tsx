"use client";
export const Svg = ({ fill, path }: { fill: string; path: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 784.11 815.53"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <path className={fill} d={path}></path>
      </g>
    </svg>
  );
};
