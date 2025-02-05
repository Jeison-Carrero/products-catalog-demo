import { useState } from "react";
import ShowImageProduct from "../components/ShowImageProduct";
import ShowReviews from "../components/ShowReviews";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../data/db";
import { ProductType } from "../types/types";
import { formatCurrency, getDiscountPayments } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard, faCcAmex } from "@fortawesome/free-brands-svg-icons";


export default function DetailProductsPage() {

    const [activeTab, setActiveTab] = useState("specifications")

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const product: ProductType = db.find((item) => item.id === Number(id))!

    const { name, image, detail, price, discount, review} = product

    const { manufacturer, weight, dimensions, country, modelNumber, color, material, quantityPieces, specialFeatures, includedComponents } = detail.specifications


    const specifications = [
        { label: "Fabricante", value: manufacturer },
        { label: "Peso del producto", value: `${weight} gr` },
        { label: "Dimensiones", value: dimensions },
        { label: "País de Origen", value: country },
        { label: "Número de modelo", value: modelNumber },
        { label: "Color", value: color },
        { label: "Material", value: material },
        { label: "Cantidad de piezas", value: quantityPieces },
        { label: "Características especiales", value: specialFeatures },
        { label: "Componentes incluidos", value: includedComponents}
    ]

    const discountPayments = getDiscountPayments(price, discount)

    return (
        <div className="bg-gray-100 min-h-screen ml-20 mr-20">
            
            <div className="p-4 flex">
                <button className="text-gray-600 text-sm font-medium border-2 rounded px-6 py-1" onClick={() => navigate(`/cell-phones`)}>
                    Volver a resultados
                </button>
                <div className="text-sm text-gray-600 mt-2 ml-4">
                    <span>Celulares / {manufacturer} / </span>
                    <span className="text-blue-600 font-bold">{name}</span>
                </div>
            </div>
    
            
            <div className="flex flex-wrap lg:flex-nowrap p-4 space-x-6">
            
                <div className="flex flex-col space-y-4">
                    {[1, 2, 3, 4, 5].map((_, index) => (

                        <div
                            key={index}
                            className={`border-2 rounded-lg overflow-hidden ${
                            index === 0 ? "border-blue-600" : "border-gray-300"
                            }`}
                        >
                            <img
                            src={`/img/${image}`}
                            
                            alt="product"
                            className="rounded w-[100px] h-[100px] object-cover"
                            />
                        </div>
                    ))}
                </div>
    
            
                <div className="w-full lg:w-2/5 relative bg-white rounded-2xl">
                    <ShowImageProduct
                    id={product.id}
                    image={image}
                    discount={discount}
                    largeSize={true}
                    />
                </div>
    
            
                <div className="w-full lg:w-2/5 space-y-6">

                    <div className="flex">

                        <h1 className="text-2xl font-bold leading-tight">
                        {name} {detail.characteristics}
                        </h1>

                        <div className="w-1/2">
                            <div className=" items-center space-x-2">
                                <p className="text-blue-600 text-3xl font-bold text-right">{formatCurrency(discountPayments)}</p>
                                
                                {discount > 0 ? (
                                    <p className="text-gray-500 text-lg text-right line-through"> {formatCurrency(price)}</p>
                                ) : (
                                    <div className="m-7"></div>
                                )}



                            </div>

                            <div className="flex space-x-4 items-end justify-end mt-4">
                                
                                <FontAwesomeIcon
                                icon={faCcVisa}
                                className="text-gray-500 text-3xl"
                                />
                                
                                <FontAwesomeIcon
                                icon={faCcMastercard}
                                className="text-gray-500 text-3xl"
                                />
                                
                                <FontAwesomeIcon
                                icon={faCcAmex}
                                className="text-gray-500 text-3xl"
                                />
    
                            </div>
                        </div>

                    </div>
                    

                    <ShowReviews
                    review={review}
                    />
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                    {detail.description}
                    </p>
                
                    <div className="grid justify-end">
                        <div className="bg-gray-200 border border-gray-300 p-4 rounded-lg text-sm">
                            <p className="font-bold">Compra segura con Macropay Protect</p>
                            <p className="text-end">Devolución gratis (30 días) / 12 meses de garantía de fábrica.</p>
                            
                        </div>

                        <p className="text-red-600 text-xs font-medium">
                        La promoción vence en 24d 12h:43m
                        </p>
                    </div>
                
                    <div className="flex justify-center space-x-8 mt-12">
                    {["Aplica a tu crédito", "Verifica tu compra", "Disfruta tu celular"].map(
                        (step, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-lg"
                        >
                            <div className="w-12 h-12 bg-gray-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                            {index + 1}
                            </div>
                            <p className="font-medium text-sm">{step}</p>
                        </div>
                        )
                    )}
                    </div>

                    <div className="flex justify-end mt-8">
                        <button className="bg-yellow-400 text-blue-600 font-bold px-10 py-4 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-yellow-500 transition">
                            <span>LO QUIERO A CRÉDITO</span>
                            <span className="text-xl">➡</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="bg-gray-100 p-6 w-full">
                <h2 className="text-xl font-bold mb-4">
                    Información Detallada del Producto
                </h2>
                <div className="flex flex-wrap lg:flex-nowrap space-x-6">
                    
                    <div className="w-full lg:w-1/3 flex justify-between ">
                        <img
                            src={`/img/${image}`}
                            alt="Front Image"
                            className="rounded-lg shadow-md w-[300px] h-[400px]"
                        />
                        <img
                            src={`/img/${image}`}
                            alt="Back Image"
                            className="rounded-lg shadow-md w-[300px] h-[400px]"
                        />
                    </div>

                    
                    <div className="w-full lg:w-2/3 pl-20">
                    
                        <div className="flex border-b mb-4">
                            <button
                            className={`py-2 px-4 text-sm font-bold ${
                                activeTab === "specifications"
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab("specifications")}
                            >
                            Otras Especificaciones
                            </button>
                            <button
                            className={`py-2 px-4 text-sm font-bold ${
                                activeTab === "reviews"
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab("reviews")}
                            >
                            Reviews
                            </button>
                        </div>
                        <div>
                            {activeTab === "specifications" && (
                            <div>
                                <table className="w-full text-sm text-left ">
                                <tbody>
                                    {specifications.map((item, index) => (
                                    <tr key={index} >
                                        <td className="py-2 text-gray-600">
                                        {item.label}
                                        </td>
                                        <td className="py-2 font-bold text-gray-800">{item.value}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            )}
                            {activeTab === "reviews" && (
                            <div className="text-gray-600 text-sm">
                                <p>Actualmente no hay reviews disponibles para este producto.</p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    
}
