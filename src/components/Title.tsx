import React from "react";

type TitleProps = {
  text: string;
  icon?: React.ReactNode;
}

export function Title({ text, icon }: TitleProps) {
  return <h2 className="text-4xl tablet:text-6xl font-extrabold flex items-center justify-center font-display relative px-2">
    <div className="absolute bg-secondary-light h-7 inset-x-0 -bottom-1 z-0" />
    <span className="uppercase text-shadow-title z-10 mr-4">
      {text}
    </span>
    {icon && <div className="z-10">{icon}</div>}
  </h2>
}