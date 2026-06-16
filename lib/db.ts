import { promises as fs } from "fs";
import path from "path";

const dbPath = path.join(process.cwd(),"data" , "contact.json")
export const readData = async () =>{
    const data = await fs.readFile(dbPath, "utf-8")
    return JSON.parse(data)
}

export const writeData = async (content:string) =>{
    await fs.writeFile(dbPath, JSON.stringify(content, null, 2))
}