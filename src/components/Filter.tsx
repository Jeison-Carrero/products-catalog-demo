import { verifyInput } from "../helpers";
import ShowReviews from "./ShowReviews";


type FilterProps = {
    onBrandChange: (brand: string) => void
    onPriceChange: (min: number, max: number) => void
    onReviewChange: (minReview: number) => void
}

export default function Filter({onBrandChange, onPriceChange, onReviewChange}: FilterProps) {

    return (

        <div>

            <div className="flex mb-4 shadow">

                <div className="relative flex items-center border-2 rounded px-4 py-2 w-1/2">
                    <span className="text-gray-600">Ordenar por</span>
                </div>

                <div className="relative flex items-center border-2 rounded px-4 py-2 w-1/2">

                    <select className="focus:outline-none bg-transparent">
                        <option>Mejores reviews</option>
                        <option>Precio más bajo</option>
                        <option>Precio más alto</option>
                    </select>
                </div>

            </div>

            
            <div className="bg-white">
                
                <div className="p-4 border-b-2">

                    <h2 className="text-lg text-blue-800 font-bold">Marcas</h2>
                    <div className="space-y-2">

                        {["Apple", "Samsung", "Huawei", "Xiaomi", "OPPO"].map((brand) => (
                            <label key={brand} className="block">
                                <input
                                className="mr-2"
                                type="checkbox"
                                onChange={() => onBrandChange(brand)}
                                />
                                {brand}
                            </label>
                        ))}

                    </div>
                
                </div>

                <div className="p-4 border-b-2 ">

                    <h2 className="text-lg text-blue-800 font-bold">Precio</h2>

                    <div className="flex items-center space-x-2">

                        {/* TODO: (Pendiente) Mostrar la entrada en formato de precio */}
                        <input
                            type="number"
                            className="w-1/2 p-2 border rounded"
                            placeholder="100"
                            onKeyPress={verifyInput}
                            onChange={(e) => onPriceChange(Number(e.target.value), Infinity)}
                        />

                        <input
                            type="number"
                            placeholder="5000"
                            className="w-1/2 p-2 border rounded"
                            onKeyPress={verifyInput}
                            onChange={(e) => onPriceChange(0, Number(e.target.value))}
                        />

                    </div>

                </div>

                {/* TODO: (Pendiente) Filtro por Reviews - onReviewChange */}
                <div className=" p-4 border-b-2 ">
                    <h2 className="text-lg text-blue-800 font-bold">Reviews</h2>
                    <ShowReviews
                    review={4}
                    />
                </div>

                <div className=" p-4 border-b-2 ">
                    <h2 className="text-lg text-blue-800 font-bold">Memoria</h2>
                </div>

                <div className=" p-4 border-b-2 ">
                    <h2 className="text-lg text-blue-800 font-bold">Rango</h2>
                </div>

                <div className="p-4 ">
                    <h2 className="text-lg text-blue-800 font-bold">Camara</h2>
                </div>

            </div>

        </div>      
    )
}
