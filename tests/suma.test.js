const { test, strictEqual } = require("node:test");
const { suma } = require("../src/app");

test("La función suma debe sumar correctamente", () => {
  strictEqual(suma(2, 3), 5);
});
