import moment from "moment"

export const CustomCard = ({ data, style })=> {
    return (
        <div style={{ ...style, width: 400, background: "white", border: "1px solid black"}} >
            <div className="card-content" >
                <h4>Lot: {data?.id}</h4>
                <p>Nom du produit: {data?.product_name}</p>
                <p>Prix initial: {data?.initial_price}</p>
                <p>Find de l'enchère: {moment(data?.end_date).format("DD MMMM YYYY")}</p>
            </div>
        </div>
    )
}