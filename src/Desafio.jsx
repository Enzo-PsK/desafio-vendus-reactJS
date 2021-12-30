import React, { useState } from "react";
import DocsTable from "./desafioVendus/DocsTable";
import PageHeader from "./desafioVendus/PageHeader";
import Details from "./desafioVendus/Details";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./desafioVendus/desafio.css";

export default (props) => {
  //Definição das props a serem utilizadas com o useState
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");

  //Funções que recebem a alteração de estado e fazem o update
  const handleTypeChange = (type) => {
    setType(type);
  };
  const handleQueryChange = (query) => {
    setQuery(query);
  };

  //render
  return (
    <div className="container-fluid">
      <PageHeader
        type={type}
        query={query}
        onTypeChange={handleTypeChange}
        onQueryChange={handleQueryChange}
      />
      <Router>
        <Routes>
          <Route path="/" element={<DocsTable type={type} query={query} />} />
          <Route exact path="/home" element={<DocsTable type={type} query={query} />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};
