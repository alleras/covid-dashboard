
import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

function TimevsCasesChart (props) {
    let svgRef = useRef(null);
    let xAxisRef = useRef(null);
    let yAxisRef = useRef(null);
    let casesPathRef = useRef(null);
    let movingAverageRef = useRef(null);
    let gridLinesRef = useRef(null);

    let animDuration = 300;

    // We define the scales
    // X will have a time scale
    var x = d3.scaleTime()
      .range([ 0, props.width ]);

    // Y will have a linear scale.
    var y = d3.scaleLinear()
      .range([ props.height, 0 ]);

    // Add gridlines
    var makeYGridlines = () => d3.axisLeft(y); 

    var drawChart = () => {
        // append the svg object to the body of the page
        var svg = d3.select(svgRef.current)
            .attr("width", props.width + props.margin.left + props.margin.right)
            .attr("height", props.height + props.margin.top + props.margin.bottom)
            .attr("id", "coronavirus-chart")
            .append("g")
            .attr("transform",
                "translate(" + props.margin.left + "," + props.margin.top + ")");

        xAxisRef.current = svg.append("g")
            .attr("class", "axis x-axis")
            .node();

        yAxisRef.current = svg.append("g")
            .attr("class", "axis y-axis")
            .node();

        casesPathRef.current = svg.append('path')
            .attr("fill", "none")
            .attr("stroke", "#A14EBF")
            .attr("stroke-width", 4)
            .node();
        
        movingAverageRef.current = svg.append("path")
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-dasharray", 8)
            .node();

        gridLinesRef.current = svg.append("g")
            .attr("class","grid")
            .attr("stroke-dasharray", "2")
            .node();
    }

    var update = (data) => () => {
                
        // x Axis
        x.domain(d3.extent(props.data, function(d) { return d.date; }));

        d3.select(xAxisRef.current)
            .attr("transform", "translate(0," + props.height + ")")
            .transition()
            .duration(animDuration)
            .call(d3.axisBottom(x).tickSizeOuter(0));
        
        // y Axis
        y.domain([0, d3.max(data, (d) => +d.cases )]);

        d3.select(yAxisRef.current)
            .transition()
            .duration(animDuration)
            .call(d3.axisLeft(y).tickSizeOuter(0));        

        // Cases path
        d3.select(casesPathRef.current)
            .datum(data)
            .transition()
            .duration(animDuration)
            .attr("d", d3.line()
                .x(function(d) { return x(d.date) })
                .y(function(d) { return y(d.cases) })
            .curve(d3.curveBasis)
        )

        if(data.filter((el) => el.average).length > 0){
            // 7-Day Moving Average
            d3.select(movingAverageRef.current)
                .datum(data)
                .transition()
                .duration(200)
                .attr("d", d3.line()
                    .x(function(d) {return x(d.date) })
                    .y(function (d) {return y(d.average)})
                .curve(d3.curveBasis)
            )
        }

        // Gridlines
        d3.select(gridLinesRef.current)
            .transition()
            .duration(200)
            .call(makeYGridlines()
                .tickSize(-props.width)
                .tickFormat("")
            )
            .call(g => g.select(".domain").remove());

        return true;
    }

    useEffect(() => {
        drawChart();
    }, []);

    useEffect(() => {
        update(props.data)();
    });

    return (
        <svg ref={svgRef}>
        </svg>
    )
}

TimevsCasesChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            date: PropTypes.instanceOf(Date),
            cases: PropTypes.number,
            average: PropTypes.number,
        }
    )),
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.shape({
        left: PropTypes.number,
        right: PropTypes.number,
        top: PropTypes.number,
        bottom: PropTypes.number,
    })
    
};

export default TimevsCasesChart;