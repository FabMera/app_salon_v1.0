import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPeople } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoLogoBuffer } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import NavLinked from "../../components/NavLinked";

const HomePage = () => {
    const [isOpened, setIsOpened] = useState(window.innerWidth >= 768);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpened(true);
            } else {
                setIsOpened(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden ">
                <aside
                    className={`md:w-1/5 bg-indigo-600 px-5 py-10  transition-all duration-1000 ease-in-out md:transform md:translate-x-0 md:relative ${
                        isOpened
                            ? "max-w-full transform translate-x-0 visible absolute z-20 w-1/2"
                            : "max-w-0 transform -translate-x-full invisible md:block fixed  "
                    }`}
                >
                    <div>
                        <h2 className="text-xl mt-3  font-black text-center text-white">
                            CLIENTES
                        </h2>

                        <nav className="mt-10">
                            <NavLinked to="/clientes" setIsOpened={setIsOpened}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoPeople />
                                    <span className="ms-2">
                                        Listar Clientes
                                    </span>
                                </div>
                            </NavLinked>
                            <NavLinked
                                to="/clientes/nuevo"
                                setIsOpened={setIsOpened}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoCreateOutline />
                                    <span className="ms-2">Crear Cliente</span>
                                </div>
                            </NavLinked>
                            <hr className="border-gray-400 mt-3" />
                        </nav>
                        <h2 className="text-xl font-black text-center text-white mt-10">
                            AGENDA
                        </h2>
                        <nav className="mt-10">
                            <NavLinked to="/agenda" setIsOpened={setIsOpened}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoBookSharp />
                                    <span className="ms-2">Ver Agenda</span>
                                </div>
                            </NavLinked>
                            <NavLinked
                                to="/agenda/nuevo"
                                setIsOpened={setIsOpened}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoCreateOutline />
                                    <span className="ms-2">Nueva Cita</span>
                                </div>
                            </NavLinked>
                            <hr className="border-gray-400 mt-3" />
                        </nav>
                        <h2 className="text-xl font-black text-center text-white mt-10">
                            PROFESIONALES
                        </h2>
                        <nav className="mt-10">
                            <NavLinked to="/profesionales">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoIosPeople />
                                    <span className="ms-2">
                                        Lista profesionales
                                    </span>
                                </div>
                            </NavLinked>
                            <NavLinked to="/profesionales/nuevo">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoCreateOutline />
                                    <span className="ms-2">
                                        Crear profesional
                                    </span>
                                </div>
                            </NavLinked>
                            <hr className="border-gray-400 mt-3" />
                        </nav>
                        <h2 className="text-xl  font-black text-center text-white mt-10">
                            VENTAS
                        </h2>
                        <nav className="mt-10">
                            <NavLinked to="/ventas">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <BiMoneyWithdraw />
                                    <span className="ms-2">Ventas</span>
                                </div>
                            </NavLinked>
                            <NavLinked to="/ventas/nueva">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoCreateOutline />
                                    <span className="ms-2">Nueva Venta</span>
                                </div>
                            </NavLinked>
                            <hr className="border-gray-400 mt-3" />
                        </nav>
                    </div>
                    <footer className="text-center mt-3 text-gray-400 text-xs sm:text-sm md:text-base">
                        Cualquier duda y/o consulta : soporte@appsalon.cl
                    </footer>
                </aside>
                <div className="flex flex-col w-full">
                    <header className="bg-indigo-600 p-5 ">
                        <RxHamburgerMenu
                            className="text-white hover:text-gray-300  transform transition-transform hover:scale-110 text-3xl cursor-pointer md:hidden fixed  left-5 z-30"
                            onClick={() => setIsOpened(!isOpened)}
                        />
                        <nav className="relative">
                            <div className="flex space-x-8 items-center justify-end">
                                <NavLinked to="/registros">
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <IoLogoBuffer />
                                        <span className="ms-2 text-base">Registros</span>
                                    </div>
                                </NavLinked>
                                <NavLinked to="/contacto">
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <MdContactMail />
                                        <span className="ms-2 text-base">Contacto</span>
                                    </div>
                                </NavLinked>
                                <div className="relative">
                                    <button
                                        className=" bg-indigo-500 text-white px-3 py-2 mt-2 rounded-md text-base font-medium hover:bg-indigo-700 flex items-center"
                                        onClick={() =>
                                            setDropdownOpen(!dropdownOpen)
                                        }
                                    >
                                        Usuario
                                        <svg
                                            className="h-5 w-5 ml-2 -mr-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {dropdownOpen && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div
                                                className="py-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu"
                                            >
                                                <NavLink
                                                    to="/perfil"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                                    
                                                >
                                                    Perfil
                                                </NavLink>
                                                <NavLink
                                                   to="/login"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                                    
                                                >
                                                    Actividad
                                                </NavLink>
                                                <NavLink
                                                    to="/logout"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                                   
                                                >
                                                    Logout
                                                </NavLink>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </header>
                    <main
                        className={`w-full mt-5 p-10 ${
                            isOpened ? "md:flex-row" : "md:flex-col"
                        } md:flex-grow overflow-y-auto transition-transform duration-300 ease-in-out`}
                    >
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default HomePage;
