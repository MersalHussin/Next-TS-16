import { promises as fs } from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "app", "data", "contact.json")
export const readData = async () => {
    try {
        const data = await fs.readFile(dbPath, "utf-8")
        const db = JSON.parse(data);
        if (!db.messages) {
            return db.messages = [];
        }
        return db;
    } catch (err) {
        return { messages: [] , message:err};
    }
}

export const writeData = async (content: string) => {
    await fs.writeFile(dbPath, JSON.stringify(content, null, 2))
}