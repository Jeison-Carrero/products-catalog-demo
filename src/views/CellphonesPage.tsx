import { useRef, useState } from "react";
import { ProductType } from "../types/types";
import { useFilters } from "../hooks/useFilters";
import { db } from "../data/db";
import Filter from "../components/Filter";
import ProductSearch from "../components/ProductSearch";
import Product from "../components/Product";
import ProductModal from "../components/ProductModal";


export default function CellphonesPage() {

    const [smartphoneSelect, setSmartphoneSelect] = useState<ProductType>()

    const dialogRef = useRef<HTMLDialogElement>(null)

    const { filters, filteredProducts, updateFilter } = useFilters(db)

    const handleBrandChange = (brand: string) => {
        const updatedBrands = filters.brands.includes(brand)
        ? filters.brands.filter((b) => b !== brand)
        : [...filters.brands, brand]

        updateFilter("brands", updatedBrands)
    }

    const handlePriceChange = (minPrice: number, maxPrice: number) => {
        updateFilter("minPrice", minPrice)
        updateFilter("maxPrice", maxPrice)
    }

    const handleReviewChange = (minReview: number) => {
        updateFilter("minReview", minReview)
    }

    const openDialog = (smartphone: ProductType) => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
            setSmartphoneSelect(smartphone)
        }
    }

    return (

        <div className="pt-5 min-h-screen bg-gray-100">
            
            <main className="ml-20 mr-20 flex">
    
                <Filter
                    onBrandChange={handleBrandChange}
                    onPriceChange={handlePriceChange}
                    onReviewChange={handleReviewChange}
                />
        
                <div className="ml-10">
        
                    <ProductSearch/>
        
                    <div className="grid grid-cols-3 gap-12 overflow-y-auto h-[calc(100vh-96px)] sticky top-24 scrollbar-hidden">
                    {filteredProducts.map((smartphone) => (
        
                        <Product
                        key={smartphone.id}
                        smartphone={smartphone}
                        openDialog={() => openDialog(smartphone)}
                        />
            
                        ))}
                    </div>
        
                </div>
    
            </main>

    
            <dialog ref={dialogRef} className="rounded-lg">
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-30"
                    onClick={() => dialogRef.current && dialogRef.current.close()}
                >
                    
                    {smartphoneSelect && (
                    <ProductModal smartphone={smartphoneSelect} />
                    )}
        
                </div>
            </dialog>
            
        </div>

    )
}
