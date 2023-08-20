import React, { useEffect , useState} from 'react'
import { getGames } from '../lib/games.request'
import { useParams } from 'react-router-dom';

import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';
import Tittle from "../componentes/Tittle/Tittle"

const Category = () => {

  const {id} = useParams()
  const[games,setGames] = useState([]);
  const[loanding,setLoanding] = useState(true);

  useEffect(() =>{
    setGames([]);
    setLoanding(true);

    getGames(id)
    .then((res) => {
      setGames(res)
      setLoanding(false)
    })
  },[id])

  return (
    <div>
      <Tittle>juegos de {id}</Tittle>
      <h5 className={loanding ? "Loanding" : ""} >{loanding ? "Cargando Datos..." : ""}</h5>
      <ItemListContainer list={games}/>
    </div>
  )
}

export default Category
