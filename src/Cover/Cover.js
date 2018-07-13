import React from "react";
import "./Cover.css";

export default function Cover(props) {
    return (
        <div className="item">
            <img src={props.img} className="image" alt={props.title}/>
            <div className="movieTitle"> <h3>{props.title}</h3></div>
        </div>
    );
}