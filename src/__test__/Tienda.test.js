import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Tienda from '../componentes/Tienda'
import { AllPociones } from "../utils/listaPociones";


configure({
  adapter: new Adapter()
})

describe('Pruebas al componente Tienda', () => {
    test('Comprobar que se crean el número correcto de elementos', () => {
        const wrapper = shallow(<Tienda pociones={AllPociones} />)
        expect(wrapper.find('.nombrePocion').length).toBe(5)
    })
})