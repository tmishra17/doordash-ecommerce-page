import './PickupOrDeliv.css'
import {useState} from 'react'

export const PickupOrDeliv = () => {
    const [toggle, setToggle] = useState(false)
    return  (
        <div>
            <button onClick={()=>setToggle(false)}>Delivery</button>
            <button onClick={()=>setToggle(true)}>Pick Up</button>
            {/* if toggle, that means pickup */}

            {toggle? 
                <>
                    <p>Pricing</p>
                    <div>
                        <h2>
                            Pick up this order at: 
                        </h2>
                        <p>792 B Street</p>
                        <p> 16 min</p>
                    </div>
                </>:
                <>
                    <p>4.7 mi away</p>
                    <div>31 min (delivery time)</div>
                </>
             }
        </div>
    )
}
