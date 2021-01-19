import React from "react";
import { APIFunctionGenerator } from "./APIFunctionGenerator";
import fs from "browserify-fs";
function Display() {
  fs.readFile("/API/randomAPI.txt", "utf-8", async function (err, data) {
    let code = await unescape(data);
  });
  console.log(APIFunctionGenerator());

  return <div></div>;
}

export default Display;
