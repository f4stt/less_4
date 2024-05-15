
let placeOfResidence = prompt('Какой город', 'Киев');
let DateOfBirth = prompt('Какой год рождения', '1992');
let hobbies = prompt('твой любимый вид спорта?', 'футбол');

if (DateOfBirth !== null && placeOfResidence !== null && hobbies !== null) {
    alert(`${DateOfBirth},${placeOfResidence},${hobbies}`);
} else {
    console.log('нет данных');
}
