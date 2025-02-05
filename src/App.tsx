import { BrowserRouter , Routes, Route } from "react-router-dom";
import CellphonesPage from "./views/cellphonesPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from "./components/Footer";
import DetailProductsPage from "./views/detailProductsPage";
import MenuItem from "./components/MenuItem";


function App() {

  const menuItems = [
    { label: "Home", href: "/home" },
    { label: "Celulares", href: "/cell-phones" },
    { label: "Motocicletas", href: "/motorcycles" },
    { label: "Tus préstamos", href: "/your-loans" },
    { label: "Tiendas", href: "/stores" },
    { label: "Tracking", href: "/tracking" },
    { label: "Club Macropay", href: "/club-macropay" },
]

  return (
    <div className="flex flex-col min-h-screen">

      <BrowserRouter>
        
        <header className="bg-blue-800 text-white pt-1 pr-24 flex justify-between items-center ">
            <div className="text-2xl font-bold pl-12">
                <img src="public\macroPayLogo.png"/>
            </div>
            
            <div className="flex items-center space-x-4">
                <button className="bg-yellow-400 text-blue-600 px-4 py-4 rounded font-bold">Crea Tu Cuenta</button>
                <button className="hover:underline text-yellow-400">Iniciar sesión</button>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-500 text-2xl" />
                </button>
            </div>
        </header>

        
        <h2 className="bg-white p-4 pl-20">
          
          <nav className="space-x-10">
            {menuItems.map((item) => (
              <MenuItem key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

        </h2>

        <main className="flex-grow bg-gray-100">

          <Routes>

            <Route path="/cell-phones" element={<CellphonesPage/>} ></Route>

            <Route path="/cell-phones/:id" element={<DetailProductsPage/>} ></Route>

          </Routes>

        </main>

        <Footer/>

      </BrowserRouter>

    </div>
  )
}

export default App




