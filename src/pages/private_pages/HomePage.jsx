import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPeople } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import NavLinked from "../../components/NavLinked";

const HomePage = () => {
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpened(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="flex min-h-screen">
                <div className="flex justify-end mb-5 md:hidden relative">
                    <button
                        className={`md:hidden p-2 rounded-md bg-indigo-800 text-white focus:outline-none focus:ring focus:border-indigo-300 transition duration-300  absolute top-5 left-5 z-10`}
                        onClick={() => setIsOpened(!isOpened)}
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>
                <aside
                    className={`md:w-1/5 bg-indigo-600 px-5 py-10 flex flex-col justify-between h-screen transition-all duration-1000 ease-in-out md:transform md:translate-x-0 md:relative ${
                        isOpened
                            ? "max-w-full transform translate-x-0"
                            : "max-w-0 transform -translate-x-full overflow-hidden"
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
                    <footer className="text-center text-gray-400 text-xs sm:text-sm md:text-base">
                        Cualquier duda y/o consulta : soporte@appsalon.cl
                    </footer>
                </aside>
                <div className="flex flex-col w-full">
                    <div className=" h-16 bg-indigo-600 text-white flex items-center justify-between px-5 z-10">
                        <h1>Hola :</h1>
                        <nav>
                            {/* enlaces*/}
                        </nav>
                    </div>
                    <main
                        className={`w-full mt-5 md:flex-grow p-10 md:h-auto transition-transform duration-300 ease-in-out ${
                            isOpened ? "ml-1/5" : "ml-0"
                        }`}
                    >
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default HomePage;
