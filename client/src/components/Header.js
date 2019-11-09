import React from "react"
import Switch from "react-switch"
import {useDarkMode} from "../hooks/useDarkMode"

// Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide 
const Header = ()=> {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = () => {
        setDarkMode(!darkMode);
      };
    return (
        <div className="header-container">
            <h1>Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide </h1>
            <div className="toggle">
                <Switch className="toggle-switch" onChange={toggleMode} checked={darkMode || false}/>
                <div style={{fontSize: '1rem'}}>Dark mode</div>
            </div>
        </div>
    )
}

export default Header