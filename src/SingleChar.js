import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import UnsplashModal from './UnsplashModal';

//destructure char from props
const SingleChar = ({char}) => {
    
    const [showModal, setShowModal] = useState(false); //triggers open/close of modal

    return (
        <div className="card" style={{ width: "18rem", margin:"50px 50px" }}>        
          <img className="card-img-top" src={char.image.icon_url} alt="character"></img>
        <div className="card-body">
            <h5 className="card-title">{char.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted"> {char.gender === 1 ? "Male" : "Female"} </h6>
            <h6 className="card-subtitle mb-2 text-muted"> Birthday : {char.birthday ? char.birthday : "unknown"} </h6>                    
        <p className="card-text">{char.deck}</p>
            <Button onClick={() => window.location.reload()}>Back</Button>
        </div>  
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Modal for random unrelated picture 
      </Button>

      <UnsplashModal
        show={showModal}
        hide={() => setShowModal(false)}
      />
    </>      
        </div>
    )
}

export default SingleChar