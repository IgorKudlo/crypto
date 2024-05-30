import {useEffect, useState} from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import {getCoins} from "./api/api.js";

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
        <Header />
        <Main
            coins={coins}
            setCoins={setFilteredCoins}
            filteredCoins={filteredCoins}
            balance={balance}
            setBalance={setBalance}
        />
    </>
}

export default App
