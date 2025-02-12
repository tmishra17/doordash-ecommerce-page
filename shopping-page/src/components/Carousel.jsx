import './Carousel.css'
import { CarouselItem } from "./CarouselItem.jsx"

export const Carousel = () => {
    return (
    <div>
        Carousel
        <CarouselItem></CarouselItem>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
    </div>
    )
}
