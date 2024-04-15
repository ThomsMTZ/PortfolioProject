import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"

function App() {

  const [count, setCount] = useState(0)

   // state to manage the dark mode
   const [toggleDarkMode, setToggleDarkMode] = useState(true);

   // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',

      },
    },
  });


  return (
    <>
      <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <div style={{flexDirection: 'row', alignItems: 'center'}}>
            <h2>Toggle Dark Mode</h2>
            <Switch 
            checked={toggleDarkMode}
            onChange={toggleDarkTheme}
            />
          </div>
        </ThemeProvider>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dedv" target="_blank">
          <img src={reactLogo} className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
