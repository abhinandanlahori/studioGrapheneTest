import React from 'react'

function NavBar() {
    return (
        <>
            <div className="NavBar">

                <div className="leftBar">
                
                    <div className="logo">
                        LOGO
                    </div>
                        
                    <div>
                        ABOUT
                    </div>

                    <div>
                        COMMUNITY
                    </div>

                    <div>
                        LOCATION
                    </div>

                    <div>
                        OUR MENU
                    </div>

                    <div>
                        RECIPES
                    </div>

                </div>

                <div className="rightBar">

                    <div>
                        CONTACT
                    </div>

                    <div>
                        LOGIN
                    </div>
                    
                </div>
                
            </div>

            <div className="middleBar">

                <div className="sideBand">
                    <p>this will be the side band</p>
                </div>

                <div className="requestInfo">
                    <p>REQUEST INFO</p>
                </div>

            </div>

        </>
    )
}

export default NavBar
