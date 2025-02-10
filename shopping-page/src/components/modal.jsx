import './Modal.css'
import PropTypes from 'prop-types';


export const Modal = ({onClose, children}) => {
    return (
        <div className="modalContainer">
            <div className="modal">
                <div className="modalHeader">
                    <p className='close' onClick={()=>onClose()}>&times;</p>
                </div>
                <div className="modalContent">
                    {children}
                    <img src="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=70/media/photosV2/da74e716-b049-4c8c-9d3f-740141511dd6-retina-large.jpg" alt="taco" className="image"/>
                </div>
                <div className="modalFooter"></div>
                    <button className='button redBtn'>Add to Cart</button>
                
            </div>
        </div>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
}