import React from 'react';
import Cover from '../Cover/Cover.js'
import bb from "../Movies/bb.jpg"
import BM from "../Movies/BM.jpg"
import DE from "../Movies/DE.jpg"
import game from "../Movies/game.jpg"
import walking from "../Movies/walking.jpg"
import wire from "../Movies/wire.jpg"
import "./Gallery.css";

export default function Gallery() {
    return (
        <div>
            <div className="container">
                <Cover img={BM} title="Black Mirror" />
                <Cover img={bb} title="Breaking Bad" />
                <Cover img={DE} title="Death Note" />


            </div>

            <div className="container">
                <Cover img={game} title="Game of Thrones" />
                <Cover img={walking} title="The Walking Dead" />
                <Cover img={wire} title="The Wire" />

            </div>

        </div>
    )
}