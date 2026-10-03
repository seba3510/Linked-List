import { sum } from "../scripts/index";

test("testSum()", function (): void {
	const expected: number = 5;
	const result: number = sum(3, 2);

	expect(result).toEqual(expected);
});
