import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { CursoProps } from "../../types/curso";


function ItemDetail() {
    const { id } = useParams();
    
  
    const { data: curso, loading, error } = useFetch<CursoProps>("cursos",id);

    if (loading) {
        return <div>Cargando producto</div>;
    }
    if (error) {
        return <div>Error:{error.message}</div>;
    }
    if (!curso) {
        return <div>curso no encontrado</div>;
    }
    return (
        <section>
            <div className="product p-3 grid grid-cols-1 md:grid-cols-2">
                <div className="product-image mb-4">
                    <img src={curso.foto} alt={curso.nombre} className="max-w-[250px] mx-auto"></img>
                </div>
                <div className="product-info">
                    <h2 className="product-title text-4xl uppercase font-bold mb-4">{curso.nombre}</h2>
                    <p className="product-price text-2xl font-bold">{curso.precio}</p>
                    <p className="product-description">{curso.descripcion}</p>
                  
                </div>
               
            </div>
        </section>
    );
}
export default ItemDetail;