document.write("<h1><b><i>Odd or Even Numbers from 0 to 15</i></b></h1>");

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + " is even<br>");
    } else {
        document.write(i + " is odd<br>");
    }
}
