import { useState } from "react"
import type {ReactNode} from "react"

interface CollapsibleBoxProps {
    title : string;
    children: ReactNode;
}

export default function CollapsibleBox({title , children}: CollapsibleBoxProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#E2DBBE] bg-[#C60F7B] text-5xl">{title}</button>

        {isOpen && <div>{children}</div>}
    </div>
    );
}
