import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            console.error("No file uploaded");
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const uploadDir = path.join(process.cwd(), "uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
            console.log("📁 Created uploads directory");
        }

        const tempFilePath = path.join(uploadDir, file.name);
        console.log("📂 Saving file to:", tempFilePath);

        const bytes = await file.arrayBuffer();
        await writeFile(tempFilePath, Buffer.from(bytes));

        const fileContent = fs.readFileSync(tempFilePath, "utf8").trim();
        console.log("📖 File content:", fileContent);

        await unlink(tempFilePath);
        console.log("File deleted");

        return NextResponse.json({ content: fileContent });
    } catch (error) {
        console.error("File upload error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
