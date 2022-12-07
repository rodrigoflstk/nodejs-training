const assert = require("assert");
const { obterPessoas } = require("./service");
const nock = require("nock");

describe("Star wars Tests", () => {
  this.beforeAll(() => {
    const response = {};
  });

  it("Search R2D2 with correct data format", async () => {
    const expected = [{ name: "R2-D2", height: "96" }];
    const baseName = `r2-d2`;

    const result = await obterPessoas(baseName);

    assert.deepEqual(result, expected);
  });
});
