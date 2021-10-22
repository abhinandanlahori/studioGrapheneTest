import React from 'react'

function RecipesCard({ content }) {
    return (
        
            <div className={"rpCard" + (content.flexEnd ? " flexEnd" : "")}>

                <div className="rpCardTop">

                    <div className={"rpCardImgs" + (content.widerImg ? " wideServings" : "")}>

                        <p>{content.servings}<br/><span>SERVINGS</span></p>

                        {content.chefChoice && <img className={"chefChoice" + (content.widerImg ? " chefChoiceWide" : "")} src="../chef-stamp.png" alt="back" />}

                        <img className={"rpBack" + (content.widerImg ? " widerImg" : "")} src={content.img} alt="back" />

                        <img className={"rpSmallArrow" + (content.widerImg ? " widerImgArrow" : "")} src="../go-btn.png" alt="back" />

                    </div>

                    <div className="rpCardText">

                        <p id="difficulty">DIFFICULTY</p>

                        <h3>{content.name}</h3>

                        <p>{content.text}</p>
                        
                    </div>

                </div>


                <div id="userFullName">
                    <p>USER FULL NAME</p>
                </div>
                
            </div>

        
    )
}

export default RecipesCard
