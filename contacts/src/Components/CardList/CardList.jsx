import Card from "./Card/Card"
import PropTypes from 'prop-types';
import "./CardList.css"

function CardList({contacts, filteredContacts, searchInput}){
    CardList.propTypes = {
        contacts: PropTypes.array,
        filteredContacts: PropTypes.array,
        searchInput: PropTypes.string
      };

    return(
        <>
            <div className="cards-container">
                {
                    searchInput.length > 0 ?
                    filteredContacts.map(contact => {
                        return (
                            <div className="card-container" key={contact.id}>
                                <Card 
                                key={contact.id} 
                                name={contact.name}
                                role={contact.role}
                                phone={contact.phonenumber}
                                email={contact.email}
                                image={contact.img}
                                id={contact.id}
                                />
                            </div>
                        )
                    }) 
                    :
                    contacts.map(contact => {
                        return (
                            <div className="card-container" key={contact.id}>
                                <Card 
                                key={contact.id} 
                                name={contact.name}
                                role={contact.role}
                                phone={contact.phonenumber}
                                email={contact.email}
                                image={contact.img}
                                id={contact.id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CardList