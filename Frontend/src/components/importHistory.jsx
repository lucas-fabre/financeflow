import { useEffect, useState } from "react";

// Cette fonction permettra d'afficher un tableau contenant les transactions de l'utilisateur.
function ImportHistory() {
    // useState est une fonction qui permet de créer une variable d'état. Cette variable est un tableau qui contient deux valeurs.
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch est une fonction qui permet de faire une requête HTTP. Elle prend en paramètre l'URL de la requête.
        fetch("http://localhost:3000/transactions")
        // then est une fonction qui permet de récupérer la réponse de la requête HTTP.
        // Elle prend en paramètre une fonction qui prend en paramètre la réponse de la requête HTTP.
        .then(response => response.json())
        .then(data => setData(data))
        // catch est une fonction qui permet de récupérer l'erreur de la requête HTTP.
        .catch(error => console.log(error));
    } , []);

    // return est la valeur de retour de la fonction.
    return (
        // Cette div est le code HTML à retourner. elle peut être vide ou comporter des attributs comme ici "className".
        // className est un attribut qui permet de donner une classe à un élément HTML et sera éditable dans le fichier "App.css".
        <div className="History">

            {/* h1 représente le titre de notre futur tableau */}
            <h1>Vos transactions</h1>

            <table className= "TableHistory">
                <thead className="TableHistoryHead">
                    <tr>
                        <th>Date</th>
                        <th>Transaction</th>
                        <th>Montant</th>
                    </tr>
                </thead>
                <tbody className="TableHistoryBody">
                    {/* .map est une fonction qui permet de parcourir un tableau et de retourner un autre tableau.*/}
                    {data.map((data, index) => (
                        <tr key= {index}>
                            <td>{data.date}</td>
                            <td>{data.title}</td>
                            <td>{data.value + "€"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ImportHistory;