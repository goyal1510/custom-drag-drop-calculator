import { useDrop } from "react-dnd";
import { useCalculatorStore } from "../store/useCalculatorStore";

const DragDropContainer = () => {
  const { components, addComponent, removeComponent, clearComponents } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item) => addComponent(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="border-2 p-2 text-center rounded">
      <div className="text-lg font-semibold mb-2">Your Components</div>
      
      <div 
        ref={drop} 
        className={`p-4 min-h-[200px] w-64 max-h-[225px] overflow-y-auto ${isOver ? "bg-gray-200" : ""}`}
      >
        {components.map((component, index) => (
          <div key={index} className="p-2 bg-blue-500 text-white m-1 rounded flex justify-between items-center">
            <span>{component.label}</span>
            <button
              onClick={() => removeComponent(index)}
              className="ml-2 px-2 bg-red-500 text-white rounded"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {components.length > 0 && (
        <button 
          onClick={clearComponents} 
          className="mt-2 px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default DragDropContainer;
