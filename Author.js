function Author(author) {
	this.name = author.name;
	this.gravatar_url = author.gravatar_url;

	this.nameAndGravatar = function(authors) {
		var authorItem = $("<li>");
		$("<img>").attr("src", this.gravatar_url).appendTo(authorItem);
		$("<h2>").text(this.name).appendTo(authorItem);
		authorItem.appendTo(authors);
	}
}