import { useLoaderData } from "react-router-dom";
import Dashboard from "./dashboard";

const Stock = (props) => {
    const stock = useLoaderData();
    console.log(stock)
    return(
        
        <div>
            <h1>Symbol</h1>
            <h2>{stock[0].symbol}</h2>
            <h2>{}</h2>
        </div>
    )
}

export default Stock