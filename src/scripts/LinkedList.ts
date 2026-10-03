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

			// this.head = this.head?.next;
		} // else

		this.numNodes++;
	} // prepend()

	public size(): number {
		return this.numNodes;
	} // size()

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
