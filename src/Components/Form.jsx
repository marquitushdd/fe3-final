import { useState } from "react";


const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
  const [userData, setUserData] = useState(
    {
      name: "",
      email: ""
    }  
  )

  const [showError, setShowError] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (userData.name.length >= 5 && userData.email.length >= 6 && userData.email.toString()[0] !== ' ' ) {
        setShowThanks(true)
        setShowError(false)
      } else {
        setShowError(true)
        setShowThanks(false)
      }
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre y Apellido" onChange={(e) => setUserData({...userData, name: e.target.value})}/>
        <input type="email" placeholder="Email" onChange={(e) => setUserData({...userData, email: e.target.value})}/>
        <button type="submit">Send</button>
      </form>
      {showError && <h4>La informacion no es correcta, por favor chequear</h4>}
      {showThanks && <h2>Gracias! {userData.name}, te contactaremos cuando antes via mail</h2>}
    </div>
  )
}

export default Form;
