import * as d3 from "d3";
import { useRef, useEffect } from "react";

const Graph = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .style('overflow', 'visible')
            .style('opacity', 0.7);

        const updateDimensions = () => {
            const width = svgRef.current.parentNode.clientWidth;
            const height = width * 0.6;
            svg.attr("width", width)
                .attr("height", height);

            // Set up the scales
            const x1 = d3.scaleLinear()
                .domain([0, 100])
                .range([0, width]);

            const x2 = d3.scaleLinear()
                .domain([100, 0])
                .range([0, width]);

            const y = d3.scaleLinear()
                .domain([0, 100])
                .range([height, 0]);

            // Set up axes
            const xAxis1 = d3.axisBottom(x1)
                .ticks(data[0].data.length)
                .tickFormat(d => `${d}%`);

            const xAxis2 = d3.axisTop(x2)
                .ticks(data[0].data.length)
                .tickFormat(d => `${d}%`);

            svg.select('.x-axis1').call(xAxis1).selectAll(".axis-label").remove();
            svg.select('.x-axis1')
                .attr('transform', `translate(0, ${height})`)
                .call(xAxis1)
                .append('text')
                .attr('class', 'axis-label')
                .attr('x', width / 2)
                .attr('y', 35)
                .attr('fill', 'gray')
                .attr('font-size', '14px') // Add font-size attribute
                .text('Environmental importance');

            svg.select('.x-axis2').call(xAxis2).selectAll(".axis-label").remove();
            svg.select('.x-axis2')
                .call(xAxis2)
                .append('text')
                .attr('class', 'axis-label')
                .attr('x', width / 2)
                .attr('y', -25)
                .attr('fill', 'gray')
                .attr('font-size', '14px') // Add font-size attribute
                .text('Economic importance');
            const yAxis = d3.axisLeft(y)
                .ticks(10);

            svg.select('.y-axis').call(yAxis).selectAll(".axis-label").remove();
            svg.select('.y-axis')
                .call(yAxis)
                .append('text')
                .attr('class', 'axis-label')
                .attr('x', -height / 2)
                .attr('text-anchor', 'middle')
                .attr('y', '-30')
                .attr('fill', 'gray')
                .attr('transform', 'rotate(-90)')
                .attr('font-size', '14px') // Add font-size attribute
                .text('Eco-efficiency score');

            // Remove existing data paths and circles
            svg.selectAll('.data-path').remove();
            svg.selectAll('.data-circle').remove();
            svg.selectAll('.grid-line').remove();

            // Add background grid lines
            const xGrid = d3.axisBottom(x1)
                .tickSize(-height)
                .tickFormat('')
                .tickValues(x1.ticks().filter(tick => tick !== 0 && tick !== 100));
            const yGrid = d3.axisLeft(y)
                .tickSize(-width)
                .tickFormat('')
                .tickValues(y.ticks().filter(tick => tick !== 0 && tick !== 100));

            svg.append('g')
                .attr('class', 'grid-line')
                .call(xGrid)
                .attr('transform', `translate(0, ${height})`)
                .selectAll('.tick line')
                .attr('stroke', 'rgba(127, 127, 127, 0.2)');
            svg.append('g')
                .attr('class', 'grid-line')
                .call(yGrid)
                .selectAll('.tick line')
                .attr('stroke', 'rgba(127, 127, 127, 0.2)');


            // Remove existing legend elements
            svg.selectAll(".legend-circle").remove();
            svg.selectAll(".legend-label").remove();
            // Add data paths and circles
            data.forEach((product, index) => {
                const line = d3
                    .line()
                    .x((d, i) => x1((i / (product.data.length - 1)) * 100))
                    .y((d) => y(d));

                svg
                    .append("path")
                    .datum(product.data)
                    .attr("class", "data-path")
                    .attr("fill", "none")
                    .attr("stroke", `hsl(${index * (360 / data.length)}, 100%, 50%)`)
                    .attr("stroke-width", "1.5")
                    .attr("d", line);

                svg
                    .append("g")
                    .selectAll(".data-circle")
                    .data(product.data)
                    .enter()
                    .append("circle")
                    .attr("class", "data-circle")
                    .attr("fill", `hsl(${index * (360 / data.length)}, 100%, 50%)`)
                    .attr("stroke", `hsl(${index * (360 / data.length)}, 100%, 50%)`)
                    .attr("stroke-width", "1.5")
                    .attr("cx", (d, i) => x1((i / (product.data.length - 1)) * 100))
                    .attr("cy", (d) => y(d))
                    .attr("r", "2.5");

                // Add legend
                const legendX = width - 100;
                const legendY = index * 25 + 20;

                svg.append("circle")
                    .attr("class", "legend-circle")
                    .attr("fill", `hsl(${index * (360 / data.length)}, 100%, 50%)`)
                    .attr("cx", legendX)
                    .attr("cy", legendY)
                    .attr("r", "4");

                svg
                    .append("text")
                    .attr("class", "legend-label")
                    .attr("x", legendX + 10)
                    .attr("y", legendY + 4)
                    .attr("fill", "gray")
                    .attr("font-size", "12px")
                    .text(product.product);
            });
        };

        // Initial update
        updateDimensions();

        // Update dimensions on window resize
        window.addEventListener('resize', updateDimensions);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [data]);

    return (
        <div className=" py-12" style={{ width: '100%' }}>
            <svg ref={svgRef}>
                <g className="x-axis1" />
                <g className="x-axis2" />
                <g className="y-axis" />
            </svg>
        </div>
    );
};

export default Graph;
