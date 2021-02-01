import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const {
    servers: { selected }
  } = useSelector(state => state);

  return (
    <Bar
      data-test="barchart-component"
      data={{
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        datasets: [
          {
            label: 'Average Up Time In Hour',
            data: selected[0].barChartData,
            backgroundColor: '#2998ff'
          }
        ]
      }}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 24
              }
            }
          ]
        }
      }}
    />
  );
};

export { BarChart as default };
