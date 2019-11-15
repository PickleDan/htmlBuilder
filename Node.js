Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  const attrs = Object.entries(this.attributes).map(
    ([key, value]) => `${key}="${value}"`
  );
  return attrs.length > 0 ? ` ${attrs.join(" ")}` : "";
};

function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

module.exports = { Node };
