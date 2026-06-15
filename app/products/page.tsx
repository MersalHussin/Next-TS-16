   const getProducts = async () => {
   const response = await fetch('http://localhost:3000/api/products')
    return response.json()
   }


   console.log(getProducts());

const productsPage = async () => {
    const products = await getProducts()


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

export default productsPage;
