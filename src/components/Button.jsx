/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import { useCalculatorStore } from "../store/useCalculatorStore";

const Button = ({ label }) => {
  const { components, addComponent } = useCalculatorStore();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { type: "button", label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Function to handle button click
  const handleClick = () => {
    // Prevent duplicate components
    const alreadyAdded = components.some((comp) => comp.label === label);
    if (alreadyAdded) {
      alert("Component already added!");
      return;
    }
    
    addComponent({ type: "button", label });
  };

  return (
    <button
      ref={drag}
      className="p-4 bg-blue-600 text-white rounded-md m-1 cursor-pointer"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={handleClick} // Add onClick functionality
    >
      {label}
    </button>
  );
};

export default Button;
