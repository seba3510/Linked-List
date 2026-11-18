import { ElementNotFoundError } from "../../errors/ElementNotFoundError.js";
import { EmptyLinkedListError } from "../../errors/EmptyLinkedListError.ts.js";
import { IndexNotFoundError } from "../../errors/IndexNotFoundError.js";
import { Node } from "./Node.js";

class LinkedList<T> {
	private head: Node<T> | null;

	private tail: Node<T> | null;

	private numNodes: number;

	constructor() {
		this.head = null;

		this.tail = null;

		this.numNodes = 0;
	} // constructor()

	public append(value: T): void {
		const isListEmpty: boolean = this.head === null;

		const temp: Node<T> = new Node();

		temp.data = value;

		if (isListEmpty) {
			this.head = temp;

			this.tail = this.head;
		} // if
		else {
			this.tail!.next = temp;

			this.tail = temp;
		} // else

		this.numNodes++;
	} // append()

	public prepend(value: T): void {
		const temp: Node<T> = new Node();

		temp.data = value;

		const isListEmpty: boolean = this.head === null;

		if (isListEmpty) {
			this.head = temp;

			this.tail = this.head;
		} // if
		else {
			temp.next = this.head;

			this.head = temp;
		} // else

		this.numNodes++;
	} // prepend()

	public size(): number {
		return this.numNodes;
	} // size()

	public getHead(): T {
		const isListEmpty: boolean = this.head === null;

		if (isListEmpty) {
			const message: string =
				"Cannot get the value of the head node, because the list is empty";

			throw new ElementNotFoundError(message);
		} // if

		return this.head!.data as T;
	} // getHead()

	public getTail(): T {
		const isListEmpty: boolean = this.tail === null;

		if (isListEmpty) {
			const message: string =
				"Cannot find the value of the tail, because the list is empty";

			throw new ElementNotFoundError(message);
		} // if

		return this.tail!.data as T;
	} // getTail()

	public getValueAt(index: number): T {
		const isListEmpty: boolean = this.head === null;

		if (isListEmpty) {
			const message: string =
				"Cannot get the value at the specified index, because the list is empty";

			throw new ElementNotFoundError(message);
		} // if

		let curr: Node<T> = this.head as Node<T>;

		return this.getValueAtHelper(index, curr);
	} // getValueAt()

	private getValueAtHelper(index: number, curr: Node<T>): T {
		const isIndexValid: boolean = index <= 0;

		if (isIndexValid) {
			return curr.data as T;
		} // if

		//@ts-expect-error
		return this.getValueAtHelper(index - 1, curr.next);
	} // getValueAtHelper()

	public pop(): T {
		const isListEmpty: boolean = this.head === null;

		if (isListEmpty) {
			const message: string =
				"Cannot remove the node, because the list is empty";

			throw new EmptyLinkedListError(message);
		} // if

		const temp: Node<T> = this.head as Node<T>;

		let value: T = temp.data as T;

		this.head = this.head!.next;

		return value;
	} // pop()

	public contains(value: T): boolean {
		const isListEmpty: boolean = this.head === null;

		if (isListEmpty) {
			const message: string =
				"Cannot search for the value, because the list is empty";

			throw new ElementNotFoundError(message);
		} // if

		let curr: Node<T> = this.head as Node<T>;

		return this.containsHelper(value, curr);
	} // contains()

	private containsHelper(value: T, curr: Node<T>): boolean {
		const isNodeEmpty: boolean = curr === null;

		const isValueFound: boolean = curr?.data === value;

		if (isNodeEmpty) {
			return false;
		} // if
		else if (isValueFound) {
			return true;
		} // else if
		else {
			//@ts-expect-error
			return this.containsHelper(value, curr.next);
		} // else
	} // containsHelper()

	public findIndex(value: T): number {
		const isListEmpty: boolean = this.head === null;

		const isValueFound: boolean = this.contains(value);

		if (isListEmpty) {
			const message: string =
				"Can't find the given index, because the list is empty";

			throw new IndexNotFoundError(message);
		} // else
		else if (!isValueFound) {
			const message: string =
				"Can't find the index of the given value, because the value isn't in the list";

			throw new ElementNotFoundError(message);
		} // else if
		else {
			let curr: Node<T> = this.head as Node<T>;

			let index: number = 0;

			return this.findIndexHelper(value, index, curr);
		} // else
	} // findIndex()

	private findIndexHelper(value: T, index: number, curr: Node<T>): number {
		const isNodeEmpty: boolean = curr === null;

		const isIndexFound: boolean = curr.data === value;

		if (isNodeEmpty) {
			return 1;
		} // if
		else if (isIndexFound) {
			return index;
		} // else if
		else {
			//@ts-expect-error
			return this.findIndexHelper(value, index + 1, curr.next);
		} // else
	} // findIndexHelper()

	public insertAt(index: number, value: T): void {
		const isIndexOutOfBounds: boolean = index <= 0 || index >= this.size();

		if (isIndexOutOfBounds) {
			const message: string =
				"Cannot insert value at the given index, because the index is out-of-bounds";

			throw new RangeError(message);
		} // if

		const isIndexAtHead: boolean = index === 0;

		const isIndexAtTail: boolean = index === this.size() - 1;

		if (isIndexAtHead) {
			this.prepend(value);
		} // if
		else if (isIndexAtTail) {
			this.append(value);
		} // else if
		else {
			const curr: Node<T> = this.head as Node<T>;

			const position: number = this.size();

			this.insertAtHelper(index, value, curr, position);
		} // else
	} // insertAt()

	private insertAtHelper(
		index: number,
		value: T,
		curr: Node<T>,
		position: number,
	): void {
		const isNodeEmpty: boolean = curr.next === null;

		const isPositionFound: boolean = position === index;

		if (isNodeEmpty) {
			return;
		} // if
		else if (isPositionFound) {
			const temp: Node<T> = new Node<T>();

			temp.data = value;

			curr.next = temp;

			curr = temp;

			this.numNodes++;

			return;
		} // else if
		else {
			// @ts-expect-error
			this.insertAtHelper(index, value, curr.next, position + 1);
		} // else
	} // insertAtHelper()

	public toString(): string {
		let listStr: string = "";

		let curr: Node<T> | null = this.head;

		while (curr !== null) {
			listStr += `( ${curr.data} ) -> `;

			curr = curr.next;
		} // while

		listStr += `null`;

		return listStr;
	} // toString()
} // class

export { LinkedList };
