import React, { useEffect } from "react";
import { APIFunctionGenerator } from "./APIFunctionGenerator";
import fs from "browserify-fs";
function Display() {
  useEffect(() => {
    APIFunctionGenerator();
  }, []);

  let functionVariable = "";
  fs.readFile("/API/randomAPI.txt", "utf-8", async function (err, data) {
    if (!err) {
      let code = await unescape(data);
      functionVariable = "\nuseEffect(() => {\n" + code + "}, []); \n\n return";
      console.log("code => ", code);
    }
  });

  fs.readFile("/components/Input.js", "utf-8", async function (err, data) {
    let code = await unescape(data);
    //console.log("code split => ", code.split("return").join(functionVariable));
    if (!code.includes(functionVariable)) {
      fs.writeFile(
        "/components/Input.js",
        escape(code.split("return").join(functionVariable)),
        function (err, data) {
          console.log("err, data :>> ", err, data);
        }
      );
    } else {
      console.log("File is already written");
    }
    fs.readFile("/components/Input.js", "utf-8", async function (err, data) {
      if (!err) {
        console.log("Your File Content is :>> ", unescape(data));
      }
    });
  });

  return <div></div>;
}

export default Display;
