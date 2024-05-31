import './styles.css'
import { memo } from "react";
import { useFilterCoins } from "../../helpers/hooks/useFilterCoins.js";

const FilterBlock = ({ coins, setCoins }) => {
    const { value, setValue } = useFilterCoins(coins, setCoins)

    return (
        <div className="filter-block">
            <input className="input" type="text" placeholder="bitcoin" value={value} onChange={(e) => setValue((e.target.value))} />
        </div>
    );
};

export default memo(FilterBlock);