import { NextResponse } from "next/server"

export const GET = async () =>{
    const products = [
        {id:1 , name:'laptop'},
        {id:2 , name:'mouse'},
        {id:3 , name:'keybord'},
]
return NextResponse.json(products)
}
