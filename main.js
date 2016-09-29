var list = Immutable.List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var sum = list.reduce(function(z, i){return z + i}, 0);

var paragraph = document.createElement('p');
var content = document.createTextNode("Sum(1 to 10) = " + sum);
var calc = document.getElementById('calc');

paragraph.appendChild(content);
calc.appendChild(paragraph);