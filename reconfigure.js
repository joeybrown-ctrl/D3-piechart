//const { color } = require("d3-color");

const dataArr = [
    {value: 2, label: "2", grade: "A++"},
    {value: 4, label: "4", grade: "A+"},
    {value: 8, label: "8", grade: "A"},
    {value: 16, label: "16", grade: "B++"},
    {value: 24, label: "24", grade: "B+"},
    {value: 32, label: "32", grade: "B"}
];
const data = d3.pie().sort(null).value(d => d.value)(dataArr)
console.log(data)
const colorArr = d3.scaleOrdinal(d3.schemeOrRd);

const svgWidth = 750;
const svgHeight = 500;
const radius = Math.min(svgWidth, svgHeight) / 2;
const svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const g = svg.append("svg")
    .attr("transform", `translate(${svgWidth / 2}, ${svgHeight /2})`);

const pie = d3.pie();
const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

const arcs = g.select("arc")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "arc")

arcs.append("path")
    .attr("fill", (d, i) => colorArr(i))
    .attr("d", arc)

const content = d3.select("all")
    .selectAll("text")
    .data(data);

content.enter()
    .append("text")
    .each(function(d) {
        const center = arc.centroid(d)
        d3.select(this)
            .attr("x", center[0])
            .attr("y", center[1])
            .text(d.data.label)
            .attr("fill", "white")
            .style("font-size", "1.5em")
    });

const legends = svg.append("g")
    .attr('transform', "translate(700, 300)")
    .selectAll("legends")
    .data(data);

const legend = legends.enter()
    .append('g')
    .classed("legends", true)
    .attr("transform", (d, i) => `translate(0, ${(i + 1) * 30}))`)

    legend.append('rect')
        .attr("width", 20)
        .attr("height", 20)
        .attr('fill', (d, i) => colorArr(i));

    legend.append("text")
        .text(d => d.data.grade)
        .attr("fill", (d) => colorArr(d.data.grade))
        .attr("x", 20).attr("y", 15).style("font-size", "1em");

