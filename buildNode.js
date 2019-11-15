const PairedTag = require("./PairedTag");
const SingleTag = require("./SingleTag");

const singleTagsList = new Set(["hr", "br", "img"]);
const buildNode = (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...args);
};

module.export = { buildNode };
