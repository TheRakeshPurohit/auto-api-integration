import { randomJSONAPI } from "./assets/JSON/data";
import fs from "browserify-fs";
export const APIFunctionGenerator = () => {
  let apiFnTemplate = (randomJSONAPI) => `
return async function ${randomJSONAPI.functionName}(randomJSONAPI) {
  const response = await fetch(randomJSONAPI.url, {
    method: randomJSONAPI.method,
    headers: randomJSONAPI.headers,
  })
    .then(async (res) => {
      let data = await res.json();
      console.log("res data", data.${randomJSONAPI.dataKey});
    })
    .catch((err) => {
      console.log("err", err);
    });
}`;

  function createFunction(template, randomJSONAPI) {
    return new Function(template(randomJSONAPI))();
  }

  let functionGenerated = createFunction(
    apiFnTemplate,
    randomJSONAPI
  )(randomJSONAPI);

  fs.mkdir("/API", function () {
    fs.writeFile(
      "/API/randomAPI.txt",
      escape(functionGenerated),
      function () {}
    );
  });
};
