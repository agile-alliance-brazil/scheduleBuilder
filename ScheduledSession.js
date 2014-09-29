function ScheduledSession (parsedObject) {
	this.room = parsedObject.room;
	this.day = parsedObject.day;
	this.hour = parsedObject.hour;
	this.minutes = parsedObject.minutes || "00";
	this.roomspan = parsedObject.roomspan || 1;
	this.timespan = howManyHalfHourSlots(parsedObject.session.session_type);
	this.session = new Session(parsedObject.session);

	function howManyHalfHourSlots (sessionType) {
		if (sessionType == "Relatos de Experiência") {
			return 1;
		} else if(sessionType == "Mão na Massa") {
			return 3;
		}
		return 2;
	}

	this.positionYourself = function() {
		var table = $("[data-day='" + this.day + "']");
		var line = table.find("[data-time='" + this.hour + ":" + this.minutes + "']");
		var cell = line.find("[data-room='" + this.room + "']");
		cell.attr("rowspan", this.timespan).attr("colspan", this.roomspan);
		this.session.informationFor(cell);

		for (var i = 1; i < this.timespan; i++) {
			line = line.next();
			var toBeRemoved = line.find("[data-room='" + this.room + "']");
			toBeRemoved.remove();
		}
	};

}
