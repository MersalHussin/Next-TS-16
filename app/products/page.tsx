'use client'
import { useEffect, useState } from "react";


const ProductsPage = () => {
       const[products,setProducts] = useState([])
       useEffect(() => {
           fetch('/api/products')
           .then(res => res.json())
           .then(body => setProducts(body))
       },[])

    console.log(products);
    return (
        <div>
        {products.map((product:{id:number,name:string}) =>{
            return(
                <div key={product.id}>
                <h1>{product.name}</h1>
                </div>
            )
          })}
        </div>
    );
}

export default ProductsPage;
