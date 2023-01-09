import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import About from "./pages/about"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Stock from "./pages/stock"
import { stockLoader } from "./loaders"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="stock/:symbol" element={<Stock/>} loader={stockLoader}/>
        </Route>
    )
)


export default router 