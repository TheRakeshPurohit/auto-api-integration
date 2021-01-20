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
    return new Function(template(randomJSONAPI));
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
  fs.mkdir("/components", function () {
    fs.writeFile("/components/Input.js", escape(comonentInput), function () {});
  });
};
