import './PickupOrDeliv.css'
import {useState} from 'react'

export const PickupOrDeliv = () => {
    const [toggle, setToggle] = useState(false)
    return  (
        <div>
            <button onClick={()=>setToggle(false)}>Delivery</button>
            <button onClick={()=>setToggle(true)}>Pick Up</button>
            {/* if toggle, that means pickup */}
            {toggle}
        </div>
    )
}
