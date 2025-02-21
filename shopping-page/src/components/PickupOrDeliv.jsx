import './PickupOrDeliv.css'
import { useState } from 'react'

export const PickupOrDeliv = () => {
    const [toggle, setToggle] = useState(false)
    return  (
        <div className='PDcontainer'>
            <div className='buttonContainer'>
                <button onClick={()=>setToggle(false)} className={!toggle? 'black': 'white'}>Delivery</button>
                <button onClick={()=>setToggle(true)}  className={!toggle? 'white': 'black'}>Pick Up</button>
            </div>
            {/* if toggle, that means pickup */}
                {toggle? 
                    <>
                        <p>Pricing</p>

                            <h2>
                                Pick up this order at: 
                            </h2>
                            <p>792 B Street</p>
                            <p> 16 min</p>
                    </>:
                    <div className='PDContainer'>
                        <p>4.7 mi away</p>
                        <p>31 min (delivery time) </p>
                    </div>
                }
        </div>
    )
}
