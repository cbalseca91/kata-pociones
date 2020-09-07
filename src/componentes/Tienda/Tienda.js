import React from "react";
import styles from './Tienda.module.css';

class Tienda extends React.Component {
    //CREAMOS EVENTO PERSONALIZADO PARA AGREGAR LA CANTIDAD
    quitPocion = (clave) =>{
        this.props.onQuitPocion(clave)
    }
    //CREAMOS EVENTO PERSONALIZADO PARA QUITAR LA CANTIDAD
    addPocion = (clave) =>{
        this.props.onAddPocion(clave)
    }
    //RENDERIZADO DEL ELEMENTO
    render(){
        const {pociones} = this.props;
        return(
            <div className={styles.base}>
                <h4>TIENDA</h4>
                { pociones.map( pocion => (
                    <div key={pocion.id}    >
                        <button onClick={() => this.quitPocion(pocion.clave)} className={styles.boton} style={ {backgroundColor: pocion.color} }>
                            -
                        </button>
                        <span className={styles.nombrePocion}> {pocion.nombre} </span>
                        <button onClick={() => this.addPocion(pocion.clave)} className={styles.boton} style={ {backgroundColor: pocion.color} }>
                            +
                        </button>
                    </div>
                ) ) }
            </div>
        )
    }
}

export default Tienda;