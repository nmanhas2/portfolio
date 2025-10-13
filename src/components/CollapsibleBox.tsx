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
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>

        {isOpen && <div>{children}</div>}
    </div>
    )
}
