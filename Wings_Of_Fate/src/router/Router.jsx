import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../BoasVindas";
import JogoDeDados from "../JogoDeDados"


const router = createBrowserRouter([

    {path: "/", element: <BoasVindas/>},
    {path: "/dados", element: <JogoDeDados/>},
   
  

 
  
])

export default router