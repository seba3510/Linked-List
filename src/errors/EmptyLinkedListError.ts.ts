class EmptyLinkedListError extends Error {
	constructor(message: string) {
		super(message);

		this.name = "EmptyLinkedListError";
	} // constructor()
} // class

export { EmptyLinkedListError };
