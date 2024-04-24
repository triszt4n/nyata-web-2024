import React from "react";

type TitleProps = {
  text: string;
  icon?: React.ReactNode;
}

export function Title({ text, icon }: TitleProps) {
  return <h2 className="text-6xl font-extrabold flex items-center justify-center space-x-4 font-display relative">
    <div className="absolute bg-secondary-light h-7 inset-x-0 -bottom-1 z-0" />
    <span className="uppercase text-shadow z-10">
      {text}
    </span>
    {icon && <div className="z-10">{icon}</div>}
  </h2>
}