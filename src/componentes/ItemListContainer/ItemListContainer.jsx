import React from "react";
import Item from "../Item/Item";


const ItemListContainer = ({list}) => {

    return (
        <div className="ItemListContainer" >
            {list.map((item) => 
                (
                    <Item
                    id={item.id}
                    img={item.img}
                    category={item.category}
                    tittle={item.tittle}
                    price={item.price}/>
                )
            )}
        </div>
    )
}

export default ItemListContainer