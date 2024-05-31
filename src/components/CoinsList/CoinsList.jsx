import './styles.css'
import { useContext } from "react";
import { CoinsContext } from "../../context/coinsContext.jsx";

const CoinsList = () => {
    const { filteredCoins} = useContext(CoinsContext);

    return (
        <ul className="coins-list">
            {filteredCoins.map(coin => {
                return (
                    <li key={coin.uuid} className="coin-item">
                        <div className="coin-item__info">
                            <img className="coin-item__logo" src={coin.iconUrl} alt={coin.name}/>
                            <p style={{color: coin.color}}>{coin.name}/USD</p>
                        </div>
                        <div className="coin-item__price">
                            <p style={{color: coin.color}}>{Number(coin.price).toFixed(2)} USD</p>
                            <p style={{color: coin.color}}>{Number(coin.btcPrice).toFixed(2)} BTC</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default CoinsList;