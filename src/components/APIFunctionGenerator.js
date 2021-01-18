import { randomJSONAPI } from "./assets/JSON/data";
import fs from "browserify-fs";
export const APIFunctionGenerator = () => {
  let apiFnTemplate = (name) => `
return async function ${name}(randomJSONAPI) {
  const response = await fetch(randomJSONAPI.url, {
    method: randomJSONAPI.method,
    headers: randomJSONAPI.headers
  });
  return response.json() + randomJSONAPI.dataKey;
}`;

  function createFunction(template, name) {
    return new Function(template(name))();
  }

  let functionGenerated = createFunction(
    apiFnTemplate,
    randomJSONAPI.functionName
  )(randomJSONAPI);

  fs.mkdir("/API", function () {
    fs.writeFile(
      "/API/randomAPI.txt",
      escape(functionGenerated),
      function (err, data) {
        console.log("Write : err, data", err, data);
      }
    );
  });
};
