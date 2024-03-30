import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContextGlobal()
  const favs = state.favs

  return (
    <div style={{background: state.theme.background, color:state.theme.font}}>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid" >
      {favs.map(item => <Card key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Favs