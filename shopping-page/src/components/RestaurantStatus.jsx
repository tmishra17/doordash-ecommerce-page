import './RestaurantStatus.css'
import {useState, useEffect, useRef} from 'react'

export const RestaurantStatus = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [checkShowMore, setCheckShowMore] = useState(false)
    const [showShowMoreButton, setShowShowMoreButton] = useState(false)
    const ref = useRef(null)
    const openingHour = 11
    const closingHour = 21
    const closingMinute = 45
    useEffect(()=> {
        const checkOpenStatus = () => {
            const now = new Date()
            let hours = now.getHours()
            // let minutes = now.getMinutes()
            // let period = hours >= 12? "PM":"AM"

            // if hours is am, then change hours to 12
            if(hours === 0) {
                hours = 12
            }
            else if (hours > 12) {
                hours -= 12
            }
            
            if (now.getHours() < openingHour || now.getHours() > closingHour 
            || (now.getHours() === closingHour && now.getMinutes() > closingMinute)) {
                setIsOpen(false)
            }
            else {
                setIsOpen(true)
            }
        }
        
        checkOpenStatus()
        const interval = setInterval(checkOpenStatus, 60000)
        return () => clearInterval(interval)
    }, [])

    useEffect(()=>{
        if (ref.current) {
            setShowShowMoreButton(ref.current.scrollHeight!== ref.current.clientHeight)
        }
    }, [])
    const cHour = closingHour -12
    return (
        <div className='display'>
            <p>
                {isOpen ? `Open Until ${cHour}:${closingMinute}pm` : `Closed, Opens at ${openingHour}am`}
            </p>
            <p className={showShowMoreButton? 'readMore': null} ref={ref}>Alfonso Montero, Carlos&apos; father, was a gourmand before it was popular to be one. Carlos, as the oldest son, was well-versed in the kitchen from an early age. In their little village of La Estancia de los Lopez in Nayarit, Mexico, Alfonso&apos;s passion for butchering resulted in some of the greatest tacos. That wasn&apos;t only the Monteros&apos; opinion, but the town&apos;s as well, once Tacos Montero arrived on the scene in their hometown.
            The younger Montero&apos;s passion for food led him to his wife&apos;s hometown of Mexico City, often known as the DF (Districto Federal, or Federal District). The DF is Mexico&apos;s capital, and as such, it is a melting pot of regional cuisines from all across the country</p>
            {showShowMoreButton &&
                <a onClick={()=>setCheckShowMore(!checkShowMore)} className='link'> {checkShowMore? "Show More": "Show Less"}</a>
            }

        </div>
    )
}

