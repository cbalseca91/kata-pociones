export const respuestaAtaques = ( pociones ) => {
    
    var continuar = true;
    var cantidad = 1;
    const respuestas = [];

    while( continuar ) {
        continuar = false
        const grupoPociones = pociones.filter( (pocion) => pocion.cantidad >= cantidad )
        const numPosiones = grupoPociones.length
        if( numPosiones > 0 ) {
            //SE VALIDA SI VIENE DOS, EL ATAQUE ES MEJOR DOS INDIVIDUALES QUE UNO UNIDO
            continuar = true
            if(numPosiones === 2){
                for (let i in grupoPociones) {
                    const danio = valorAtaque(1)
                    respuestas.push(
                        {
                            mensaje: `Usar 1 poción causa un ${ danio }% de daño`,
                            danio: danio
                        }
                    )
                }
            }else{
                const danio = valorAtaque(grupoPociones.length)
                respuestas.push(
                    {
                        mensaje: `Usar ${ numPosiones } ${ numPosiones > 1 ? 'pociones distintas causan' : 'poción causa' } un ${ danio }% de daño`,
                        danio: danio
                    }
                )
            }
        }
        cantidad++;
    }
    //PRESENTAMOS LOS RESULTADOS EN ORDEN DE MAYOR DAÑO
    respuestas.sort( (a,b) => {
        if(a.danio > b.danio){
            return 1;
        }
        if(a.danio < BarProp.danio){
            return -1;
        }
        return 0;
    })
    return respuestas;
}

export const valorAtaque = ( numPociones ) => {
    if(numPociones === 5){
        return 25
    }
    if(numPociones === 4){
        return 20
    }
    if(numPociones === 3){
        return 10
    }
    if(numPociones === 2){
        return 5
    }
    if(numPociones === 1){
        return 3
    }
    return 0
}