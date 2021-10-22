import React from 'react'
import RecipesCard from './RecipesCard'


function Recipes() {

    let content1 = {
        img: "../picture copy.png",
        name: "CHARRED BROCCOLI & CHEAT’S VEGGIE\nROMESCO TOAST",
        text: "Make a speedy version of romesco sauce with its\nfamous almond and red pepper flavours. Serve on\nsourdough and add broccoli for a colourful, veget…",
        servings: 4,
        widerImg: true,
        chefChoice: true,
      };
    
    let content2 = {
        img: "../pic2.png",
        name: "PINEAPPLE FRUIT SALAD\nWITH FRESH CREAM",
        text: "The pineapple juice is the star\nof the dressing and what gives\nit such a refreshing and sweet\ntaste. Pineapple juice is kno",
        servings: 2,
        };
    
    let content3 = {
        img: "../pic1.png",
        name: "CHEESE, SPINACH &\nMUSHROOM STUFFED CHI…",
        text: "Amp up this dinner party\nclassic by stuffing three types\nof cheese, spinach and\nmushroom into the chicken…",
        servings: 2,
        flexEnd: true,
        chefChoice: true,
        };

    let content4 = {
        img: "../pic.png",
        name: "FETA AND PEACH\nCOUSCOUS",
        text: "Grab just four ingredients to\nmake this easy, light lunch and\nenjoy a taste of summer. The\ncombination of peaches, feta...",
        servings: 8,
        };







    return (
        <div className="recipes">

            <div className="rpTopText">

                <div className="rpTopLeft">
                    <h2>POPULAR</h2>

                    <span></span>

                    <h1>RECIPES</h1>


                    <p>SEE ALL</p>

                </div>

                <div className="rpTopRight">

                    <h2>DO YOU WANT TO SHARE YOUR OWN RECIPE?</h2>

                    <p>SEND IT NOW</p>
                    
                </div>

            </div>


            <div className="rpScroll">
                <RecipesCard content={content1}/>
                <RecipesCard content={content2}/>
                <RecipesCard content={content3}/>
                <RecipesCard content={content4}/>
            </div>


            <div className="rpArrows">

                <img src="../back.png" alt="back" />
                <img src="../next.png" alt="next" />

            </div>
            
        </div>
    )
}

export default Recipes
