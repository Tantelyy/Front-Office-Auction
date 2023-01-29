import { CustomCard } from "../../components/card/CustomCard";
import { fake_products } from "../../utils/data"

export const ListProducts = ()=>{
    const produits = fake_products;
    return(
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around" }} >
            {produits.map((produit)=> <CustomCard key={produit.id} data={produit} />)}
        </div>
    )
}