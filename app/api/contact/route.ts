import { readData, writeData } from "@/lib/db";

export const POST = async (request: Request) => {
    try {
        const { name, message } = await request.json();

        // Validation
        if (!name || !message) {
            return Response.json({ error: "Name and Message are required" }, { status: 400 });
        }

        const db = await readData();
        const newMessage = {
            id: Date.now().toString(),
            name,
            message,
        };

        db.push(newMessage);
        await writeData(db);

        return Response.json({ message: "Message received successfully" }, { status: 201 });
    } catch (err) {
        console.error(err);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
};