import React from "react";

export default function Section(props) {
  return (
    <section className="section">
      <div className="section--left">
        <img src={`../img/${props.item.imageURL}`} className="card--img" />
      </div>
      <div className="section--right">
        <p>{props.item.country}</p>
        <a href={`${props.item.linkUrl}`}>View On Map</a>
        <h2>{props.item.title}</h2>
        <p>{props.item.tripYear}</p>
        <p>{props.item.description}</p>
      </div>
    </section>
  );
}
