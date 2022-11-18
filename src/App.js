
import './App.css';
import MiApi from './components/miApi'
import Buscador from './components/buscador'
import React, { useState } from "react";


function App() {

  const [estadoFeriados, setEstadoFeriados] = useState(false);
  const [estadoBuscados, setEstadoBuscados] = useState(false);

  const MostrarFeriados = (e) => {
    e.preventDefault();
    setEstadoFeriados(true);
    setEstadoBuscados(false);
  }

  const MostrarBuscados = (e) => {
    e.preventDefault();
    setEstadoFeriados(false);
    setEstadoBuscados(true);
  }

  return (
    <div className="App">
      <header>
        <nav class=" navbar navbar-dark bg-dark">
          <div class="container ">
            <h4 class="navbar-brand"> Feriados Chile </h4>
          </div>
        </nav>

      </header>

      <div class="row vh-100 border flex">
        <div class="vh-100 container col-2 border bg-secondary">
          <br />
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary m-3 btn-lg " onClick={MostrarFeriados}>Feriados Chile </button>
          </div>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary m-3 btn-lg" onClick={MostrarBuscados}>Buscar</button>
          </div>
        </div>

        <div class="col-10 border">

          {estadoFeriados ? <MiApi /> : null}
          {estadoBuscados ? <Buscador /> : null}


        </div>
      </div>

    </div >
  );
}

export default App;
