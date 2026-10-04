import { ElementNotFoundError } from "../errors/ElementNotFoundError.js";
import { LinkedList } from "../scripts/LinkedList.js";

let list: LinkedList<string>;

beforeEach(function (): void {
	list = new LinkedList<string>();

	list.append("Dog");
	list.append("Cat");
	list.append("Parrot");
	list.append("Hamster");
	list.append("Snake");
	list.append("Turtle");
});

test("testToStringAsExpected()", function (): void {
	const expectedStr: string =
		"( Dog ) -> ( Cat ) -> ( Parrot ) -> ( Hamster ) -> ( Snake ) -> ( Turtle ) -> null";

	const resultStr: string = list.toString();

	const expectedSize: number = 6;

	const resultSize: number = list.size();

	expect(resultStr).toEqual(expectedStr);

	expect(resultSize).toEqual(expectedSize);
});

test("testPrependAsExpected()", function (): void {
	list.prepend("Caterpillar");
	list.append("Bunny");
	list.prepend("Dolphin");

	const expectedStr: string =
		"( Dolphin ) -> ( Caterpillar ) -> ( Dog ) -> ( Cat ) -> ( Parrot ) -> ( Hamster ) -> ( Snake ) -> ( Turtle ) -> ( Bunny ) -> null";

	const resultStr: string = list.toString();

	expect(resultStr).toEqual(expectedStr);

	const expectedSize: number = 9;

	const resultSize: number = list.size();

	expect(resultSize).toEqual(expectedSize);
});

test("testGetHeadAsExpected()", function (): void {
	const expected: string = "Dog";

	const result: string | null = list.getHead();

	expect(result).toEqual(expected);
});
7;
test("testGetTailAsExpected()", function (): void {
	const expected: string = "Turtle";

	const result: string | null = list.getTail();

	expect(result).toEqual(expected);
});

test("testGetHeadWhenListIsEmpty()", function (): void {
	expect(function (): void {
		const linkedList: LinkedList<string> = new LinkedList<string>();

		linkedList.getHead();
	}).toThrow(ElementNotFoundError);
});

test("testGetValueAtIndexAsExpected()", function (): void {
	const index1: number = 4;
	const expected1: string = "Snake";
	const result1: string | null = list.getValueAt(index1);
	expect(result1).toEqual(expected1);

	const index2: number = 2;
	const expected2: string | null = "Parrot";
	const result2: string = list.getValueAt(index2);
	expect(result2).toBe(expected2);

	const index3: number = 1;
	const expected3: string = "Cat";
	const result3: string = list.getValueAt(index3);
	expect(result3).toEqual(expected3);
});

test("testContainsAsExpected()", function (): void {
	const value1: string = "Snake";
	const result1: boolean = list.contains(value1);
	expect(result1).toBeTruthy();

	const value2: string = "Bat";
	const result2: boolean = list.contains(value2);
	expect(result2).toBeFalsy();

	const value3: string = "Hamster";
	const result3: boolean = list.contains(value3);
	expect(result3).toBeTruthy();

	const value4: string = "Shark";
	const result4: boolean = list.contains(value4);
	expect(result4).toBeFalsy();

	const value5: string = "Cat";
	const result5: boolean = list.contains(value5);
	expect(result5).toBeTruthy();
});

test("testContainsWhenListIsEmpty()", function (): void {
	expect(function (): void {
		const linkedList: LinkedList<number> = new LinkedList<number>();

		const value: number = 17;

		linkedList.contains(value);
	}).toThrow(ElementNotFoundError);
});

test("testFindIndexAsExpected()", function (): void {
	const value1: string = "Hamster";
	const expected1: number = 3;
	const result1: number = list.findIndex(value1);
	expect(result1).toEqual(expected1);

	const value2: string = "Turtle";
	const expected2: number = 5;
	const result2: number = list.findIndex(value2);
	expect(result2).toEqual(expected2);

	const value3: string = "Parrot";
	const expected3: number = 2;
	const result3: number = list.findIndex(value3);
	expect(result3).toEqual(expected3);
});

test("testFindIndexWhenValueNotFound()", function (): void {
	expect(function (): void {
		const value: string = "Josh Allen";

		list.findIndex(value);
	}).toThrow(ElementNotFoundError);
});

test("testFindIndexWhenDuplicateValues()", function (): void {
	const value1: string = "Cat";

	list.append(value1);

	const expected1: number = 1;
	const result1: number = list.findIndex(value1);
	expect(result1).toEqual(expected1);

	const value2: string = "Turtle";

	list.prepend(value2);

	const expected2: number = 0;
	const result2: number = list.findIndex(value2);
	expect(result2).toEqual(expected2);
});

test("testPopAsExpected()", function (): void {
	const expected1: string = list.getHead();
	const result1: string = list.pop();
	expect(result1).toEqual(expected1);
});
