import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFech from "./hooks/useFech";
import LocationCard from "./components/LocationCard";
import ResidentCard from "./components/ResidentCard";
import Pagination from "./components/Pagination";

function App() {
  //const [location, setLocation] = useState();
  const [location, getLocation, isLoading, hasError] = useFech();
  const [search, setSearch] = useState(Math.floor(Math.random() * 126 + 1));

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //const search = Math.floor(Math.random()*126)
    const url = `https://rickandmortyapi.com/api/location/${search}`;
    getLocation(url);
  }, [search]);

  const textInput = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(textInput.current.value.trim());
    event.target.reset();
  };
  //console.log(search);
  const quantity = 5;
  const second = currentPage * quantity;
  const first = second - quantity;
  const residentPart = location && location.residents.slice(first, second);
  const totalPages = location && Math.floor(location.residents.length / quantity) + 1;

  return (
    <div className="app">
      {isLoading ? (
        <h2>Loading........</h2>
      ) : (
        <>
          <div className="banner"></div>
          <form action="" onSubmit={handleSubmit} className="app__form">
            <input type="number" ref={textInput} className="app__text" />
            <button className="app__btn">Search</button>
          </form>
          {hasError || search === "0" ? (
            <h2>this location do not exist</h2>
          ) : (
            <>
              <LocationCard location={location} />
              <div className="app__container">
                {residentPart.map((resident) => (
                  <ResidentCard 
                  key={resident} 
                  url_link={resident} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
