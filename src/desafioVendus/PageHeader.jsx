import React, {useState} from "react";
import "./desafio.css";
import DropdownMenu from "./DropdownMenu";

export default (props) => {

  const [type, setType] = useState('All')
  const [query, setQuery] = useState('')

  const handleTypeChange = (type) => {
    setType(type)
    props.onTypeChange(type)
  }
  const handleQueryChange = (query) => {
    setQuery(query)
    props.onQueryChange(query)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="../home">
            <img id="header-logo" src="https://raw.githubusercontent.com/Enzo-PsK/desafio-vendus-enzo/main/images/vendus-logo.png"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="../home">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                onChange={(e)=> {setQuery(e.target.value); handleQueryChange(e.target.value)}}
                className="form-control me-2"
                type="search"
                placeholder="Search Invoice"
                aria-label="Search"
                id="search-input"
              />
            </form>
            <DropdownMenu type={type} onTypeChange={handleTypeChange}/>
          </div>
        </div>
      </nav>
    </div>
  );
};
