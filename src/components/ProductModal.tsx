import { formatCurrency, getDiscountPayments, getWeeklyPayments } from "../helpers"
import type { ProductType } from "../types/types"


type ProductModalProps = {
    smartphone: ProductType
}

export default function ProductModal({ smartphone }: ProductModalProps) {

    const { name, image, detail, price, discount} = smartphone

    const discountPayments = getDiscountPayments(price, discount)

    const weeklyPayments = getWeeklyPayments(discountPayments)

    return (
        <div className="bg-white rounded-lg shadow-lg w-1/3 h-7/8" onClick={(e) => e.stopPropagation()}>

            <img src="public\señor.png" alt="Samsung A10S" className="rounded-t-lg w-full" />

            <div className="m-2">
                <div className="flex px-8">

                    <div className="w-1/4">
                        <img src={`/img/${image}`} alt="Samsung A10S" className="rounded-t-lg w-full h-full" />
                    </div>

                    <div className="w-3/4 justify-center items-center">

                        <p className="font-bold text-blue-600 text-right">{formatCurrency(discountPayments)} x 1</p>

                        <p className="text-xl font-bold mb-2"> {name} </p>

                        <p className="text-xl font-bold mb-2"> {detail.characteristics} </p>

                        <p className="text-gray-600 text-sm mb-2">Color seleccionado: {detail.specifications.color}</p>

                    </div>

                </div>
                
                <hr className="my-2" />
                <div className="flex justify-between items-center mb-2 px-8">
                    <p className="text-gray-600 w-3/5">1 ítem en tu carrito</p>
                    <p className="text-gray-600 text-center w-1/5">Subtotal</p>
                    <p className="font-bold text-right text-blue-600 w-1/5">{formatCurrency(discountPayments)}</p>
                </div>
                <hr className="my-2" />
                
                <div className="text-center mb-4">
                    <div className="flex justify-center items-center mb-4">
                        
                        <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-yellow-400">
                            <svg
                            className="h-8 w-8 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </div>
                        
                    </div>
                    <p className="text-lg font-bold">Te vas a llevar este celular por solo</p>
                    <p className="text-2xl font-extrabold ">{formatCurrency(weeklyPayments)} p/semana!</p>

                    <button className="bg-yellow-400 text-blue-600 text-lg  py-2 px-4 w-1/2 rounded my-4">
                    COMPRAR A CRÉDITO
                    </button>

                    <p className="text-center text-sm text-gray-600">o puedes</p>

                    <a href="#" className="block text-center text-blue-600 font-bold mt-2">
                        Comprar a contado
                    </a>

                </div>

                
            </div>
        </div>
    )
}
