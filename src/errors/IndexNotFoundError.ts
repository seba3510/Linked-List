class IndexNotFoundError extends Error {
	constructor(message: string) {
		super(message);

		this.name = "IndexNotFoundError";
	} // constructor()
} // class

export { IndexNotFoundError };
