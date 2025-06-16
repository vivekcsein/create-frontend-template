export interface ProductDetails {
    uid: number;
    Category: Array<productCategories>;
    isTrending: boolean;
    productName: string;
    description: string;
    currentPrice: number;
    sellerPrice: number;
    currentRating: number;
    totalRating: number;
    totalReview: number;
    availableQuantity?: number;
    image: Array<imageDetails>;
    details: specificationDetails;
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

export interface specificationDetails {
    sizes?: string[];
    colors?: string[];
    material?: string[];
    pages?: number;
    features?: Array<ItemFeatures>;
}

export type apparel = "apparel";
export type footwear = "footwear";
export type accessories = "accessories";
export type homeKitchen = "home & kitchen";
export type electronics = "electronics";
export type beautyPersonalCare = "beauty & personal care";
export type books = "books";
export type sportsOutdoors = "sports & outdoors";

export type men = "men";
export type women = "women";
export type kids = "kids";

export type productCategories =
    men
    | women
    | kids
    | apparel
    | electronics
    | footwear
    | accessories
    | beautyPersonalCare
    | books
    | sportsOutdoors


