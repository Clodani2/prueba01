import React, { useState, useEffect } from "react";


const MiApi = () => {

    const [datosUF, setDatosUF] = useState([]);


    useEffect(() => {
        obtenerdatos();
    }, [])

    const obtenerdatos = async () => {
        const data = await fetch('https://api.victorsanmartin.com/feriados/en.json');
        const baseUF = await data.json();
        setDatosUF(baseUF.data);

    }



    return (
        <div>
            <h3>Dias Feriados Chile</h3>
            <div>
                <ul>{datosUF.map(item => (<li key={item.title}>{item.date} -{item.title} -  {item.type} </li>))}</ul>
                <br /><hr />

            </div>
        </div >
    );
}

export default MiApi;
