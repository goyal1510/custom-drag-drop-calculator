import { useState } from "react";
import { useCalculatorStore } from "../store/useCalculatorStore";
import Display from "./Display";

const Calculator = () => {
    const { components } = useCalculatorStore();
    const [input, setInput] = useState("");

    const handleClick = (label) => {
        if (label === "=") {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput("Error");
            }
        } 
        else if(label === "C"){
            try {
                setInput('');
            } catch {
                setInput("Error");
            }
        }
        else if(label === "<"){
            try {
                setInput(input.slice(0,-1));
            } catch {
                setInput("Error");
            }
        }
        else {
            setInput((prev) => prev + label);
        }
    };

    return (
        <div className="border rounded p-2 m-2">
            <div className="text-lg font-semibold mb-2 text-center">
                Customised Calculator
            </div>
            <div className="p-4 border rounded w-64">
                <Display value={input} />
                <div className="grid grid-cols-4 gap-2 mt-2">
                    {components.map((component, index) => (
                        <button key={index} className="p-2 bg-gray-500 text-white rounded" onClick={() => handleClick(component.label)}>
                            {component.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Calculator;
