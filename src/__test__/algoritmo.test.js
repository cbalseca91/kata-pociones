import { respuestaAtaques, valorAtaque } from "../utils/algoritmo";
import { AllPocionesCaso2 } from "../utils/listaPociones";

describe( 'Pruebas de los algoritmos para obtener los resultados de los ataques', () => {
    test('Comprobando el valor del Ataque', () => {
        expect(valorAtaque(1)).toBe(3)
    })
    
    test('Comprobando que tenga el valor de daño las respuestas', () => {
        expect(respuestaAtaques(AllPocionesCaso2)[0]).toHaveProperty('danio')
    })

    test('Comprobando la cantidad de ataques con el caso 2', () => {
        expect(respuestaAtaques(AllPocionesCaso2)).toHaveLength(3)
    })
    
} )