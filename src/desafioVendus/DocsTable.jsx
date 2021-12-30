import React, { useState, useEffect } from "react";
import TableHead from "./TableHead";
import fetchData from "./queryUtil";

export default (props) => {
  //Utilizando Hooks (useState) para manipular o estado do componente
  let [rows, setRows] = useState([]);
  const type = props.type;
  const query = props.query;

  //Utilizando useEffect para inicializar o componente
  useEffect(() => {
    const firstLoad = async () => {
      let data = await fetchData(type, "");
      console.log(data)
      setRows(data);
    };
    firstLoad();
  }, []);

  // Função que será chamada quando as variáveis [type ou query] tiverem o seu estado alterado
  useEffect(() => {
    const changeType = async () => {
      let data = await fetchData(type, query);
      setRows(data);
    };
    changeType();
  }, [type, query]);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <TableHead />
        <tbody className="table-body">{rows}</tbody>
      </table>
    </div>
  );
};
