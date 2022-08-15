let reverse = /(\w+)\s(\w+)/;
let text = 'Asadbek Mirkhalikov';
let newText = text.replace(reverse, '$2 $1');

console.log(newText);
