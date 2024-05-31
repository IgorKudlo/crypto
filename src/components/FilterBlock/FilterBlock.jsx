import './styles.css'
import { useEffect, useState, memo, useContext } from "react";
import { CoinsContext } from "../../context/coinsContext.jsx";

const FilterBlock = ({ setCoins }) => {
    const {coins} = useContext(CoinsContext);
    const [value, setValue] = useState('');

    useEffect(() => {
        const filteredCoins = coins.filter(coin => {
            return coin.name.toLowerCase().includes(value.toLowerCase());
        });
        setCoins(filteredCoins);
    }, [value])

    return (
        <div className="filter-block">
            <input className="input" type="text" placeholder="bitcoin" value={value} onChange={(e) => setValue((e.target.value))} />
        </div>
    );
};

export default memo(FilterBlock);