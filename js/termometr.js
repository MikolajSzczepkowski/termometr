var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(e) {
  var celsjusz = form.celsjusz.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  var convert = parseFloat(celsjusz);
 para.innerText =  celsjusToFahrenheit(convert);// Tutaj będziemy wywoływać funkcję i przypisywać wynik do elementu.
});
var celsjusToFahrenheit = function(cel){
	if (typeof(cel)==="number"){
	return (cel*2) + 30;

	console.log('check')
	}
}
var para = document.createElement('p');
document.body.appendChild(para);