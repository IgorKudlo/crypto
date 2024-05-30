import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";

function App() {
    const [balance, setBalance] = useState(5000);

    return <>
        <Header />
        <Main balance={balance} setBalance={setBalance} />
    </>
}

export default App
