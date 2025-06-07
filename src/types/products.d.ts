export interface ProductDetails {
    uid: number;
    Category: string;
    trending: boolean;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    details: {
        sizes: string[];
        colors: string[];
        material: string;
    };
}
export interface ProductsJson {
    version: string;
    lastUpdated: string;
    productsList: ProductDetails[];
}
