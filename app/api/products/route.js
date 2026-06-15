import { NextResponse } from "next/server"

export const GET = async () =>{
    const products = [
        {id:1 , name:'laptop'},
        {id:2 , name:'mouse'},
        {id:3 , name:'keybord'},
]


try{
    return NextResponse.json(products)
}catch (error){
        console.error(error);
        return NextResponse.json({message:'Internal Server Error'}, {status:500})
}
}
