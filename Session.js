function Session(session) {
	this.id = session.id;
	this.title = session.title;
	this.authors = session.authors;
	this.session_type = session.session_type;
	this.tags = session.tags || [];
	this.details = session.details || "regular";
	this.audience_limit = session.audience_limit || undefined;
	this.track = session.track;
	this.audience_level = session.audience_level;
	this.slides = session.slides || undefined;

	this.authorsDisplayName = function(){
		return this.authors[0].name + (this.authors.length == 2 ? " e " + this.authors[1].name : "")
	};

	this.type = function () {
		return this.session_type;
	};

	this.informationFor = function (cell) {
		var div = $("<div>").addClass("sessionInfo")
							.appendTo(cell);
		var level = $("<div>").addClass("level")
							.text(this.audience_level)
							.appendTo(cell);
		var title = $("<a>").attr("href", "session.html#" + this.id)
							.attr("target", "_parent")
							.attr("data-id", this.id)
							.text(this.title)
							.appendTo(div);
		var author = $("<span>").addClass("authors")
								.text(this.authorsDisplayName())
								.appendTo(div);
		if (this.audience_limit !== undefined) {
			var limit = $("<span>").addClass("limit")
								.text("Limite: " + this.audience_limit + " participantes");
			limit.appendTo(div);
		}
		var track = $("<div>").addClass("track")
							.text(this.track)
							.appendTo(cell);
		if (false) { //not yet
			var material = $("<a>").addClass("slides")
									.attr("href", this.slides)
									.attr("target", "_blank")
									.text("SLIDES")
									.appendTo(cell);
		}
		var classes = this.details + " ";
		for (var i = this.tags.length - 1; i >= 0; i--) {
			var tag = this.tags[i].replace(/ /g, "-");
			classes += tag + " ";
		}
		cell.addClass(classes);
	};
}
