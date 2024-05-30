import './styles.css'
import {useEffect, useState} from "react";

const FilterBlock = ({coins, setCoins}) => {
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

export default FilterBlock;