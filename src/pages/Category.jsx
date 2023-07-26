import React, { useEffect , useState} from 'react'
import { getGames } from '../lib/games.request'
import { useParams } from 'react-router-dom';

import StyleTittle from '../componentes/StyleTittle/StyleTittle';
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';

const Category = () => {

  const {id} = useParams
  const[games,setGames] = useState([]);
  const[loanding,setLoanding] = useState(true);

  useEffect(() =>{
    setGames([]);
    setLoanding(true);
    
    getGames(id).then(res => {
      setGames(res)
      setLoanding(false)
    })
  },[id])

  return (
    <div>
      <StyleTittle className={"Welcome"}>
          <h1>juegos de {id}</h1>
      </StyleTittle>
      <h5 className={loanding ? "Loanding" : ""} >{loanding ? "Cargando Datos..." : ""}</h5>
      <ItemListContainer list={games}/>
    </div>
  )
}

export default Category
