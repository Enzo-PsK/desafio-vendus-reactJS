import React, { useState } from "react";
import fetchData from "./queryUtil";
import "./desafio.css";

export default (props) => {
  let [type, setType] = useState("Filter");

  // props.onTypeChange() será utilizado para dar update ao componente pai
  // setType() será utilizado para dar update a UI deste componente

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {type}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a
            className="dropdown-item"
            href="#"
            value="All"
            onClick={() => {
              props.onTypeChange("All");
              setType("All");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            value="FT"
            onClick={(e) => {
              props.onTypeChange("FT");
              setType("FT");
            }}
          >
            FT
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            value="FR"
            onClick={(e) => {
              props.onTypeChange("FR");
              setType("FR");
            }}
          >
            FR
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            value="FS"
            onClick={(e) => {
              props.onTypeChange("FS");
              setType("FS");
            }}
          >
            FS
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            value="NC"
            onClick={(e) => {
              props.onTypeChange("NC");
              setType("NC");
            }}
          >
            NC
          </a>
        </li>
      </ul>
    </div>
  );
};
