interface ProductDetails {
    sizes: string[];
    colors: string[];
    material: string;
}

export interface Product {
    uid: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    details: ProductDetails;
}

export interface Category {
    name: string;
    products: Product[];
}

