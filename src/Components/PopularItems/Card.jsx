import React from "react";
import style from "./PopularItems.module.css"

const Card = ({item}) => {
    
  return (
    <div  className={style.card}>
      <img src={item.image} />
      <h3>{item.category}</h3>
      <p>{item.price}</p>
    </div>
  );
};

export default Card;
