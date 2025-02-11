import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Calculator from "./components/Calculator";
import DragDropContainer from "./components/DragDropContainer";
import Button from "./components/Button";
import { useCalculatorStore } from "./store/useCalculatorStore";

function App() {
  const { darkMode, toggleDarkMode } = useCalculatorStore();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`${darkMode ? "dark bg-gray-900 text-purple-600" : "bg-white"} min-h-screen p-6 flex flex-col items-center`}>
        
        {/* Header Section */}
        <div className="relative w-full flex justify-center items-center mb-6">
          <h1 className="text-2xl font-bold">Drag & Drop Calculator</h1>
          <button
            onClick={toggleDarkMode}
            className="absolute right-6 p-2 px-4 border rounded shadow-md"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Main Content */}
        <div className="flex justify-center space-x-6 m-10">
          
          {/* Components Section */}
          <div className="p-4 border rounded">
            <h2 className="text-lg font-semibold mb-2 text-center">Components</h2>
            <div className="grid grid-cols-4 gap-2 min-h-[200px] w-64 max-h-[275px] overflow-y-auto p-2 border">
              {[..."0123456789+-*/=C<()"].map((char) => (
                <Button key={char} label={char} />
              ))}
            </div>
          </div>

          <DragDropContainer />
          <Calculator />
        </div>

      </div>
    </DndProvider>
  );
}

export default App;
