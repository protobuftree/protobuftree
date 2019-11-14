function createParser(config) {
  return function parser(source, options) {
    const ast = { ast: 'todo', options };
    return ast;
  };
}

module.exports = createParser;
