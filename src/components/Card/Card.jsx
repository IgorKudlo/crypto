import './styles.css'
import {WithRuBalance} from "../../helpers/hoc/withRuBalance.jsx";

const Card = ({ balance, setBalance, ruBalance }) => {
    console.log(ruBalance)

    return (
        <div className="card">
            <div className="card-block">
                <p>CRYPTO-FINANCE</p>
                <button onClick={() => setBalance((prev) => prev + 100)}>Add money</button>
            </div>
            <div className="card-block">
                <p>IGOR</p>
                <p>{balance} $</p>
            </div>
        </div>
    );
};

export default WithRuBalance(Card);