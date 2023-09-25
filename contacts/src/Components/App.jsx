import {useState, useEffect} from "react";
import NavBar from "./NavBar/NavBar";
import CardList from "./CardList/CardList";

function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  
  const filteredContactArray = allContacts.filter(contact => {
    return contact.name.toLowerCase().includes(searchInput.toLowerCase())
  })
  
  async function getPeople() {
    const response = await fetch('https://marije-db.github.io/APIs/people-api/people.json');
    const data = await response.json();
    setAllContacts(data);
  }

  function searchValue(event) {
    setSearchInput(event.target.value)
    setFilteredContacts(filteredContactArray)
  }

  useEffect(() => {
    setFilteredContacts(filteredContactArray)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchInput])

  useEffect(() => {
    getPeople();
  }, [])

  return (
    <>
      <NavBar searchValue={searchValue} />
      <CardList contacts={allContacts} filteredContacts={filteredContacts} searchInput={searchInput} />
    </>
  )
}

export default App
