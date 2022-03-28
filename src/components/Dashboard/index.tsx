import { useState } from "react";

export function Dashboard()
{

    const [vA, setVA] = useState('');
    const [vB, setVB] = useState('');
    var vC;

    const handleInput = () =>
    {

        vC = parseInt(vA) * parseInt(vB)
        console.log(vC);
    }


    return (
        <div>
            <h2>Valor do kilo</h2>
            <input type='number' data-type='currency' placeholder="valor 1" onChange={ e => setVA(e.target.value) } />

            <h2>Quantidade do kilo comprada</h2>
            <input type='number' placeholder="valor 1" onChange={ e => setVB(e.target.value) } />

            <button onClick={ () => handleInput() }>Calcular</button>

            <h2>{ vC }</h2>

        </div>
    );
}
