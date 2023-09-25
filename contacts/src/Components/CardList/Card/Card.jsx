import PropTypes from 'prop-types';
import "./Card.css"

function Card({name, role, phone, email, image}){

    Card.propTypes = {
        name: PropTypes.string,
        role: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        image: PropTypes.string
      };

    return(
        <>
            <img src={image} alt="Profile picture" />
            <div className='main-info-container'>
                <div className='info-container'>
                    <p className='info-left'>Name:</p> 
                    <p className='info-right'>{name}</p>
                </div>
                <div className='info-container'>
                    <p className='info-left'>Role:</p> 
                    <p className='info-right'>{role}</p>
                </div>
                <div className='info-container'>
                    <p className='info-left'>Phone:</p> 
                    <p className='info-right'>{phone}</p>
                </div>
                <div className='info-container'>
                    <p className='info-left'>Email:</p> 
                    <p className='info-right'>{email}</p>
                </div>
            </div>
        </>
    )
}

export default Card;