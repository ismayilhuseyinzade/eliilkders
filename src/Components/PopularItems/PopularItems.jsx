import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./PopularItems.module.css"
import Card from "./Card";

const PopularItems = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData([...res.data]);
    });
  }, []);

  return (
    <section id={style.popularItems}>
      <div className={style.container}>
        <div className={style.innerItem}>
          { data.map((item, index) => (
           <Card key={index} item={item}/>
          )) }
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
