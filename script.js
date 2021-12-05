function main() {
    //d3 goes here
    var data = [2, 4, 6, 10, 14, 20];
    // var pie = d3.pie()

    // console.log(pie(data));

    var svg = d3.select("svg")
    var width = svg.attr("width")
    var height = svg.attr("height")
    var radius = Math.min(width, height) / 2

    var g = svg.append("g").attr("transform", "translate('+ width / 2 +')")

    //constructs new ordinal scale -- order is key with ordinal data
    var color = d3.scaleOrdinal(['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'])

    var pie = d3.pie();
    
}