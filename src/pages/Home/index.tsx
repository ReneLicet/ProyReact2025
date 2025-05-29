
import Product from "../../components/Product";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";
function Home() {


  const { data: products, loading, error } = useFetch<ProductProps[]>("productos");
  console.log(products);



  if (loading) {
    return <div>Cargando</div>;
  }
  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <main>
      <section className="new-arrivals">
        <h2 className="uppercase text-center text-[32px] lg:text-[48px] font-bold text-peru">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">


         


          {Array.isArray(products) ? products.map((product: ProductProps) => (
            <Product key={product.id}{...product} />)) : <p>No hay productos disponibles</p>}


        </div>
      </section>
    </main>
  );
}

export default Home;