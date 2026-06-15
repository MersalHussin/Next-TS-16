import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return NextResponse.json(data.products || data);
    } catch (error) {
        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'An error occurred' }, 
            { status: 500 }
        );
    }
};