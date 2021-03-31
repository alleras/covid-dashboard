import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';


function TimevsCasesChart (props) {
    let svgRef = useRef();
    let wrapperRef = useRef();
    let [changeFlag, change] = useState(false);

    const strokeWidth = 2.2;
    const animDuration = 300;
    const style = props.style;

    useEffect(() => {
        const resizeListener = () => {
          // change width from the state object)
          change(changeFlag >= 100 ? 0 : changeFlag++)
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
    
        // clean up function
        return () => {
          // remove resize listener
          window.removeEventListener('resize', resizeListener);
        }
    }, []);

    useEffect(() => {
        let node = d3.select(wrapperRef.current).node();
        let width = parseInt(window.getComputedStyle(node).width) - props.margin.left - props.margin.right;
        let height = parseInt(window.getComputedStyle(node).height) - props.margin.top - props.margin.bottom;
        // SVG Canvas
        const svg = d3.select(svgRef.current);

        const canvas = svg.select('.group-container')
            .attr("transform",
                "translate(" + props.margin.left + "," + props.margin.top + ")");
        
        // We define the scales
        // X will have a time scale
        var xScale = d3.scaleTime().range([ 0, width ]);
        // Y will have a linear scale.
        var yScale = d3.scaleLinear().range([ height, 0 ]);
        // Add gridlines        
        var makeYGridlines = () => d3.axisLeft(yScale); 
        
        xScale.domain(d3.extent(props.data, (d) => d.date ));
        yScale.domain([0, d3.max(props.data, (d) => +d.cases )]);

        // x Axis
        const xAxis = d3.axisBottom(xScale).tickSizeOuter(0).tickFormat(d3.timeFormat("%b"));
        canvas.select('.x-axis')
            .attr("transform", "translate(0," + height + ")")
            .transition()
            .duration(animDuration)
            .call(xAxis);
        
        // y Axis
        const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);
        canvas.select('.y-axis')
            .transition()
            .duration(animDuration)
            .call(yAxis);        
        

        // Cases path
        canvas
            .select('.dataPath')
            .datum(props.data)
            .transition()
            .duration(animDuration)
            .attr("d", d3.line()
                .x(function(d) { return xScale(d.date) })
                .y(function(d) { return yScale(d.cases) })
                .curve(d3.curveBasis)
            )
            .attr("fill", "none")
            .attr("stroke", "#A14EBF")
            .attr("stroke-width", strokeWidth);

        // 7-Day Moving average path
        if(props.data.filter((el) => el.average).length > 0){
            // 7-Day Moving Average
            canvas
                .select('.sevenDayPath')
                .datum(props.data)
                .transition()
                .duration(animDuration)
                .attr("d", d3.line()
                    .x(function(d) {return xScale(d.date) })
                    .y(function (d) {return yScale(d.average)})
                .curve(d3.curveBasis)
            )
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-dasharray", 4);
        }
        // Gridlines
        canvas
            .select('.gridLinesPath')
            .transition()
            .duration(animDuration)
            .call(makeYGridlines()
                .tickSize(-width)
                .tickFormat("")
            )
            .call(g => g.select(".domain").remove())
            .attr("stroke-dasharray", "2");

    }, [props, changeFlag]);

    return (
        <div className={style.graph} ref={wrapperRef} style={{width: '100%'}}>
            <svg ref={svgRef} style={{width: '100%', height: '100%'}}>
                <g className="group-container">
                    <g className={`${style.axis} x-axis`} />
                    <g className={`${style.axis} y-axis`} />
                    <path className={`${style.data} dataPath`}></path>
                    <path className='sevenDayPath'></path>
                    <g className={`${style.grid} gridLinesPath`}></g>
                </g>
            </svg>
        </div>
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