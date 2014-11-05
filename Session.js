function Session(session) {
	this.id = session.id;
	this.title = session.title;
	this.authors = session.authors;
	this.session_type = session.session_type;
	this.tags = session.tags || [];
	this.details = session.details || "regular";
  this.audience_limit = session.audience_limit || undefined;

	this.authorsDisplayName = function(){
		return this.authors[0] + (this.authors.length == 2 ? " e " + this.authors[1] : "")
	};

	this.type = function () {
		return this.session_type;
	};

	this.informationFor = function (cell) {
		var title = $("<a>").attr("href", "session.html#" + this.id)
							.attr("target", "_parent")
							.attr("data-id", this.id)
							.text(this.title)
							.appendTo(cell);
		var author = $("<span>").addClass("authors")
								.text(this.authorsDisplayName())
								.appendTo(cell);
    var limit = $("<span>").addClass("limit")
                .text("Limite: " + this.audience_limit + " participantes");
    if(this.audience_limit !== undefined) {
      limit.appendTo(cell);
    }
		var classes = this.details + " ";
		for (var i = this.tags.length - 1; i >= 0; i--) {
			var tag = this.tags[i].replace(/ /g, "-");
			classes += tag + " ";
		}
		cell.addClass(classes);
	};
}
