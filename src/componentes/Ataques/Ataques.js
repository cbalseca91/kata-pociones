import React, {useState, useEffect} from "react";
import styles from './Ataques.module.css';
import mago from '../../assets/img/mago.png'


//CAMBIO DE CLASE A FUNCIONAL PARA USAR EL HOOKS useEffect
const Ataques = ({respuesta}) => {

    //ESTADO DE LAS RESPUESTAS
    const [ataques,setAtaques] = useState(<p>Texto</p>)

    //MOSTRAMOS LAS RESPUESTAS MEDIANTE EL HOOK useEffect con Condicional del State pociones
    useEffect(() => {
        const generarRespuesta = () => {
            //Le validamos el total acá por el cambio de estilos.
            var totalAtaque = 0;
            //Recorremos el resultado de respuesta de la función importada de utils, y generamos el componente
            const cambioAtaque = respuesta.map( (ataque, index) => {
            totalAtaque += ataque.danio;
            return (
                <div key={index}>
                    <h5>Ataque {index + 1}:</h5>
                    <p style={ {fontSize: '0.8em'} }>{ataque.mensaje}</p>
                </div>
            )
            } )
            if(cambioAtaque.length){
            cambioAtaque.push( (
            <p key='valorTotal' style={{ fontWeight: 'bold' }}>Total Ataque: {totalAtaque}%</p>
            ) )
            }
            //Cambiamos el estado de ataques
            setAtaques(cambioAtaque)
        }
        generarRespuesta();
    },[respuesta])

    return(
        <div className={styles.base}>
            <h4>ATAQUES</h4>
            <img className={styles.img} src={mago} />
            <div>
                {ataques}
            </div>
        </div>
    )
}


export default Ataques;