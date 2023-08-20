const GAMES = [
    {
        id:1,
        tittle:"Hollow kinght",
        category:[
            "Adventure",
            "Plataforms"
        ],
        price:20,
        img:"https://store-images.s-microsoft.com/image/apps.20679.13847644057609868.a4a91f76-8d1c-4e19-aa78-f4d27d2818fb.a9c33280-e038-4151-8002-79d0794f308d?q=90&w=177&h=265",
        stock:5,
    },{
        id:2,
        tittle:"Minecraft",
        category:[
            "Adventure"
        ],
        price:50,
        img:"https://store-images.s-microsoft.com/image/apps.17382.13510798887677013.afcc99fc-bdcc-4b9c-8261-4b2cd93b8845.49beb011-7271-4f15-a78b-422c511871e4",
        stock:12,
    },{
        id:3,
        tittle:"Among us",
        category:[
            "Mystery"
        ],
        price:80,
        img:"https://store-images.s-microsoft.com/image/apps.30063.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.672da915-9117-4230-960d-4f59f3d7beb5?w=280",
        stock:4,
    },{
        id:4,
        tittle:"Grand Theft Auto V",
        category:[
            "Action"
        ],
        price:36,
        img:"https://store-images.s-microsoft.com/image/apps.25111.14171925115759792.46ff70c5-7760-41a8-9ced-d2de5ae78f17.a595ad6c-5ee2-4d5f-96ed-96c2c62c46e0",
        stock:2,
    },{
        id:5,
        tittle:"7 Days to Die",
        category:[
            "Action",
            "Zombies"
        ],
        price:55,
        img:"https://store-images.s-microsoft.com/image/apps.28856.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.b6546b0b-9563-4129-b79e-15bb4282048a",
        stock:14,
    },{
        id:6,
        tittle:"Doom",
        category:[
            "Action"
        ],
        price:42,
        img:"https://store-images.s-microsoft.com/image/apps.37742.13886780434132750.58497d0f-3220-4d2f-a7ff-96dcff27bc5f.e10ab652-fd3c-4438-94fc-0d7f958d5609",
        stock:4,
    },{
        id:7,
        tittle:"Forager",
        category:[
            "Adventure",
            "Farm"
        ],
        price:60,
        img:"https://store-images.s-microsoft.com/image/apps.49517.13796714672158376.aa1c19be-0d47-46ac-9fb3-74c8d6d9fdf8.061b6ecc-7883-45e5-be31-fb740679ad70",
        stock:9,
    },{
        id:8,
        tittle:"Garden Story",
        category:[
            "Adventure"
        ],
        price:45,
        img:"https://store-images.s-microsoft.com/image/apps.16865.14334501706636147.97df104f-715b-4347-b111-98fa1cbd5f7c.6cba5aac-f556-495a-a10d-fd4237c30714",
        stock:9,
    },{
        id:9,
        tittle:"Goat Simulator",
        category:[
            "Simulator"
        ],
        price:74,
        img:"https://store-images.s-microsoft.com/image/apps.36875.70628353720390187.c5ec2284-1a6e-4ed0-a094-b54b14b8d466.cebea296-f07d-484e-bdf5-f6840555bf02",
        stock:6,
    },{
        id:10,
        tittle:"Pikuniku",
        category:[
            "Plataforms",
            "Adventure"
        ],
        price:14,
        img:"https://store-images.s-microsoft.com/image/apps.18298.14041044108785223.82419c4d-359a-436a-b07d-12cf7137d8fc.e5e5d14b-cb4d-4d97-80f0-522af78eb772",
        stock:22,
    },{
        id:11,
        tittle:"PvZ Garden Warfare 2",
        category:[
            "Action",
            "Zombies"
        ],
        price:96,
        img:"https://store-images.s-microsoft.com/image/apps.7672.68092588132505117.32378282-ea7e-40c4-a3a2-81703aa936d7.ee0c2315-50e1-4175-a1ee-f59e0fc7b52e",
        stock:12,
    },{
        id:12,
        tittle:"Terraria",
        category:[
            "Action",
            "Adventure",
            "Farm"
        ],
        price:45,
        img:"https://store-images.s-microsoft.com/image/apps.31019.70406876433810089.4beffaca-3fee-4154-a21f-ecd9b3bedbb3.cc90d42b-0620-473e-a51e-52f0e5ff8454",
        stock:6,
    },{
        id:13,
        tittle:"Hello Neighbor 2",
        category:[
            "Action",
            "Adventure"
        ],
        price:55,
        img:"https://store-images.s-microsoft.com/image/apps.43743.13538643730533052.28638370-579e-40f3-af52-7a9f26631587.67554df9-b3c0-4a7e-b257-c5909ca201be?q=90&w=177&h=265",
        stock:32,
    },{
        id:14,
        tittle:"Stardew Valle",
        category:[
            "Farm"
        ],
        price:55,
        img:"https://store-images.s-microsoft.com/image/apps.51447.13838479673159593.08fca22c-85fe-467d-8f34-cca2715208c0.8a757252-51c8-488e-8a07-044e835983b2?q=90&w=177&h=265",
        stock:32,
    },{
        id:15,
        tittle:"Lonely Mountains: Downhill",
        category:[
            "Plataforms"
        ],
        price:34,
        img:"https://store-images.s-microsoft.com/image/apps.4555.13794437146560212.1c2132e1-8e75-4ecb-8f54-2474cd20e67a.b855d795-fc09-4fac-a974-0aa07086d762?q=90&w=177&h=265",
        stock:15,
    }
];

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
    /*const _games = id
      ? GAMES.filter((game) => {
        return game.category.some((category) => category == id) == true
      })
      : GAMES;

    return new Promise((res) => {
      setTimeout(() => {
        res(_games);
      }, 200);
    });*/

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
