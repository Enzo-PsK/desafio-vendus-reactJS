import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./desafio.css";

export default (props) => {
  const { id } = useParams();
  const [data, setData] = useState({
    client: { name: "Sample", fiscal_id: 123456789 },
    items: [
      {
        title: "Item X",
        qty: 10,
      },
    ],
    payments: [
      {
        title: "Multibanco",
        amount: "10.00",
      },
    ],
    amount_gross: "31.37",
    amount_net: "30.00",
  });

  //Definição do setData ao inicializar o componente
  useEffect(() => {
    const firstLoad = async () => {
      let data = await fetchDetails(id);
      setData(data);
    };
    firstLoad();
  }, []);

  // Função que faz o fetch dos dados da fatura
  async function fetchDetails(id) {
    const base_url = `https://www.vendus.pt/ws/documents/${id}/?api_key=b466e4b7ca33df8e6d372da48f0468ad`;
    const urlToGet = `https://api.allorigins.win/raw?url=${encodeURI(
      base_url
    )}`;
    try {
      const response = await fetch(urlToGet);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Invoice #{id}</h2>
      <h4>
        <a
          href={`https://www.vendus.pt/ws/documents/${id}.pdf?api_key=b466e4b7ca33df8e6d372da48f0468ad`}
          target="_blank"
        >
          See document in PDF
        </a>
      </h4>
      <table className="table details-table">
        <tbody className="table-body">
          <tr>
            <th rowSpan="2">Client Info:</th>
            <td className="secInfos">{data.client.name}</td>
          </tr>
          <tr>
            <td>NIF: {data.client.fiscal_id}</td>
          </tr>
          <tr>
            <th>Itens:</th>
            <td>
              {data.items[0].title} x {data.items[0].qty}
            </td>
          </tr>
          <tr>
            <th rowSpan="2">Payments:</th>
            <td className="secInfos">{data.payments !== undefined? data.payments[0].title: 'Not found'}</td>
          </tr>
          <tr>
            <td>€ {data.payments !== undefined? data.payments[0].amount: 'Not found'}</td>
          </tr>
          <tr>
            <th> Gross Amount:</th>
            <td>€ {data.amount_gross}</td>
          </tr>
          <tr>
            <th> Net Amount:</th>
            <td>€ {data.amount_net}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
