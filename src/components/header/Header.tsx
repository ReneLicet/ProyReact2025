function header() {
    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-full mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
                <div className="px-4 md:px-0 flex justify-between items-center">
                    <div className="flex items-center">

                        <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="../templates/personal/index.html" aria-label="Preline">
                        <img src="https://proy-react2025-git-main-renee-cardenas-projects.vercel.app/fotos/LOGO.png" className="max-w-[20%]"></img>
                        </a>
                        <div className="ms-1 sm:ms-2">

                        </div>
                    </div>

                    <div className="md:hidden">
                        <button type="button" className="hs-collapse-toggle flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                            <svg className="hs-collapse-open:hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  ><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>

                <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
                        <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200" href="#" aria-current="page">Home</a>
                        <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Projects</a>
                        <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Work</a>
                        <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Articles</a>
                    </div>
                </div>
            </nav>
        </header>

    );
}
export default header;