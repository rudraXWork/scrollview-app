import React, { useState, useEffect, useRef, useContext, useReducer, createContext } from "react";

const ThemeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "toggleTheme":
      return { dark: !state.dark };
    default:
      return state;
  }
}

function Dashboard() {
  const [name, setName] = useState("Rudra");       // useState
  const inputRef = useRef(null);                    // useRef
  const { dark } = useContext(ThemeContext);        // useContext
  const [time, setTime] = useState(0);              // another useState

  useEffect(() => {                                 // useEffect
    const timer = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleFocus = () => inputRef.current.focus();

  return (
    <div className={`p-5 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <h2>Hello, {name} 👋</h2>
      <p>You've been here for {time} seconds.</p>
      <input ref={inputRef} placeholder="Change your name" onChange={e => setName(e.target.value)} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

function Hooks() {
  const [state, dispatch] = useReducer(reducer, { dark: false });

  return (
    <ThemeContext.Provider value={state}>
      <button onClick={() => dispatch({ type: "toggleTheme" })}>
        Toggle Theme
      </button>
      <Dashboard />
    </ThemeContext.Provider>
  );
}

export default Hooks;
