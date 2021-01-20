import { randomJSONAPI } from "./assets/JSON/data";
import fs from "browserify-fs";
export const APIFunctionGenerator = () => {
  //template for function starts
  let apiFnTemplate = () => `
return async function ${randomJSONAPI.functionName}() {
  const response = await fetch("${randomJSONAPI.url}", {
    method: "${randomJSONAPI.method}",
    headers: ${JSON.stringify(randomJSONAPI.headers)},
    mode: "${randomJSONAPI.mode}",
    cache: "${randomJSONAPI.cache}",
    credentials: "${randomJSONAPI.credentials}",
    redirect: "${randomJSONAPI.redirect}",
    referrerPolicy: "${randomJSONAPI.referrerPolicy}",
    body: ${JSON.stringify(randomJSONAPI.body)},
  })
    .then(async (res) => {
      let data = await res.json();
      console.log("res data", data.${randomJSONAPI.dataKey});
    })
    .catch((err) => {
      console.log("err", err);
    });
}`;

  //template for function ends

  //function that uses new keyword to return function based on JSON and template passed as parameter
  function createFunction(template, randomJSONAPI) {
    return new Function(template(randomJSONAPI));
  }

  // variable holds the generated function
  let functionGenerated = createFunction(apiFnTemplate, randomJSONAPI)();

  //creates directory in Indexed DB of the browser
  fs.mkdir("/API", function () {
    fs.writeFile(
      "/API/randomAPI.txt",
      escape(functionGenerated),
      function () {}
    );
  });

  //components' definition
  let comonentInput = `
  const Input = ({
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <div>
      <label
        style={{
          lineHeight: 2,
          textAlign: 'left',
          display: 'block',
          marginTop: 20,
          color: 'black',
          fontSize: 18,
          fontWeight: 200
        }}
        htmlFor={label}>{label}</label>
      <input
        name={label}
        placeholder={placeholder}
        type={type}
        style={{
          display: 'block',
          boxSizing: 'border-box',
          width: '100%',
          borderRadius: 4,
          border: '2px solid black',
          padding: 15,
          marginBottom: 10,
          fontSize: 14
        }}
      />
    </div>
  );
};
  `;

  //writes component in Indexed DB of the browser
  fs.mkdir("/components", function () {
    fs.writeFile("/components/Input.js", escape(comonentInput), function () {});
  });
};
