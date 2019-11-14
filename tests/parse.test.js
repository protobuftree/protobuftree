const { parse } = require('../lib');

describe('parse', () => {
  test('Should ok', () => {
    // Given
    const options = {};
    const source = 'message Test { string id = 1; }';
    // When
    const ast = parse(source, options);
    // Then
    expect(ast).toBeObject();
  });
});
