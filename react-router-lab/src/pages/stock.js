import { useLoaderData } from "react-router-dom";

const Stock = (props) => {
    const stock = useLoaderData();

    return(
        <div className="stocks">
            <h1>{stock[0].symbol}</h1>
        </div>
    )
}

export default Stock