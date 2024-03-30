import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

 // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {state, dispatch} = useContextGlobal()
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  
  useEffect( ()=> {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTIST', payload: res.data}))
  },[])
  
  const {name, email, phone, website} = state.dentistData
  return (
    <div>
      <table style={{background: state.theme.background, color:state.theme.font}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail