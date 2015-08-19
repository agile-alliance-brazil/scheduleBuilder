var Config = (function () {
	var numberOfDays = 3;
	var days = {};
	days[1] = "4a feira - 21/10"
	days[2] = "5a feira - 22/10"
	days[3] = "6a feira - 23/10";

	var numberOfRooms = 5;
	var rooms = {};
	rooms[1] = "Sala 1";
	rooms[2] = "Sala 2";
	rooms[3] = "Sala 3";
	rooms[4] = "Sala 4";
	rooms[5] = "Sala 5";

	var slots = {};
	slots[1] = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", 
				"14:00", "14:30",  "15:00", "15:30", "16:00", "16:30","17:00", 
				"17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

	slots[2] = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", 
				"13:30", "14:00",  "15:00", "15:30", "16:00", "16:30","17:00", 
				"17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

	slots[3] = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", 
				"13:30", "14:00",  "15:00", "15:30", "16:00", "16:30","17:00", 
				"17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];

	var foodStops = [];
	foodStops[1] = {"10:00": "Abertura",
					"13:00": "Brunch",
					"16:00": "Coffee",
					"18:30": "Kits de lanche",
					"20:30": "Fim do Dia"};

	foodStops[2] = {"10:00": "Abertura",
					"11:30": "Kits de lanche",
					"14:00": "Brunch",
					"18:00": "Coffee",
					"20:30": "Fim do Dia"};

	foodStops[3] = {"10:00": "Abertura",
					"11:30": "Kits de lanche",
					"14:00": "Brunch",
					"17:00": "Coffee",
					"20:00": "Fim do Dia"};

	var tags = ["Testes", "Refatoração", "Restricões", "Planejamento", "Oportunidades", 
			"Motivação", "Melhoria contínua", "Ideias", "Cultura", "Comprometimento", 
			"Casos de Sucesso", "Aprendizagem", "Técnicas", "Requisitos", "Processos", 
			"Negócios", "Métricas", "Estratégias", "Design emergente", "Coaching", 
			"Relacionamento com clientes", "Times", "Experiência do usuário", 
			"Criação", "Evolução", "Test Driven Design", "Estimativas", "Implantação", 
			"Startup", "Riscos", "Casos de Fracasso", "Visualização", "Padrões", 
			"Integração contínua", "Deploy contínuo", "Automação", "Habilidade", 
			"Código legado", "Front end", "Programação pareada", "Revisão de código"];

	function numberOfTags () {
		return tags.length;
	}

	function tag (index) {
		return tags[index];
	}

	function tagClass(index) {
		return tags[index].replace(/ /g, "-");
	}


	return {
		rooms: rooms,
		days: days,
		numberOfRooms: numberOfRooms,
		numberOfDays: numberOfDays,
		slots: slots,
		foodStops: foodStops,
		numberOfTags: numberOfTags,
		tag: tag,
		tagClass: tagClass
	};
})();
