export class Vote {
	public _id: string;
	public name: string;
	public description: string;
	public category: string;
	public picture: string;
	public lastUpdated: string;
	public votes: { positive: number, negative: number }
	constructor(user?: any) {
		this._id = user ? user.id : null;
		this.name = user ? user.name : null;
		this.description = user ? user.description : null;
		this.category = user ? user.category : null;
		this.picture = user ? user.picture : null;
		this.lastUpdated = user ? user.lastUpdated : null;
		this.votes = user ? user.votes : null;
	}

}
