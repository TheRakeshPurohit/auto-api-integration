export const randomJSONAPI = {
  url: "https://randomuser.me/api/",
  mode: "", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  functionName: "callTheAPI",
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  headers: {}, // 'Content-Type': 'application/x-www-form-urlencoded',
  dataKey: "results",
  credentials: "", // include, *same-origin, omit
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: {},
};
