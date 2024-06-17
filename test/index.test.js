import {
  findSum
} from "../src/index.js";

describe("index.js", () => {
  describe("no matching numbers", () => {
    it("should return an empty array", () => {
      expect(findSum(3, [5, 6, 7, 9, 11, 13, 15])).toEqual([]);
    });
  });

  describe("example of unordered array", () => {
    it("should return [3, 5]", () => {
      const nums = [3, 8, 1, 5, 9, 10];
      expect(findSum(8, nums)).toEqual([3, 5]);
    });
  });

  describe("example of unordered array", () => {
    it("should return [5, 3]", () => {
      const nums = [5, 6, 3, 9, 5];
      expect(findSum(8, nums)).toEqual([5, 3]);
    });
  });

  describe("example of ordered array", () => {
    it("should return [7, 8]", () => {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8];
      expect(findSum(15, nums)).toEqual([7, 8]);
    });
  });

  describe("example of doubled sum", () => {
    it("should return []", () => {
      const nums = [0, 0, 3, 0];
      expect(findSum(6, nums)).toEqual([]);
    });
  });

  describe("example of duplicated numbers", () => {
    it("should return [8, 8]", () => {
      const nums = [8, 0, 0, 8, 0, 0];
      expect(findSum(16, nums)).toEqual([8, 8]);
    });
  });

  describe("example of array with all same numbers", () => {
    it("should return [8, 8]", () => {
      const nums = [3, 3, 3, 3, 3];
      expect(findSum(6, nums)).toEqual([3, 3]);
    });
  });

  describe("example of duplicated numbers", () => {
    it("should return [8, 8]", () => {
      const nums = [8, 0, 0, 8, 0, 0];
      expect(findSum(16, nums)).toEqual([8, 8]);
    });
  });

  describe("empty array", () => {
    it("should return []", () => {
      const nums = [];
      expect(findSum(3, nums)).toEqual([]);
    });
  });
});
