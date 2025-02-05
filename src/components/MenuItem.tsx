import { Link, useLocation } from "react-router-dom";


type MenuItemProps = {
    href: string
    label: string
}

export default function MenuItem({ href, label }:MenuItemProps) {

    const location = useLocation()

    const isActive = location.pathname === href

    return (
        <Link
        to={href}
        className={`relative hover:underline ${
            isActive ? "font-bold text-blue-600" : "text-gray-800"
        }`}
        > 
            {label}
            {isActive && (
                <span className="absolute left-0 right-0 -bottom-1 mx-auto w-6 h-1 bg-yellow-400"></span>
            )}
        </Link>
    )
}
