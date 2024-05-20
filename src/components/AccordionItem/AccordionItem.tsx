import { useState } from "react";
import style from "./AccordionItem.module.css"
import { Link } from "react-router-dom";

type AccordionProps = {
    id: number;
    tittle: string;
    link: string
}

export const AccordionItem = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="border-b-2 py-5 gap-3">
                <div className="flex justify-between gap-20">
                    <p>Q{props.id}. {props.tittle}</p>
                    <button onClick={toggleContent}>{isOpen ? "-" : "+"}</button>
                </div>
                <div className={`${style.accordionContent} ${isOpen ? style.open : '' || "max-h-0 overflow-hidden"} `}>
                    <Link to={`/quiz/${props.id}`}>Start a quiz {props.id}</Link>
                </div>
            </button>
        </>
    )
}