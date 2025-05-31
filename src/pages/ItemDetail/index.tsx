import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { CursoProps } from "../../types/curso";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


function ItemDetail() {
    const { id } = useParams();


    const { data: curso, loading, error } = useFetch<CursoProps>("cursos", id);

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
        <main>
            <Header></Header>
            <br></br><br></br>
            <div className="product p-3 grid grid-cols-1 md:grid-cols-2 text-justify md:items-center">
                <div className="product-image mb-4">
                    <img src={curso.foto} alt={curso.nombre} className="max-w-[300px] mx-auto"></img>
                </div>
                <div className="product-info">
                    <h2 className="product-title text-4xl uppercase font-bold mb-4">{curso.nombre}</h2>
                  
                    <p className="product-description">{curso.descripcion}</p>
                    <p className="product-price text-2xl font-bold">Costo: s/{curso.precio} soles</p>

                </div>

            </div>
            <br></br><br></br>
            <Footer></Footer>
        </main>
    );
}
export default ItemDetail;