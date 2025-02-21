import ShoppingCart from "./assets/ShoppingCart.svg"
import { useState } from "react"
import { Modal } from "./components/Modal.jsx"
import { RestaurantStatus } from './components/RestaurantStatus.jsx'
import { Carousel } from "./components/Carousel.jsx"
import { PickupOrDeliv } from "./components/PickupOrDeliv.jsx"
// import likeButton from "./assets/LikeButton.svg"
import './App.css'

// use Modal when clicking on card or cart icon
// link: https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/c58d4a66-0d0c-4d8d-9735-64c26a665c15.jpeg
// src="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=70/media/photosV2/da74e716-b049-4c8c-9d3f-740141511dd6-retina-large.jpg "

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const handleButtonClick = () => {
    setModalOpen(false)
  }

  return (
    <div className="container">
      <button className="cartButton"><img src={ShoppingCart} className="icon" alt="cart" /></button>
      <button>Sign in</button>
      <button>Sign up</button>
      <div>
        <RestaurantStatus />
      </div>
      <PickupOrDeliv />
      <Carousel>
      </Carousel>
      <div>
        <button onClick={() => setModalOpen(true)}><Card /></button>
        <button onClick={() => setModalOpen(true)}><Card /></button>
      </div>
      {modalOpen && 
        <Modal onClose={handleButtonClick}>
          <h1>Taco De Asada</h1>
          <p>#3 most liked</p>
        </Modal>
      }
      behind the modal
      <div className="foodChoices">
        <div><button>Most Ordered</button></div>
        <div><button>Tacos</button></div>
        <div><button>Super Tacos</button></div>
        <div><button>Tortas</button></div>
        <div><button>Quesadillas</button></div>
        <div><button>Burritos</button></div>
        <div><button>Huaraches</button></div>
        <div><button>Caldos</button></div>
        <div><button>Seafood</button></div>
        <div><button>Veggie</button></div>
        <div><button>Platillos</button></div>
        <div><button>Extras/sides</button></div>
        <div><button>Drinks</button></div>
        <div><button>Agua Fresca</button></div>
        <div><button>Bebidas De Vidrio (glass soda)</button></div>
      </div>
      {/* finish the modal later and be cool */}
    </div>
  )
}


function Card() {
  return (
    <div className="card">
      <div>
        <div>
          <p className="cardFoodText">Taco de Asada</p>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Taco de Asada</h2>
          <p className="text-gray-600">$4.23 - 91% rating</p>
        </div>
        </div>
        <img src="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=70/media/photosV2/da74e716-b049-4c8c-9d3f-740141511dd6-retina-large.jpg" alt="taco" className="image"/>  
      </div>  
    </div>
  )
}

// make sure you are in the right directory (shopping page) when you type npm run dev

export default App
