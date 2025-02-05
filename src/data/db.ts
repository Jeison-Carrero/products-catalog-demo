import { ProductType } from "../types/types";

export const db: ProductType[] = [
    {
        id: 1,
        name: "Samsung Galaxy A55",
        image: "A55.png",
        detail: {
            description: "Smartphone Samsung Galaxy A55 con pantalla AMOLED y cámara de alta resolución.",
            characteristics: "64+12+5 MP, 128 GB, 8GB RAM",
            specifications: {
                manufacturer: "Samsung",
                weight: 0.19,
                dimensions: "16.4 x 7.6 x 0.8 cm",
                country: "Corea del Sur",
                modelNumber: 555123,
                color: "Negro",
                material: "Vidrio y aluminio",
                quantityPieces: 1,
                specialFeatures: "Pantalla de 6.5 pulgadas, procesador octa-core, batería de larga duración, soporte 5G, cámara de 64 MP, carga rápida de 25 W, certificación IP67 resistente al agua y al polvo",
                includedComponents: "Teléfono, cable USB-C, adaptador de corriente, guía de usuario"
            }
        },
        price: 1800000,
        discount: 0,
        review: 3
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        image: "S23.jpg",
        detail: {
            description: "Smartphone Samsung Galaxy S23 con pantalla Dynamic AMOLED 2X y procesador Snapdragon 8 Gen 2.",
            characteristics: "50+12+10 MP, 256 GB, 8GB RAM",
            specifications: {
                manufacturer: "Samsung",
                weight: 0.17,
                dimensions: "14.6 x 7.0 x 0.8 cm",
                country: "Corea del Sur",
                modelNumber: 230123,
                color: "Rosa",
                material: "Vidrio y aluminio",
                quantityPieces: 1,
                specialFeatures: "Pantalla de 6.1 pulgadas, procesador Snapdragon 8 Gen 2, batería de 3900 mAh, carga rápida de 25 W, soporte 5G, certificación IP68 resistente al agua y al polvo",
                includedComponents: "Teléfono, cable USB-C, guía de usuario"
            }
        },
        price: 4000000,
        discount: 5,
        review: 4
    },
    {
        id: 3,
        name: "Samsung Galaxy A34",
        image: "A34.jpg",
        detail: {
            description: "Smartphone Samsung Galaxy A34 con pantalla Super AMOLED de 120 Hz y batería de larga duración.",
            characteristics: "48+8+5 MP, 128 GB, 6GB RAM",
            specifications: {
                manufacturer: "Samsung",
                weight: 0.20,
                dimensions: "16.1 x 7.8 x 0.8 cm",
                country: "Corea del Sur",
                modelNumber: 341234,
                color: "Verde",
                material: "Vidrio y plástico",
                quantityPieces: 1,
                specialFeatures: "Pantalla de 6.6 pulgadas, procesador MediaTek Dimensity 1080, batería de 5000 mAh, carga rápida de 25 W, soporte 5G, certificación IP67 resistente al agua y al polvo",
                includedComponents: "Teléfono, cable USB-C, adaptador de corriente, guía de usuario"
            }
        },
        price: 3200000,
        discount: 0,
        review: 3
    },
    {
        id: 4,
        name: "Samsung Galaxy Z Flip 5",
        image: "ZFlip5.jpg",
        detail: {
            description: "Smartphone plegable Samsung Galaxy Z Flip 5 con pantalla flexible y diseño compacto.",
            characteristics: "12+12 MP, 256 GB, 8GB RAM",
            specifications: {
                manufacturer: "Samsung",
                weight: 0.18,
                dimensions: "16.5 x 7.2 x 0.7 cm",
                country: "Corea del Sur",
                modelNumber: 550123,
                color: "Blanco",
                material: "Vidrio y aluminio",
                quantityPieces: 1,
                specialFeatures: "Pantalla plegable de 6.7 pulgadas, procesador Snapdragon 8 Gen 2, batería de 3700 mAh, carga rápida de 25 W, soporte 5G, pantalla secundaria de 3.4 pulgadas",
                includedComponents: "Teléfono, cable USB-C, guía de usuario"
            }
        },
        price: 6000000,
        discount: 10,
        review: 5
    },
    {
        id: 5,
        name: "iPhone 15 Pro",
        image: "iPhone15Pro.jpg",
        detail: {
            description: "Smartphone Apple iPhone 15 Pro con pantalla Super Retina XDR y chip A17 Pro.",
            characteristics: "48+12+12 MP, 256 GB, 8GB RAM",
            specifications: {
                manufacturer: "Apple",
                weight: 0.18,
                dimensions: "14.7 x 7.1 x 0.8 cm",
                country: "Estados Unidos",
                modelNumber: 150123,
                color: "Titanio Oscuro",
                material: "Titanio y vidrio",
                quantityPieces: 1,
                specialFeatures: "Pantalla de 6.1 pulgadas, chip A17 Pro, batería de larga duración, carga rápida de 20 W, soporte 5G, certificación IP68 resistente al agua y polvo, Dynamic Island",
                includedComponents: "Teléfono, cable USB-C, guía de usuario"
            }
        },
        price: 5000000,
        discount: 5,
        review: 5
    },
    {
        id: 6,
        name: "iPhone 14",
        image: "iPhone14.jpg",
        detail: {
            description: "Smartphone Apple iPhone 14 con pantalla OLED y cámara avanzada.",
            characteristics: "12+12 MP, 128 GB, 6GB RAM",
            specifications: {
                manufacturer: "Apple",
                weight: 0.17,
                dimensions: "14.7 x 7.2 x 0.8 cm",
                country: "Estados Unidos",
                modelNumber: 140123,
                color: "Rosa",
                material: "Vidrio y aluminio",
                quantityPieces: 1,
                specialFeatures: "Pantalla de 6.1 pulgadas, chip A15 Bionic, batería de larga duración, carga rápida de 20 W, soporte 5G, certificación IP68 resistente al agua y polvo, modo Acción y modo Cine",
                includedComponents: "Teléfono, cable USB-C a Lightning, guía de usuario"
            }
        },
        price: 3300000,
        discount: 0,
        review: 4
    },
    {
        id: 7,
        name: "Huawei P60 Pro",
        image: "P60Pro.jpg",
        detail: {
            description: "Smartphone Huawei P60 Pro con pantalla OLED y cámara de ultra alta resolución.",
            characteristics: "48+48+13 MP, 256 GB, 8GB RAM",
            specifications: {
                manufacturer: "Huawei",
                weight: 0.20,
                dimensions: "16.1 x 7.4 x 0.8 cm",
                country: "China",
                modelNumber: 600123,
                color: "Gris",
                material: "Vidrio y aluminio",
                quantityPieces: 1,
                specialFeatures: "Pantalla de 6.67 pulgadas, procesador Snapdragon 8+ Gen 1, batería de 4815 mAh, carga rápida de 88 W, soporte 5G, certificación IP68 resistente al agua y al polvo",
                includedComponents: "Teléfono, cable USB-C, adaptador de corriente, guía de usuario"
            }
        },
        price: 3700000,
        discount: 5,
        review: 5
    },
    {
        id: 8,
        name: "Huawei Mate 50",
        image: "Mate50.jpg",
        detail: {
            description: "Smartphone Huawei Mate 50 con cámara XMAGE y diseño premium.",
            characteristics: "50+13+12 MP, 256 GB, 8GB RAM",
            specifications: {
                manufacturer: "Huawei",
                weight: 0.21,
                dimensions: "16.1 x 7.6 x 0.8 cm",
                country: "China",
                modelNumber: 500123,
                color: "Naranja",
                material: "Vidrio y aluminio",
                quantityPieces: 1,
                specialFeatures: "Pantalla de 6.7 pulgadas OLED, procesador Snapdragon 8+ Gen 1, batería de 4460 mAh, carga rápida de 66 W, certificación IP68 resistente al agua y al polvo",
                includedComponents: "Teléfono, cable USB-C, guía de usuario"
            }
        },
        price: 4000000,
        discount: 3,
        review: 4
    },
    {
        id: 9,
        name: "Huawei Nova 11",
        image: "Nova11.png",
        detail: {
            description: "Smartphone Huawei Nova 11 con diseño delgado y tecnología de carga rápida.",
            characteristics: "50+8 MP, 128 GB, 6GB RAM",
            specifications: {
                manufacturer: "Huawei",
                weight: 0.18,
                dimensions: "16.1 x 7.2 x 0.7 cm",
                country: "China",
                modelNumber: 110123,
                color: "Verde Claro",
                material: "Vidrio y plástico",
                quantityPieces: 1,
                specialFeatures: "Pantalla OLED de 6.7 pulgadas, procesador Snapdragon 778G, batería de 4500 mAh, carga rápida de 66 W, certificación IP54 resistente a salpicaduras",
                includedComponents: "Teléfono, cable USB-C, guía de usuario"
            }
        },
        price: 1000000,
        discount: 0,
        review: 4
    },
    {
        id: 10,
        name: "Xiaomi 13 Pro",
        image: "Xiaomi13Pro.png",
        detail: {
            description: "Smartphone Xiaomi 13 Pro con pantalla AMOLED de 120 Hz y cámara Leica.",
            characteristics: "50+50+50 MP, 256 GB, 12GB RAM",
            specifications: {
                manufacturer: "Xiaomi",
                weight: 0.23,
                dimensions: "16.3 x 7.5 x 0.8 cm",
                country: "China",
                modelNumber: 130123,
                color: "verde Claro",
                material: "Vidrio y cerámica",
                quantityPieces: 1,
                specialFeatures: "Pantalla AMOLED de 6.73 pulgadas, procesador Snapdragon 8 Gen 2, batería de 4820 mAh, carga rápida de 120 W, carga inalámbrica de 50 W, certificación IP68 resistente al agua y polvo, cámara con lentes Leica",
                includedComponents: "Teléfono, cable USB-C, adaptador de corriente de 120 W, guía de usuario"
            }
        },
        price: 1800000,
        discount: 7,
        review: 5
    }
    
]