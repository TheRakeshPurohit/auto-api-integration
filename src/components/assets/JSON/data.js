export const randomJSONAPI = {
  url: "https://randomuser.me/api/", // URL of the API
  mode: "", // no-cors, *cors, same-origin
  cache: "", // *default, no-cache, reload, force-cache, only-if-cached
  functionName: "callTheAPI", // Custom name of the Generated function
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  headers: {}, // 'Content-Type': 'application/x-www-form-urlencoded',
  dataKey: "results", // key that represents your data in API reponse
  credentials: "", // include, *same-origin, omit
  redirect: "", // manual, *follow, error
  referrerPolicy: "", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: {}, // body data type must match "Content-Type" header
};
