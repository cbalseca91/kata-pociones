import React, {useState} from "react";
import styles from './Caldero.module.css';
import caldero from '../../assets/img/caldero.png'

//CAMBIO DE CLASE A FUNCIONAL PARA USAR EL HOOKS useState
const Caldero = ({pociones}) => {
    return(
        <div className={styles.base}>
            <h4>CALDERO</h4>
            <img className={styles.img} src={caldero} />
            <div>
                {pociones.map( pocion => {
                    if(pocion.cantidad > 0)
                    return(
                        <div key={pocion.id}>
                            <p className={styles.tituloPocion}>{pocion.nombre} <span> {pocion.cantidad} </span></p>
                            <div className={styles.cajaCantidad} style={{ backgroundColor: pocion.color, width: pocion.cantidad*30 }}></div>
                        </div>
                    )
                }
                 )}
            </div>
        </div>
    )
}


export default Caldero;