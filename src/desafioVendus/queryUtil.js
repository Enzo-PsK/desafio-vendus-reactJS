import React from "react";
import { Link } from "react-router-dom";
  
export default async function fetchData(type, query) {
    let rows = []
    let urlToGet = ""

    if((type === "All") && (query === "")){
        // SHOW ALL TYPES WITHOUT SEARCHING
        urlToGet = "https://api.allorigins.win/raw?url=https://www.vendus.pt/ws/documents/?api_key=b466e4b7ca33df8e6d372da48f0468ad";
    }

    else{
        if((type !== "All") && (query === "")){
            // SHOW ONE TYPE WITHOUT SEARCHING
            let original_url = "https://www.vendus.pt/ws/documents/?api_key=b466e4b7ca33df8e6d372da48f0468ad&type=" + String(type);
            urlToGet = `https://api.allorigins.win/raw?url=${encodeURIComponent(original_url)}`
        }

        else{
            if((type !== "All") && (query !== "")){
                // SHOW ONE TYPE WITH SEARCHING
                let query_uri = encodeURIComponent(query)
                let original_url = "https://www.vendus.pt/ws/documents/?api_key=b466e4b7ca33df8e6d372da48f0468ad&type=" + String(type) + "&q=" + query_uri;
                urlToGet = `https://api.allorigins.win/raw?url=${encodeURIComponent(original_url)}`
            }

            else{
                if((type === "All") && (query !== "")){
                    // SHOW ALL TYPES WITH SEARCHING
                    let original_url = "https://www.vendus.pt/ws/documents/?api_key=b466e4b7ca33df8e6d372da48f0468ad&q=" + query;
                    urlToGet = `https://api.allorigins.win/raw?url=${encodeURIComponent(original_url)}`
                }
            }
        }
    }

    try{
        let response = await fetch(urlToGet)
        let data = await response.json()

        rows = await data.map((document, i) => {
        return (
          <tr key={i} className={i%2 === 0 ? 'striped-item' : ''}>
            <td>
                <Link to={`/details/${document.id}`}>
                    {document.id} 
                </Link>
            </td>
            <td>{document.number}</td>
            <td>{document.date}</td>
            <td>{document.type}</td>
            <td>€ {document.amount_gross}</td>
            <td>{document.status}</td>
          </tr>
        );
      })

      return rows
    }catch(error){
        console.log(error)
        return(
            <tr>
            <td colSpan={6}><h2>Nothing was found!</h2></td>
            </tr>
        )
    }
  };