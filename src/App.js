import React, {useState, useEffect} from 'react';
import styles from './App.module.css';

//IMPORTACIÓN DE LISTA DE POCIONES
import { AllPociones } from './utils/listaPociones'

//IMPORTACIÓN DE FUNCIONES PARA EL CÁLCULO DE ATAQUES
import { respuestaAtaques } from "./utils/algoritmo";

//IMPORTACIÓN DE COMPONENTES
import Tienda from "./componentes/Tienda";
import Caldero from "./componentes/Caldero";
import Ataques from "./componentes/Ataques";



//COMPONENTE
function App() {
  //ESTADO DE LAS POCIONES
  const [pociones,setPociones] = useState(AllPociones)


  //ESTADO DE LAS RESPUESTAS
  const [respuesta,setRespuesta] = useState([])

  //AGREGAR CANTIDAD A LA POCIÓN
  const agregarCantidad = (clave) => {
    const nuevaListaPociones = pociones.map( pocion => {
      if( pocion.clave === clave ){
        pocion.cantidad++
      }
      return pocion;
    } )
    setPociones(nuevaListaPociones)
    setRespuesta( respuestaAtaques( pociones ) )
  }

  //QUITAR CANTIDAD A LA POCIÓN
  const quitarCantidad = (clave) => {
    const nuevaListaPociones = pociones.map( pocion => {
      if( pocion.clave === clave && pocion.cantidad > 0){
        pocion.cantidad--
      }
      return pocion;
    } )
    setPociones(nuevaListaPociones)
    setRespuesta( respuestaAtaques( pociones ) )
  }

  //RENERIZADO DEL ELEMENTO
  return (
    <div className={styles.contenedor}>
      <h1>Kata Posiones</h1>
      {/* Imagen de encabezado */}
      <div className={styles.elementos}>
        <Tienda 
          pociones={pociones}
          onAddPocion={agregarCantidad} 
          onQuitPocion={quitarCantidad}
        />
        <Caldero
          pociones={pociones}
          
        />
        <Ataques
          respuesta={respuesta}
        />
      </div>
    </div>
  );
}

export default App;
