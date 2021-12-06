const data = [2, 4, 8, 16, 24, 32];
// const colors = d3.scaleOrdinal("#EDF8FB", "#BFD3E6", "#9EBCDA", "#8C96C6", "#8856A7", "#810F7C");
const colors = d3.scaleOrdinal(d3.schemeDark2)
const svgWidth = 600;
const svgHeight = 400;
const radius = Math.min(svgWidth, svgHeight) / 2;

const svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

const g = svg.append("g")
    .attr("transform", `translate(${svgWidth / 2}, ${svgHeight / 2})`)

const pie = d3.pie();
const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)

const arcs = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc');

arcs.append('path')
    .attr('fill', (d, i) => colors(i))
    .attr('d', arc)