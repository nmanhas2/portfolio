import type { ReactNode } from "react"

interface InfoBoxProps{
    children: ReactNode;
    className?: string;
}

export default function InfoBox({children, className=''}: InfoBoxProps) {
  return (
    <div className={`w-full max-w-2xl bg-[#FDF6FF] text-[#2D1E2F] flex flex-col rounded-2xl shadow-md gap-3 p-5 ${className}`}>
        {children}
    </div>
  );
}
