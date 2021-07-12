const fs = require("fs");

const a = JSON.parse(fs.readFileSync("./packages/a/package.json"));
const b = JSON.parse(fs.readFileSync("./packages/b/package.json"));


b.dependencies = {...b.dependencies, ...a.dependencies};

// console.log(obj);

fs.writeFileSync("./packages/b/package.json", JSON.stringify(b, null, 2));
