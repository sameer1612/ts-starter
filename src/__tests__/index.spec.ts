import { sum } from '../index';

describe("sum", () => {
  it("should be able to add two numbers", async () => {
    const res = sum(1,2)
    expect(res).toEqual(3);
  });
});