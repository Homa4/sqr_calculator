"use server"

import fs from "fs";

interface optionsObj {
    encoding: BufferEncoding;
}

function getInfoFromFile(path: string): number[] {
    const options: optionsObj = {
        encoding: "utf8",
    };
    console.log("path from getInfoFromFile", path)

    try {
        let data = fs.readFileSync(path, options).trim();
        console.log("Raw data from file:", data);

        const numbers = data.split(/\s+/).map(Number).filter((num) => !isNaN(num));

        return numbers;
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
}

export default getInfoFromFile;


// C:\fakepath\test.txt