import cart from "./assets/cart.svg"
import { useState } from "react"
import { Modal } from "./components/Modal.jsx"
import {RestaurantStatus} from './components/RestaurantStatus.jsx'
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
      <div>
        <button><img src={cart} alt="cart" /></button>
        <button>Sign in</button>
        <button>Sign up</button>
        <div>
          <RestaurantStatus />
        </div>
        <button onClick={()=>setModalOpen(true)}><Card /></button>
        {modalOpen && 
          <Modal onClose={handleButtonClick}>
            <h1>Taco De Asada</h1>
            <p>#3 most liked</p>  
          </Modal>
        }
        behind the modal
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
          <div>
            <span>$4.23</span>
            <span>
              <span>•</span>
              <span> 91%</span>
            </span>
          </div>  
          <div>
            <p>#1 most liked</p>
          </div>
        </div>
        <img src="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=70/media/photosV2/da74e716-b049-4c8c-9d3f-740141511dd6-retina-large.jpg" alt="taco" className="image"/>  
      </div>  
    </div>
  )
}

export default App
