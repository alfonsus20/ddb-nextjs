const path = require("path");

module.exports = {
  process(_1, sourcePath, _2) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
