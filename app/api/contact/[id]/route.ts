import { readData, writeData } from "@/lib/db"

export async function PUT(req:Request , {params}:{params:{id:number}}){
    try{

        const {id} = await params
        const body = await req.json()
        const {name,message} = body
        
        if(!name || !message){
            return Response.json({message:'Name and message is required'},{status:400})
        }
        const db =  await readData()
        const index = db.messages.findIndex((msg:{id:number}) => msg.id == Number(id))
        if(index == -1){
            return Response.json({message:'Message not found'}, {status:404})
        }
        
        db.messages[index] = {
            id:Number(id),
            name,
            message
        }
        console.log(id);
        await writeData(db)
        return Response.json({message:'Message updated successfully'})
    }catch(err){
        return Response.json({error:err}, {status:500})
    }

}