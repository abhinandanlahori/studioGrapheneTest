import React from 'react'

function Collaborate() {
    return (
        <div className="collaborate">

            <img className="collabDetail" src="../detail02.png" alt="detail01"/>

            <div className="collabLeftText">

                <div>
                    <h2>COLLABORATE</h2>

                    <h1>WITH US</h1>

                    <span></span>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor incididunt ut labore et<br/>dolore magna aliqua.</p>

                <p id="botLeftText">Ut enim ad minim veniam, quis nostrud exercitation<br/>ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit<br/>in voluptate velit esse cillum dolore</p>

            </div>

            <div>

                <form>
                    <div>

                        <label>NAME</label>
                        <input className="nameSurnameForm" type="text" name="name" placeholder="Name"/>

                        <label>PHONE</label>
                        <input type="text" placeholder="Phone"/>

                        <label>EXPERIENCE</label>
                        <select>
                            <option defaultValue="Select" >Select</option>
                        </select>

                    </div>


                    <div>

                        <label>SURNAME</label>
                        <input  className="nameSurnameForm" type="text" placeholder="Surname"/>


                        <label>EMAIL ADDRESS</label>
                        <input type="text" placeholder="Email"/>


                        <label>WHERE DID YOU HEAR ABOUT US?</label>
                        <select>
                            <option defaultValue="Select" >Select</option>      
                        </select>

                        <button type="submit">SEND</button>

                    </div>


                </form>
                
            </div>
            
        </div>
    )
}

export default Collaborate;
