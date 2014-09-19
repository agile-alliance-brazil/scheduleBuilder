function Session(session) {
	this.id = session.id;
	this.title = session.title;
	this.authors = session.authors;
	this.session_type = session.session_type;
	this.tags = session.tags;

	this.authorsDisplayName = function(){
		return this.authors[0] + (this.authors.length == 2 ? " e " + this.authors[1] : "")
	};

	this.type = function () {
		return this.session_type;
	}
	
}
