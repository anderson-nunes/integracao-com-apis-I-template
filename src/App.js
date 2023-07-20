import React, { useEffect, useState } from "react";
import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";
import axios from 'axios'

const usuariosLocal = [
  {
    id: 1,
    name: "Muri"
  },
  {
    id: 2,
    name: "Paulinha"
  },
  {
    id: 3,
    name: "Marcelo"
  },
  {
    id: 4,
    name: "Rodrigo"
  },
]

function App() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    allUsersApi()
  }, [])

  const allUsersApi = () => {

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {

      headers: {
        Authorization: "anderson-nunes-easley"
      }

    }).then((response) => {

      setUsuarios(response.data)

      console.log('sucesso', response.data)

    }).catch((error) => {

      console.log('erro', error.response.data)

      alert(error.response.data)
    })
  }

  return (
    <>
      <p>Para esta aula usaremos a <a href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro" target="_blank" rel="noreferrer">API Labenusers</a></p>

      <AddUsuario allUsersApi={allUsersApi} />

      <hr />
      {usuarios.map((usuario) => {
        return (
          <Usuario
            key={usuario.id}
            usuario={usuario}
            allUsersApi={allUsersApi}
          />
        )
      })}
    </>
  )
}

export default App;
