import {useState} from "react";
import NumeroDisplay from "../../components/NumeroDisplay";

export default function contador() {
    const [valor, setValor] = useState(0)

//    const diminuir = () => setValor(valor - 1)

    function aumentar() {
        setValor(valor + 1)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={valor} />
            <div>
                <button onClick={() => setValor(valor - 1)}>-</button>
                <button onClick={aumentar}>+</button>
            </div>
        </div>
    )
}