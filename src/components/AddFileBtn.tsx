"use client";

import { useState } from "react";
import getInfoFromFile from "@/logic/nonInteractive";
import interactive_mode from "@/logic/interactive";

interface resultObj {
  x1: number;
  x2: number;
}

const AddFileBtn: React.FunctionComponent = (props) => {
  const [result, setResult] = useState<number[]>([]);

  const handleAddFileBtn = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      console.error("No file selected");
      return;
    }

    const file = files[0];
    console.log("file:", file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();
      console.log(res);

      const cleanedString = res.content.replace(/\n/g, " ").replace(/,/g, " ");
      console.log("Cleaned string:", cleanedString);

      const numberArray = cleanedString
        .split(" ")
        .map(Number)
        .filter((num: number) => !isNaN(num));
      console.log(numberArray);

      setResult(numberArray);
      const obj: resultObj = interactive_mode(
        numberArray[0],
        numberArray[1],
        numberArray[2]
      );

      console.log(obj);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  return (
    <button className="file_btn" onClick={() => {}}>
      <div className="inner_sqr">
        <input
          type="file"
          className="inner_sqr_input"
          onChange={(e) => {
            handleAddFileBtn((e.target as HTMLInputElement).files);
          }}
        />
      </div>
    </button>
  );
};

export default AddFileBtn;
