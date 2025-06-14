export interface ProductDetails {
    uid: number;
    Category: Array<string>;
    isTrending: boolean;
    productName: string;
    description: string;
    currentPrice: number;
    sellerPrice: number;
    currentRating: number;
    totalRating: number;
    totalReview: number;
    image: Array<imageDetails>;
    details: {
        sizes: string[];
        colors: string[];
        material: string[];
        features: Array<ItemFeatures>;
    };
}
export interface ProductsJson {
    version: string;
    lastUpdated: string;
    productsList: ProductDetails[];
}
export interface ItemFeatures {
    weights?: string[];
}

export interface imageDetails {
    uid: number;
    src: string;
    alt: string;
}

