
import { 
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where } from "firebase/firestore";
import { db } from "./config.js"

const gamesRef = collection(db,"items")

export const getGames = async (category) => {

    const q = category
    ? query(gamesRef, where("category","array-contains",category))
    : gamesRef;

    let games = []

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {

        games = [...games, {...doc.data(),id: doc.id}]

    })

    return games
        
};

export const getGame = async (id) => {
  
    const gameRef = doc(db, "items", id)
    const game = await getDoc(gameRef)

    if(game.exists()) return {id: game.id, ...game.data()}

    return null
};

export const cargarData = async () =>{
    GAMES.forEach(async game =>{
        addDoc(gamesRef, game)
    })
}
