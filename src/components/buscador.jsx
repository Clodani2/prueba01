import React, { useState, useEffect } from "react";


const Buscador = () => {

    const [datosUF, setDatosUF] = useState([]);
    const [datosFiltrados, setDatosFiltrados] = useState([]);

    useEffect(() => {
        obtenerdatos();
    }, [])

    const obtenerdatos = async () => {
        const data = await fetch('https://api.victorsanmartin.com/feriados/en.json');
        const baseUF = await data.json();
        setDatosUF(baseUF.data);

    }

    const [valor, setValor] = useState('');

    const capturaInput = (e) => {
        e.preventDefault();
        setValor(e.target.value);

    }

    const enviarBusqueda = (e) => {
        e.preventDefault();

        const subFiltro = datosUF.filter(item => (item.date === valor || item.title === valor || item.type === valor));
        setDatosFiltrados(subFiltro);
    }


    return (
        <div>
            <h3>Dias Feriados Chile</h3>
            <div>

                <h5>Búsqueda de Feriados</h5>
                <form onSubmit={enviarBusqueda}>
                    <input type="text" onChange={capturaInput} />
                    <button>Buscar</button>
                </form>
                <h5>Resultado</h5>
                <ul>{datosFiltrados.map(item => (<li key={item.title}>{item.date} -{item.title} -  {item.type} </li>))}</ul>
            </div>
        </div >
    );
}

export default Buscador;