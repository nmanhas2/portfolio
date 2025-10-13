import type { ReactNode } from "react"

interface InfoBoxProps{
    children: ReactNode;
    className?: string;
}

export default function InfoBox({children, className=''}: InfoBoxProps) {
  return (
    <div className={`w-full max-w-2xl bg-[#C60F7B] text-[#E2DBBE] flex flex-col rounded-2xl border-2 border-[#C9A8FF] shadow-md gap-8 p-5 ${className}`}>
        {children}
    </div>
  );
}
