import { Link } from "react-router";
import { CursoProps } from "../../types/curso";

function Carditem({ descripcion, foto, nombre,  id }: CursoProps) {
    return (
       
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={foto} alt="Blog Image" />
                </div>

                <div className="grow">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {nombre}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-neutral-400 text-justify">
                        {descripcion}
                    </p>
                    <Link to={`item/${id}`}>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">

                            Leer más
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="m9 18 6-6-6-6" /></svg>

                        </p>
                    </Link>
                </div>
            </div>
       
    );
}
export default Carditem;
