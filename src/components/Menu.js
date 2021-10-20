import React from 'react'
import MenuCard from './MenuCard';

function Menu() {

    let starters = {
        name: "STARTERS",
        items: [
            {
                name: "QUINOA CROQUETTAS",
                description: "Quinoa and cheddar\ncroquettas with aji rocotto &\npineapple salsa (v)",
                price: 4.95,
            },

            {
                name: "CHIFA CHICHARRONES",
                description: "Slow cooked, crispy pork belly\nwith sweet soy sauce",
                price: 6.95,
            },

            {
                name: "CALAMARES",
                description: "Crispy baby squid with pickled\njalapeño miso salsa",
                price: 6.95,
            },
        ]
    };

    let main = {
        name: "MAIN COURSES",
        items: [
            {
                name: "EL CLASICO",
                description: "Sea bass ceviche with aji limo\ntiger’s milk, sweet potato\npurée, choclo corn, red onion,\ncoriander & plantain (gf)",
                price: 8.95,
            },

            {
                name: "TIRADITO CALLAO",
                description: "Cobia tiradito with coriander\ntiger’s milk, black tobika,\ncrème fraiche & sweet potato\ncrunchies",
                price: 8.95,
            },

        ]
    };

    let sides = {
        name: "SIDES",
        items: [
            {
                name: "SUPER POLLO",
                description: "Marinated corn fed chicken\npieces with rocotto salsa",
                price: 4.95,
            },

            {
                name: "PATATAS FRITAS",
                description: "Sweet potato fries with aji\nrocotto mayonnaise (v)",
                price: 3.95,
            },

        ]
    };

    let desserts = {
        name: "DESSERTS",
        items: [
            {
                name: "ICECREAM",
                description: "Lorem ipsum dolor sit amet\nsalerma petrum sea",
                price: 3.95,
            },

            {
                name: "TIRAMISU",
                description: "Lorem ipsum dolor sit amet\nsalerma petrum sea",
                price: 3.95,
            },

            {
                name: "CHOCOLATE BROWNIE",
                description: "Lorem ipsum dolor sit amet\nsalerma petrum sea",
                price: 3.95,
            },
        ]
    };



    let slideUp = [50, -10];
    let slideDown = [-50, 20];


    return (
        <div className="menu">


                <div className="ourMenu">

                    <span></span> 

                    <div className="lineMenu">
                        <h1 className="communityMenu">OUR MENU</h1>
                    </div>

                    <p className="knowMenu">KNOW MORE</p>

                </div>


            <div className="menuRow">

                <div className="menuCol leftCol">   
                    <MenuCard menu={starters} parallax1={slideUp[0]} parallax2={slideUp[1]}/>
                </div>

        
                <div className="menuCol">
                    <MenuCard menu={main} parallax1={slideDown[0]} parallax2={slideDown[1]}/>
                </div>


         
                <div className="menuCol">
                    <MenuCard menu={sides} parallax1={slideUp[0]} parallax2={slideUp[1]}/>
                </div>

              
                <div className="menuCol">
                    <MenuCard menu={desserts} parallax1={slideDown[0]} parallax2={slideDown[1]}/>
                </div>

            </div>
            
        </div>
    )
}

export default Menu;
