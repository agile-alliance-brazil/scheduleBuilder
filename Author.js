function Author(author) {
	this.name = shortName(author.name);
	this.gravatar_url = author.gravatar_url;

	this.nameAndGravatar = function(authors) {
		var authorItem = $("<li>");
		$("<img>").attr("src", this.gravatar_url).appendTo(authorItem);
		$("<h2>").text(this.name).appendTo(authorItem);
		authorItem.appendTo(authors);
	}

	function shortName (fullName) {
		var names = fullName.split(" ");
		return names[0] + " " + names.pop();
	}
}