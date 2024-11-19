import React from "react";
import './List2.css';

const ChristmasItem = ({data, remove}) => {
  const {title} = data;
  return (
  <article className="picture_item">
    <h3>Tareas Pendientes:{title}</h3>
    <button onClick={remove}>Borrar</button>
  </article>)
};

export default ChristmasItem;
