let url_base = "http://localhost";

let map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});
	
let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
let markers = L.markerClusterGroup();
let data_markers = new Array();


function onMapLoad() {
	$.getJSON(`${url_base}/mapas/api/apiRestaurants.php`, function(data){
		$.each(data, function(key, value){
			data_markers.push(value);
		});
	});
};
//console.log(data_markers);
let raw = [{"id_restaurant":"1","name":"La Taberna De L'EIXAMPLE Venezolanos","address":"Gran Via de les Corts Catalanes, 688, 08010 Barcelona","lat":"41.393700","lng":"2.174760","king_food":"Vegetariano"},{"id_restaurant":"2","name":"Giulietta Cafe","address":"Pla\u00e7a de Tetuan, 4, 08010 Barcelona","lat":"41.393729","lng":"2.175066","king_food":"Italiano"},{"id_restaurant":"3","name":"Peix d'Or","address":"Carrer d'Ausi\u00e0s Marc, 73, 08013 Barcelona","lat":"41.393746","lng":"2.178259","king_food":"Mediterr\u00e1neo"},{"id_restaurant":"4","name":"Piratas","address":"Carrer d'Ausi\u00e0s Marc, 157, 08013 Barcelona","lat":"41.397043","lng":"2.182988","king_food":"Braseria"},{"id_restaurant":"5","name":"El Punto","address":"Carrer de Padilla, 170, 08013 Barcelona","lat":"41.399330","lng":"2.185551","king_food":"Mediterr\u00e1neo"},{"id_restaurant":"6","name":"La Piazzenza","address":"Av. de Gaud\u00ed, 27, 08025 Barcelona","lat":"41.404516","lng":"2.174481","king_food":"Italiano"},{"id_restaurant":"7","name":"Restaurante El Ruedo","address":"Carrer del Rossell\u00f3, 540, 08026 Barcelona","lat":"41.407413","lng":"2.176191","king_food":"Mexicano"},{"id_restaurant":"8","name":"Els Pescadors","address":"Pla\u00e7a de Prim, 1, 08005 Barcelona","lat":"41.399685","lng":"2.204346","king_food":"Mediterr\u00e1neo"},{"id_restaurant":"9","name":"Disfrutar","address":"Carrer de Villarroel, 163, 08036 Barcelona","lat":"41.387779","lng":"2.153534","king_food":"Mediterr\u00e1neo"},{"id_restaurant":"10","name":"Hummus Barcelona","address":"Carrer de Val\u00e8ncia, 227, 08007 Barcelona","lat":"41.391003","lng":"2.161021","king_food":"Vegetariano"}]
console.log (raw);
let datapol2 = data_markers.map(b => b.name);
let datapol3 = raw.map(c => c.name);

//console.log(datapol2);
//console.log(data_markers.name);

//console.log(datapol3);


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