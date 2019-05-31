import React from 'react';
import ChartistGraph from 'react-chartist';

class Chart extends React.Component {
    render(){
        var biPolarBarChartData = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, 7, 5, 4]
            ]
          };
          var biPolarBarChartOptions = {
            high: 10,
            low: -10,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
          }
          return(
            <ChartistGraph data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
          )
    }
}

export default Chart