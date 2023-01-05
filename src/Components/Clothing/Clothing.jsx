import React from 'react'
import { Link } from "react-router-dom"
import "./Clothing.css"
import style1 from "../../Assets/style1.png"
import style2 from "../../Assets/style2.png"
import style3 from "../../Assets/style3.png"
import style4 from "../../Assets/style4.png"
// import style5 from "../../Assets/style5.png"
import style6 from "../../Assets/style6.png"
// import style7 from "../../Assets/style7.jpeg"
// import style8 from "../../Assets/style8.jpg"



const Clothing = () => {
  return (
    <div>
        <h1>New Arrivals</h1>
        <div className='Collection'>
            <div className='Item'>
                <Link to="/Calamari-Set"><img src={style1} alt="fimg" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style2} alt="simg" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style3} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style4} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style6} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style1} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style3} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style4} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style2} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
            
                <Link><img src={style6} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>
            
            <div className='Item'>
                <Link><img src={style3} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>

            <div className='Item'>
                <Link><img src={style1} alt="" /></Link>
                <div className="Desc">
                    <p className='Name'>Calamari Set</p>
                    <div className="Price">#17,000</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Clothing
