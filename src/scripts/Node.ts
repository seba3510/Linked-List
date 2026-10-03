class Node {
	//@ts-expect-error
	private _data: number | null;

	//@ts-expect-error
	private _next: Node | null;

	public get data(): number | null {
		return this._data;
	} // getData()
	public set data(value: number | null) {
		this._data = value;
	} // setData()

	public get next(): Node | null {
		return this._next;
	} // getNext()
	public set next(value: Node | null) {
		this._next = value;
	} // setNext()

	constructor() {
		this.data = null;

		this.next = null;
	} // constructor()
} // class

export { Node };
