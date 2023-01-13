import React from "react";

import "./Card.css";

const Cardv = ({ products }) => {
  return (
    <div className="cards">
      <article className="card">
        <header>
          <h2>{products.title} </h2>
        </header>
        <img src={products.images[0]} alt="Hot air balloons" />
        <div className="content">
          <p className="pcontent">
            <span className="span"> Created by:&nbsp; </span> {products.country}
          </p>
          <p className="pcontent">
            <span className="span"> Year:&nbsp; </span> {products.year}
          </p>
          <p className="pcontent">
            <span className="span"> IMDB Rating:&nbsp; </span>  <span className="fa fa-star checked"> &nbsp;  </span> {products.imdb_rating} 
          </p>
          <p className="pcontent">
            <span className="span"> Genres:&nbsp; </span> 
            {products.genres.map((i) =>  `(${i}) ` )}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Cardv;
