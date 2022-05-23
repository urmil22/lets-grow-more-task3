var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
let n=0;
let x=0;

function addData() {
    var addRow = document.getElementById("display");
    var newRow = addRow.insertRow(n);
    data1[x] = document.getElementById('name').value;
    data2[x] = document.getElementById('email').value;
    data3[x] = document.getElementById('phone-no').value;
    data4[x] = document.getElementById('skills').value;

    var cellData1 = newRow.insertCell(0);
    var cellData2 = newRow.insertCell(1);
    var cellData3 = newRow.insertCell(2);
    var cellData4 = newRow.insertCell(3);

    cellData1.innerHTML = data1[x];
    cellData2.innerHTML = data2[x];
    cellData3.innerHTML = data3[x];
    cellData4.innerHTML = data4[x];

    n++;
    x++;
}