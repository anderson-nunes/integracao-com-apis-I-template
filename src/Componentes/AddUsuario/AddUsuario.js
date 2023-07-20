import axios from "axios";
import React, { useState } from "react";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {

    const headers = {
      headers: {
        Authorization: "anderson-nunes-easley"
      }
    }

    const body = {
      name: nome,
      email: email
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)

      .then(() => {
        setNome('')
        setEmail('')
        props.allUsersApi()
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  return (
    <>
      <h3>Adicionar novo usuario</h3>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={addUser}>Enviar</button>
    </>
  );
}

export default AddUsuario;
