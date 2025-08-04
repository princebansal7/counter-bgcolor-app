import { useState } from "react";

function App() {
    let [count, setCount] = useState(0);
    const [color, setColor] = useState("#5e5e60ff");
    const increase = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div
            style={{ backgroundColor: color }}
            className="w-full h-screen duration-200"
        >
            <div className="flex flex-col items-center justify-center h-full text-black">
                <h1>Counter App (0 to 10)</h1>
                <br />
                <h3 className="text-4xl">{count}</h3>
                <br />
                <button className="text-white" onClick={increase}>
                    +
                </button>
                <br />
                <button className="text-white" onClick={decrease}>
                    -
                </button>
                <br />
                <h2 className="bg-green-600 text-yellow-300 text-2xl p-2 rounded-xl">
                    Tailwind test
                </h2>
            </div>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-2xl">
                    <button
                        onClick={() => setColor("red")}
                        style={{ backgroundColor: "red" }}
                        className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
                    >
                        Red
                    </button>
                    <button
                        onClick={() => setColor("yellow")}
                        style={{ backgroundColor: "yellow" }}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    >
                        Yellow
                    </button>
                    <button
                        onClick={() => setColor("pink")}
                        style={{ backgroundColor: "pink" }}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    >
                        Pink
                    </button>
                    <button
                        onClick={() => setColor("orange")}
                        style={{ backgroundColor: "orange" }}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                    >
                        Orange
                    </button>
                    <button
                        onClick={() => setColor("olive")}
                        style={{ backgroundColor: "olive" }}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                    >
                        Olive
                    </button>
                    <button
                        onClick={() => setColor("grey")}
                        style={{ backgroundColor: "grey" }}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                    >
                        Grey
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
