export type ProductType = {
    id: number,
    name: string,
    image: string,
    detail: DetailProduct,
    price: number,
    discount: number,
    review: number
}

export type DetailProduct = {
    description: string,
    characteristics: string,
    specifications: SpecificationsProduct
}

export type SpecificationsProduct = {
    manufacturer: string,
    weight: number,
    dimensions: string,
    country: string,
    modelNumber: number,
    color: string,
    material: string,
    quantityPieces: number,
    specialFeatures: string,
    includedComponents: string
}