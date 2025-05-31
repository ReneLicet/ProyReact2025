import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Carditem from "../../components/carditem/Carditem"
import { useFetch } from "../../hooks/useFetch";
import { CursoProps } from "../../types/curso";
function Home2() {

  const { data: cursos, loading, error } = useFetch<CursoProps[]>("cursos");
  console.log(cursos);



  if (loading) {
    return <div>Cargando</div>;
  }
  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <main>
      <Header></Header>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto md:items-center">

        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {Array.isArray(cursos) ? cursos.map((curso: CursoProps) => (
            <Carditem key={curso.id}{...curso} />)) : <p>No hay productos disponibles</p>}

        
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default Home2;