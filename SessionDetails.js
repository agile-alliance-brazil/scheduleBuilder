function SessionDetails(sessionDetails) {
	this.id = sessionDetails.id;
	this.title = sessionDetails.title;
	this.authors = getAuthors(sessionDetails.authors);
	this.prerequisites = sessionDetails.prerequisites;
	this.tags = sessionDetails.tags;
	this.session_type = sessionDetails.session_type;
	this.audience_level = sessionDetails.audience_level;
	this.track = sessionDetails.track;
	this.summary = sessionDetails.summary;

	function getAuthors (authors) {
		var authorArray = [];
		$.each(sessionDetails.authors, function(index, author) {
			authorArray.push(new Author(author));
		});
		return authorArray;
	}

	this.showYourself = function (container) {
		$(".title").text(this.title);
		for (var i = 0; i < this.authors.length; i++) {
			this.authors[i].nameAndGravatar($(".authors"));
		}
		$(".prerequisites").text(this.prerequisites);
		$(".summary").text(this.summary);

		$(".type").text(this.session_type);
		$(".track").text(this.track);
		$(".audience").text(this.audience_level);

		for (var i = 0; i < this.tags.length; i++) {
			$("<li>").text(this.tags[i]).appendTo($(".tags"));
		}
	};
}