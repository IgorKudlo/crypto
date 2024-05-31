import { useEffect, useState } from "react";
import { getCoins } from "./api/api.js";
import { CoinsContext } from "./context/coinsContext.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";

function App() {
    const [balance, setBalance] = useState(5000);
    const [coins, setCoins] = useState([]);
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCoins();
            setCoins(data.coins);
            setFilteredCoins(data.coins)
        }
        fetchData();
    }, [])

    return <>
        <CoinsContext.Provider value={{ coins, filteredCoins }}>
            <Header />
            <Main
                coins={coins}
                setCoins={setFilteredCoins}
                balance={balance}
                setBalance={setBalance}
            />
        </CoinsContext.Provider>
    </>
}

export default App
