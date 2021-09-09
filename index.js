const btn = document.getElementById("get-weather");
const secondTable = document.getElementById("second-table");
const city = ["London", "New York", "Los Angeles", "Las Vegas"];
// console.log(btn);
btn.addEventListener("click", function () {
  resList = [];
  city.map((item) => {
    fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${item}`)
      .then((res) => res.json())
      .then((data) => {
        // var row = secondTable.insertRow(1);
        var row = secondTable.insertRow(1);
        row.insertCell(0).innerHTML = item;
        // row.insertCell(0).innerHTML = "London";
        //   var row = secondTable.insertRow(1);
        //   var cell1 = row.insertCell(0);
        //   var cell2 = row.insertCell(1);
        //   cell1.innerHTML = "London";
        for ([index, it] of Object.entries(data)) {
          //   console.log(index, it);
          if (index === "description") {
            // console.log(index);
            row.insertCell(1).innerHTML = data[index];
          }
          if (index === "temp_in_celsisus") {
            row.insertCell(2).innerHTML = data[index];
          }
          if (index === "pressure_in_hPa") {
            row.insertCell(3).innerHTML = data[index];
          }
          if (index === "humidity_in_percent") {
            row.insertCell(4).innerHTML = data[index];
          }
          //   row.insertCell(i).innerHTML = data[i];
        }
        //   for (i = 0; i < table.length; i++) {
        //     var row = secondTable.insertRow(i + 1);
        //     var cell1 = row.insertCell(0);
        //     cell1.innerHTML = "London";
        //     for (j = 0; j < table.length; j++) {
        //       //         console.log(l[i][j])
        //       //   if (table[i][j] === "description") {
        //       row.insertCell(j + 1).innerHTML = table[i][j + 1];
        //       // cell2.innerHTML = table[i][j + 1];
        //       //   }
        //     }
        //   }
        console.log(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  });
});

// var row = secondTable.insertRow(1);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// cell1.innerHTML = "gyan";
// cell2.innerHTML = "prakash";
