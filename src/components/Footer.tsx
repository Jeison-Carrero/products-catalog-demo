import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-yellow-400 font-bold pt-10">

            <div className="container mx-auto py-10 px-4 flex flex-col md:flex-row justify-between items-center">
            
                <div className="md:w-3/5 text-left">
                    <h2 className="text-lg font-bold uppercase mb-2">Ofertas y Promociones</h2>
                    <h3 className="text-2xl font-bold mb-4">No te pierdas nuestras ofertas!</h3>
                    <div className="flex items-center border-b-2 border-black pb-2">
                        <input
                            type="email"
                            placeholder="Tu dirección de correo electrónico"
                            className="bg-transparent text-black placeholder-black w-full focus:outline-none"
                        />
                        <button className="ml-2 text-black">
                            <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="text-blue-500 text-2xl"
                            />
                        </button>
                    </div>

                    <div className=" text-white text-sm py-4 mt-6">
                        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                            <p className="mb-2 md:mb-0">&copy; Macropay 2022. Todos los derechos reservados.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:underline">Envíos y devoluciones</a>
                                <a href="#" className="hover:underline">Aviso de privacidad</a>
                                <a href="#" className="hover:underline">Preguntas Frecuentes</a>
                                <a href="#" className="hover:underline">Términos y condiciones</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="md:w-1/5 text-center my-6 md:my-0">
                    <div className="text-6xl font-bold">
                    <img src="public\Carita.png"/>
                    </div>
                </div>
            
                <div className="md:w-1/5 text-right">
                    <h2 className="text-lg font-bold uppercase mb-2">Conversemos!</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet</p>
                    <div className="flex justify-end space-x-4">
                    <div className="flex space-x-4">
                        
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className=" text-4xl"
                        />
                        
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className=" text-4xl"
                        />
                        
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className=" text-4xl"
                        />
                        
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className=" text-4xl"
                        />
                        
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className=" text-4xl"
                        />
                        </div>
                    </div>
                </div>
            </div> 
        </footer>
    )
}
