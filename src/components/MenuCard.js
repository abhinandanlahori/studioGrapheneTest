import React from 'react'
import { Parallax } from 'react-scroll-parallax';

function MenuCard({ menu, parallax1, parallax2 }) {



    return (

        <Parallax  y={[parallax1, parallax2]}>

            <div className="MenuColInner"> 
            
                <h1 className="menuTitle">{menu.name}</h1>

                {menu.items.map((item) => {
                    return  <div key={item.name} className="menuDiv">

                                <p className="itemName">{item.name}</p>

                                <p className="itemDesc">{item.description}</p>

                                <p className="itemPrice">£{item.price}</p>
                            </div>                
                })}

                <div className="menuDiv"></div>

            </div>

        </Parallax>
    )
}

export default MenuCard
