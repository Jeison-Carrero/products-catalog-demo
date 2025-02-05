import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from "react-router-dom";


type ShowImageProductProps = {
    id: number
    image: string
    discount: number
    largeSize: boolean
}

export default function ShowImageProduct({ id, image, discount, largeSize }: ShowImageProductProps) {

    const [isFavorite, setIsFavorite] = useState(false)

    const navigate = useNavigate()

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="relative w-full">

                <button
                    onClick={toggleFavorite}
                    className="absolute top-1 right-2 text-4xl"
                >
                    <FontAwesomeIcon
                        icon={isFavorite ? solidHeart : regularHeart}
                        className={isFavorite ? "text-emerald-400" : "text-gray-400"}
                    />
                </button>

            <img
                src={`/img/${image}`}
                onClick={() => navigate(`/cell-phones/${id}`)}
                alt="Product"
                className={`object-cover rounded  ${largeSize ? "w-[600px] h-[600px]" : "w-[300px] h-[300px]"}`}
                
            />
    
            {discount > 0 && (
                <div
                className="absolute bottom-2 left-2 bg-pink-500 text-white text-4xl font-bold rounded-full flex items-center justify-center w-20 h-20 group-hover:opacity-0 transition-opacity duration-300"
                >
                {discount}%
                </div>
            )}
        </div>
    )
}
