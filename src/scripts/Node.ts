class Node<T> {
	//@ts-expect-error
	private _data: T | null;

	//@ts-expect-error
	private _next: Node<T> | null;

	public get data(): T | null {
		return this._data;
	} // getData()

	public set data(value: T | null) {
		this._data = value;
	} // setData()

	public get next(): Node<T> | null {
		return this._next;
	} // getNext()
	public set next(value: Node<T> | null) {
		this._next = value;
	} // setNext()

	constructor() {
		this.data = null;

		this.next = null;
	} // constructor()
} // class

export { Node };
