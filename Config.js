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

	var slots = {};
	slots[1] = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", 
					"12:30", "13:00", "14:30",  "15:00", "15:30", "16:00", 
					"16:30","17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

	slots[2] = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", 
					"12:30", "13:00", "14:30",  "15:00", "15:30", "16:00", 
					"16:30","17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

	slots[3] = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", 
					"12:30", "14:00", "14:30",  "15:00", "15:30", "16:00", 
					"16:30","17:00", "17:30", "18:00"];

	var foodStops = [];
	foodStops[1] = {"9:00": "Abertura",
					"11:00": "Coffee",
					"13:00": "Almoço",
					"17:30": "Coffee",
					"19:30": "Fim do Dia"};

	foodStops[2] = {"10:00": "Coffee",
					"13:00": "Almoço",
					"17:30": "Coffee",
					"19:30": "Fim do Dia"};

	foodStops[3] = {"10:00": "Coffee",
					"12:30": "Almoço",
					"17:00": "Coffee",
					"17:30": "Encerramento",
					"18:00": "Fim do Dia"};

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
