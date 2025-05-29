import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function ProductDetail() {
    const { id } = useParams();
    const context = useContext(ShoppingCartContext);
    
    const handleAddToCart = (product: ProductProps) => {
        const updatedCart = [...context.cartProducts, product];
        context.setCartProducts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    const { data: product, loading, error } = useFetch<ProductProps>("productos",id);

    if (loading) {
        return <div>Cargando producto</div>;
    }
    if (error) {
        return <div>Error:{error.message}</div>;
    }
    if (!product) {
        return <div>Producto no encontrado</div>;
    }
    return (
        <section>
            <div className="product p-3 grid grid-cols-1 md:grid-cols-2">
                <div className="product-image mb-4">
                    <img src={product.image} alt={product.title} className="max-w-[250px] mx-auto"></img>
                </div>
                <div className="product-info">
                    <h2 className="product-title text-4xl uppercase font-bold mb-4">{product.title}</h2>
                    <p className="product-price text-2xl font-bold">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-action">
                        <button onClick={() => handleAddToCart(product)} className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">Agregar al carrito</button>
                    </div>
                </div>
                <p>Cantidad de productos en el carrito{context.cartProducts.length}</p>
            </div>
        </section>
    );
}
export default ProductDetail;