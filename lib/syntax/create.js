'use strict';
const createParser = require('../parser/create');

function createSyntax(config) {
  const parse = createParser(config);

  const syntax = {
    parse
  };
  return syntax;
}

function create(config) {
  return createSyntax(config);
}

module.exports = create;
