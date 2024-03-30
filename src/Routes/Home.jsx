import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()

  return (
    <main style={{background: state.theme.background, color:state.theme.font}}>
      <h1>Home</h1>

         <div className='card-grid'>
        {state.dentistList.map(item => <Card key={item.id} item={item} />)}
      </div>
    </main>
  )
}

export default Home