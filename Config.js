var Config = (function () {
	var numberOfDays = 3;
	var days = {};
	days[1] = "4a feira - 05/11"
	days[2] = "5a feira - 06/11"
	days[3] = "6a feira - 07/11";

	var numberOfRooms = 5;
	var rooms = {};
	rooms[1] = "Sala Jurerê";
	rooms[2] = "Sala Canasvieiras";
	rooms[3] = "Sala Joaquina";
	rooms[4] = "Sala Campeche";
	rooms[5] = "Sala Sambaqui";

	return {
		rooms: rooms,
		days: days,
		numberOfRooms: numberOfRooms,
		numberOfDays: numberOfDays
	};
})();
