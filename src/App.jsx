import { useState } from "react";
import Calculator from "./components/Calculator.jsx";
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <Calculator></Calculator>
        </div>
    );
}

export default App;
