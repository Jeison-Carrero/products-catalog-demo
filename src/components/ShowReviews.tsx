import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';


type ShowReviewsProps = {
    review: number
}

export default function ShowReviews({review}: ShowReviewsProps) {

    const MAX_REVIEW = 5

    if(review <= 0 || review > MAX_REVIEW) return

    return (
        <div className="flex items-center space-x-1 mb-2">
            {Array.from({ length: MAX_REVIEW }, (_, index) => (
                <FontAwesomeIcon
                key={index}
                icon={index < review ? fullStar : emptyStar}
                className="text-yellow-400 text-2xl"
                />
            ))}
        </div>
    )
}
