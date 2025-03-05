import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../BoasVindas";
import JogoDeDados from "../JogoDeDados"
import Game from "../Game"


const router = createBrowserRouter([

    {path: "/", element: <BoasVindas/>},
    {path: "/dados", element: <JogoDeDados/>},
    {path: "/dados", element: <Game/>},
  

 
  
])

export default router