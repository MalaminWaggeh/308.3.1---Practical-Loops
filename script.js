//Fizz Buzz
/*for (let i = 1; i <= 100; i++) {
  
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
 if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz"); }
       else {
      console.log(i);
  }
}
*/
//console.log("============================")
// Prime time
/*for (let n = 5; n <= 12; n++) {
    let isPrime = true; //flag
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${n} is a prime Number.`);
    }
}
*/


let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the CSV data into rows
let rows = csvData.split("\n");

// Loop through each row
for (let i = 0; i < rows.length; i++) {
    // Skip empty rows
    if (rows[i] === "") {
        continue;
    }

    // Split each row into cells using the comma as a delimiter
    let cells = rows[i].split(",");

    // Log each row of data
    console.log(cells[0], cells[1], cells[2], cells[3]);
}
