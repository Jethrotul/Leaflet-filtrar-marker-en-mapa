let url_base = "http://localhost";

let map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});

let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
let markers = L.markerClusterGroup();
let data_markers = [];
//let markersLayer = new L.LayerGroup();
//map.addLayer(markers)

function onMapLoad() {
	$.getJSON(`${url_base}/mapas/api/apiRestaurants.php`, function (data) {

		$.each(data, function (key, val) {
			data_markers.push(val);
		});

		let KindFood = data_markers.map(b => b.kind_food);
		for (let i = 0; i < KindFood.length; i++) {
			if (KindFood[i].indexOf(",") == -1) { }
			else {
				let split = KindFood[i].split(",");
				for (let i = 0; i < split.length; i++) {
					KindFood.push(split[i]);
				}
				KindFood.splice([i], 1);
			}
		}
		let unique = [... new Set(KindFood)];
		$(kind_food_selector).append(`<option>All</option>`)
		for (let a = 0; a < unique.length; a++) {
			$(kind_food_selector).append(`<option>${unique[a]}</option>`);
		}
		render_to_map(data_markers, "all");
	});
};

$('#kind_food_selector').on('change', function () {
	console.log(this.value);
	render_to_map(data_markers, this.value);
});

function render_to_map(data_markers, filter) {
	markers.clearLayers();														//Empieza borrando todos los marcadores
	for (let a = 0; a < data_markers.length; a++) {								//Recorre el array para coger info de los markers.

		if (filter === "All" || filter === "all") {								//Con el IF Else filtramos si son todos los marcadores o el que hayamos seleccionado.
			data_markers = data_markers;										//Volvemos al valor original de data_markers.
		}
		else {
			data_markers = data_markers.filter(a => a.kind_food === filter);	//filtramos data_markers dependiendo la opcion selecionada
		}

		const b = data_markers[a];												//Bind para simplificar
		let marker = new L.marker([b.lat, b.lng]).bindPopup(b.name);			//Por cada iteración añadimos el valor al marker con latitud, longitud y su popup.
		markers.addLayer(marker);												//Añadimos el marker al cluster markers ya declarado al inicio del script.
		map.addLayer(markers);													//Renderizamos el cluster.
	}
}