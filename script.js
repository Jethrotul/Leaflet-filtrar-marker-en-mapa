let url_base = "http://localhost";

let map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});
	
let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
let markers = L.markerClusterGroup();
let data_markers = [];

function onMapLoad() {
	$.getJSON(`${url_base}/mapas/api/apiRestaurants.php`, function(data){
		$.each(data, function(key, val){
			data_markers.push(val);
		});
		let separador = data_markers.map(b => b.kind_food);
		(separador[4].split(","));

		let unique = [... new Set(data_markers.map(b => b.kind_food))];
		for (let a = 0; a < (unique.length-1); a++) {
			$(kind_food_selector).append(`<option>${data_markers.map(b => b.kind_food)[a]}</option>`);
			}
		
	});
};




$('#kind_food_selector').on('change', function() {
  
	console.log(this.value);
  render_to_map(data_markers, this.value);
});



function render_to_map(data_markers,filter){
	
	/*
	FASE 3.2
		1) Limpio todos los marcadores
		2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
	*/	
			
}