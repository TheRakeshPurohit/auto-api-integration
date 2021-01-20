import React, { useEffect } from "react";
import { APIFunctionGenerator } from "./APIFunctionGenerator";
import fs from "browserify-fs";
function Display() {
  //calls APIFunctionGenerator
  useEffect(() => {
    APIFunctionGenerator();
  }, []);

  //variable holds function which is read from file
  let functionVariable = "";

  //reading file from browser's indexedDB
  fs.readFile("/API/randomAPI.txt", "utf-8", async function (err, data) {
    if (!err) {
      //reformats the file's result
      let code = await unescape(data);

      //combines useEffect and function returned from file
      functionVariable = "\nuseEffect(() => {\n" + code + "}, []); \n\n return";
      console.log("code => ", code);
    }
  });

  //reads component
  fs.readFile("/components/Input.js", "utf-8", async function (err, data) {
    let code = await unescape(data);
    if (!code.includes(functionVariable)) {
      //writes the combination of functionVariable and component
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

    //prints the API Integrated component
    fs.readFile("/components/Input.js", "utf-8", async function (err, data) {
      if (!err) {
        console.log("Your File Content is :>> ", unescape(data));
      }
    });
  });

  return <div></div>;
}

export default Display;
