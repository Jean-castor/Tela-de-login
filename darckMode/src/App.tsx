//Impots style
import './App.css';

//Imports components
import { Form } from "./components/Form";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


//Renderização em múltiplas páginas
type ContextProps = {
  theme: string;
  toggleTheme: () => void;
}
export const ThemeContext = createContext({} as ContextProps);


function App () {
   const [theme, setTheme] = useState("light");

   const toggleTheme = () => {
      setTheme(( corr ) => ( corr === "light" ? "dark"  : "light") )
   };

  return (
   <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
       <Form/> 
       <br />
       <br />
       <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
    </div>
  </ThemeContext.Provider>   
  );
};

export default App;
