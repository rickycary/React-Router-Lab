export const stockLoader = async({params}) => {
    const symbol = params.symbol;
    const apiKey = "117eedfbb8beff23c48ee36a1593c78a"

    return (await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=120&apikey=${apiKey}`,
    )).json()
}