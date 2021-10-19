import React, { useState, useEffect } from "react";


function Card({ image, text }) {

    return image ? (
        <div className="cardImg square">

            <img className="backImg" src={image} alt="instaPic" />

            
            <img className="instaLogo" src="../instagram-btn.png" alt="insta"/>
            

        </div>
    ) : (

        <div className="cardText">

            <h1>{text.handle}</h1>

            <p>{text.text}
            </p>

            <div className="bottomText">

                <img  src="../Caminho 80@2x.png" alt="insta"/>

                <p className="likes">{text.comments}</p>

                <img  src="../Grupo 126@2x.png" alt="insta"/>

                <p className="likes">{text.likes}K</p>

            </div>

        </div>

    )
}

export default Card
