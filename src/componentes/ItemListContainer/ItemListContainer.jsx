import React from "react";
import Item from "../Item/Item";

import "./ItemListContainer.css"

const ItemListContainer = ({list}) => {

    return (
        <section className="ItemListContainer" >
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
        </section>
    )
}

export default ItemListContainer