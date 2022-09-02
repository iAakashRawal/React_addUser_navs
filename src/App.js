import React from 'react'
import { createContext } from 'react'
import Datas from './componants/Topics/createContext/Datas'

const theme = {
  light: {
    foreground: "#000000",
    background: "#fff",
    fontSize : "2em"
  },
  dark: {
    background: "black",
    foreground: "#fff"
  },
  yellow: {
    background: "yellow",
    foreground: "#000"
  },
  red: {
    background: "red",
    foreground: "#000"
  },
  green: {
    background: "green",
    foreground: "#000"
  },
  gray: {
    background: "gray",
    foreground: "#000"
  },
  pink: {
    background: "pink",
    foreground: "red"
  }
};
const data = createContext()

const App = () => {
  
  return (
    <data.Provider value={theme}>
      <Datas />
    </data.Provider>
  )
}

export default App
export {data}
