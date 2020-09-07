import React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import Tienda from '../componentes/Tienda'
import Caldero from '../componentes/Caldero'
import Ataques from '../componentes/Ataques'

configure({
  adapter: new Adapter()
})

describe('Prueba del componente Principal', () => {
    test('Validar Existencia de Tienda', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find(Tienda).length).toBe(1)
    })
    
    test('Validar Existencia de Caldero', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find(Caldero).length).toBe(1)
    })
    
    test('Validar Existencia de Ataques', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find(Ataques).length).toBe(1)
    })
})