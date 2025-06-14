/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

import products from "@/data/products.json";
import { allowedOrigins } from "@/libs/configs/config.serverList";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const origin = request.headers.get("origin");
    if (origin && !allowedOrigins.includes(origin)) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const productsList: Array<string> = [];
    products.productsList.map((item) => {
        productsList.push(item.productName);
    })

    return NextResponse.json({
        productsList: productsList,
    });
}
