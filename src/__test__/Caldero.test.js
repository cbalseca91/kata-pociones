import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Caldero from '../componentes/Caldero'
import { AllPocionesCaso2 } from "../utils/listaPociones";


configure({
  adapter: new Adapter()
})

describe('Pruebas al componente Caldero', () => {
    test('Comprobar que se crean el número correcto de elementos para el Caso 2', () => {
        const wrapper = shallow(<Caldero pociones={AllPocionesCaso2} />)
        expect(wrapper.find('.cajaCantidad').length).toBe(5)
    })
})