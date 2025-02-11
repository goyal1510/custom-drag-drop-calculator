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
      <div className={`${darkMode ? "dark bg-gray-900 text-purple-600" : "bg-white"} flex flex-col items-center p-2 pb-0`}>
        
        {/* Header Section */}
        <div className="w-full flex justify-evenly items-center mb-6 flex-wrap">
          <h1 className="text-2xl font-bold">Drag & Drop Calculator</h1>
          <button
            onClick={toggleDarkMode}
            className=" p-2 px-4 border rounded shadow-md"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Main Content */}
        <div className="flex justify-center space-x-6 m-7 flex-wrap">
          
          {/* Components Section */}
          <div className="p-4 border rounded m-2">
            <h2 className="text-lg font-semibold mb-1 text-center">Components</h2>
            <div className="grid grid-cols-4 gap-2 min-h-[200px] w-64 max-h-[275px] overflow-y-auto p-2 border">
              {[..."0123456789+-*/=C<()"].map((char) => (
                <Button key={char} label={char} />
              ))}
            </div>
          </div>

          <DragDropContainer />
          <Calculator />
        </div>
        <footer className="text-center border bg-gray-800 text-white w-full p-2 m-1">
          <p>Built by <span className="font-bold">Jayant</span></p>
          <a 
            href="https://github.com/goyal1510/custom-drag-drop-calculator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Source Code
          </a>
        </footer>
        </div>
        
      
    </DndProvider>
  );
}

export default App;
