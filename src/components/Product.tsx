import { useNavigate } from "react-router-dom";
import { formatCurrency, getDiscountPayments, getMonthlyPayments, getWeeklyPayments } from "../helpers"
import type { ProductType } from "../types/types"
import ShowImageProduct from "./ShowImageProduct";
import ShowReviews from "./ShowReviews";


type ProductProps = {
    smartphone: ProductType
    openDialog: () => void
}

export default function Product({ smartphone, openDialog }: ProductProps) {

    const { id, name, image, price, discount, review} = smartphone

    const navigate = useNavigate()

    const discountPayments = getDiscountPayments(price, discount)

    const monthlyPayments = getMonthlyPayments(discountPayments)

    const weeklyPayments = getWeeklyPayments(discountPayments)

    return (
        <div className="group bg-white p-4 rounded-2xl shadow flex flex-col items-center">
            
            <ShowImageProduct
            id={id}
            image={image}
            discount={discount}
            largeSize={false}
            />
    
            <div className="flex w-full mt-8 justify-between">
                <div className="justify-items-start mt-4 w-1/2">
                    <h3 className="text-lg font-bold cursor-pointer" onClick={() => navigate(`/cell-phones/${id}`)}>{name}</h3>
        
                    <ShowReviews
                    review={review}
                    />
        
                    <p className="text-gray-500">{formatCurrency(weeklyPayments)} p/semana</p>
                    <p className="text-gray-500">o {formatCurrency(monthlyPayments)} p/mes</p>

                </div>
        
                <div className="mt-4 w-1/2">
                    <p className="text-blue-600 text-3xl font-bold text-right">{formatCurrency(discountPayments)}</p>

                    {discount > 0 ? (
                        <p className="text-gray-500 text-lg text-right line-through"> {formatCurrency(price)}</p>
                    ) : (
                        <div className="m-7"></div>
                    )}
        
                    <button
                    className="mt-4 ml-16 w-2/3 bg-yellow-400 text-blue-600 py-2 rounded font-bold group-hover:mt-1 hover:bg-blue-600 hover:text-yellow-400"
                    onClick={() => openDialog()}
                    >
                    Lo Quiero!
                    </button>
                </div>
            </div>
        </div>
    )
}
