import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context.jsx'
import Table from 'react-bootstrap/Table'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentista, setDentista] = useState({})
  const {state} = useContextGlobal()

  const params = useParams()
  // console.log(params)

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then(res => setDentista(res.data))
  }, [])

  return (
    <div className={state.theme}>
      <h1>Detail Dentist {dentista.id} </h1>
      <Table striped bordered hover>
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
          <td>{dentista.name}</td>
          <td>{dentista.email}</td>
          <td>{dentista.phone}</td>
          <td>{dentista.website}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Detail