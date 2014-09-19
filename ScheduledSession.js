function ScheduledSession (parsedObject) {
	this.room = parsedObject.room;
	this.day = parsedObject.day;
	this.hour = parsedObject.hour;
	this.minutes = parsedObject.minutes || "00";
	this.roomspan = parsedObject.roomspan || 1;
	this.timespan = howManyHalfHourSlots(parsedObject.session.session_type);
	this.session = new Session(parsedObject.session);

	function howManyHalfHourSlots (sessionType) {
		if (sessionType == "Relato") {
			return 1;
		} else if(sessionType == "Mão na Massa") {
			return 3;
		}
		return 2;
	}

}
