var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];
  
  
function buildTable(data) {
    var headers = Object.keys(data[0]);
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');
    headers.forEach(function(header){
        var headerEl = document.createElement('th');
        headerEl.textContent = header;
        headerRow.appendChild(headerEl);
    })
    table.appendChild(headerRow);
    
    data.forEach(function(mountain){
        var row = document.createElement('tr');
        for (prop in mountain) {
            var el = document.createElement('td');
            if (typeof mountain[prop] === 'number') {
                el.style.textAlign = "right";
            }
            el.textContent = mountain[prop];
            row.appendChild(el);
        }
        table.appendChild(row);
    })

    return table;
}

document.body.appendChild(buildTable(MOUNTAINS));

