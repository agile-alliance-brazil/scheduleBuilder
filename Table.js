var Table = (function () {
	var tableHead = function (day) {
		var thead = $("<thead>");
		var dayTr = $("<tr>");
		$("<th>").attr("colspan", Config.numberOfRooms + 1)
				 .text(Config.days[day])
				 .appendTo(dayTr);
		dayTr.appendTo(thead);

		var roomTr = $("<tr>");
		$("<th>").addClass("time").text("Horário").appendTo(roomTr);
		for (var i = 1; i <= Config.numberOfRooms; i++) {
			$("<th>").addClass("room" + i)
					 .text(Config.rooms[i])
					 .appendTo(roomTr);
		}
		roomTr.appendTo(thead);
		return thead;
	};

	var regularLine = function (time) {
		var tr = $("<tr>").attr("data-time", time);
		$("<th>").text(time).appendTo(tr);

		for (var room = 1; room <= Config.numberOfRooms; room++) {
			$("<td>").attr("data-room", room).appendTo(tr);
		}
		return tr;
	};

	var allHands = function (time, content) {
		var tr = $("<tr>").attr("data-time", time);
		$("<th>").text(time).appendTo(tr);
		$("<td>").attr("data-room", 1)
				 .attr("colspan", Config.numberOfRooms)
				 .addClass("allHands")
				 .text(content)
				 .appendTo(tr);
		return tr;
	};

	var addLine = function (day, time) {
		if (Config.foodStops[day][time]) {
			return allHands(time, Config.foodStops[day][time]);
		} else {
			return regularLine(time);
		}
	};

	var newTable = function(day) {
		var table = $("<table>").attr("data-day", day);
		tableHead(day).appendTo(table);

		Config.slots[day].forEach(function (time) {
			addLine(day, time).appendTo(table);
		});

		return table;
	};

	return {
		create: newTable
	};
})();
