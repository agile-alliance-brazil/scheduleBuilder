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
	}

	var regularLine = function (hour, minute) {
		var tr = $("<tr>").attr("data-hour", hour)
			 			  .attr("data-minutes", minute);
		$("<th>").text(hour + ":" + minute).appendTo(tr);

		for (var room = 1; room <= Config.numberOfRooms; room++) {
			$("<td>").addClass("room" + room).appendTo(tr);
		}
		return tr;
	}

	var newTable = function(day) {
		var table = $("<table>").addClass("day" + day)
		tableHead(day).appendTo(table);

		for (var hour = 9; hour < 19; hour++) {
			regularLine(hour, "00").appendTo(table);
			regularLine(hour, "30").appendTo(table);
		}
		regularLine(19, "00").appendTo(table);

		return table;
	}

	return {
		create: newTable
	};
})();
