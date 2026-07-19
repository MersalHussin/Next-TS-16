import { readData, writeData } from "@/lib/db";

export const GET = async () => {
    const data = await readData();
    try{
        return Response.json(data);
    }catch(err){
        return Response.json({error: "err"}, { status: 500 });
    }
}


export const POST = async(request: Request) => {
    console.log("REQUEST",request);
    try {
        const { name, message } = await request.json();
        console.log(name);
        console.log(message);

        // Validation
        if (!name || !message) {
            return Response.json({ error: "Name and Message are required" }, { status: 400 });
        }

        const db = await readData();
        const newMessage = {
            id: Date.now().toString(),
            name:name,
            message:message,
        };

        db.messages.push(newMessage);
        await writeData(db);

        return Response.json({ message: "Message received successfully" }, { status: 201 });
    } catch (err) {
        console.error(err);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
};