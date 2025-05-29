import { Link } from "react-router";
import { ProductProps } from "../../types/product";
import "./index.css"

function Product({ title, price, image, id }: ProductProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="Producto" className="max-w-[150px]"></img>
      </div>
      <div className="product-info">
        <Link to={`/products/${id}`}>
          <h3 className="text-[20px] font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px] w-[300px]">{title}</h3>
          <p className="text-[24px] font-bold">${price}</p>
        </Link>
      </div>
    </div>
  );
}
export default Product;