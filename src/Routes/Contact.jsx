import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContextGlobal()
  return (
    <div style={{background: state.theme.background, color:state.theme.font}}>
      <h2>Queres saber mas?</h2>
      <p>Danos tu mail y nosotros te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact