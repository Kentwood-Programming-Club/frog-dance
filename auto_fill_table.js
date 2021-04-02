let cols = 4;
let rows = 4;
let frog_imgs = 6;

let table_rows = document.getElementsByTagName("tr");

for ( let i = 0; i < rows; i++ ) {
    for (let j = 0; j < cols; j++) {
        table_rows[i].innerHTML += "<td><img src='images/image_" + (((i * cols + j) % 6) + 1) + ".gif'/><td/>"; 
    }
}