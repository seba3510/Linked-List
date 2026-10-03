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
