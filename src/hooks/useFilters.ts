import { useEffect, useState } from "react";
import { ProductType } from "../types/types";


type Filters = {
    brands: string[]
    minPrice: number
    maxPrice: number
    minReview: number
}

export const useFilters = (initialProducts: ProductType[]) => {
        const [filters, setFilters] = useState<Filters>({
        brands: [],
        minPrice: 0,
        maxPrice: Infinity,
        minReview: 0,
    })

    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(
        initialProducts
    )

    useEffect(() => {

        const result = initialProducts.filter((product) => {

            const matchesBrand =
                filters.brands.length === 0 ||
                filters.brands.includes(product.detail.specifications.manufacturer)

            const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice

            const matchesReview = product.review >= filters.minReview
        
            return matchesBrand && matchesPrice && matchesReview
        })
    
        setFilteredProducts(result)

    }, [filters, initialProducts])

    const updateFilter = (key: keyof Filters, value: any) => {
        setFilters((prev) => ({ ...prev, [key]: value }))
    }

    return {
        filters,
        filteredProducts,
        updateFilter,
    }
}
