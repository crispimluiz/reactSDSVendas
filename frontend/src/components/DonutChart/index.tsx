import React from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'utils/request';
import { SaleSum } from 'types/sales';

type ChartData = {
  labels: string[];
  series: number[];
};
//Gráficos de barras
const DonutChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-sellers`).then((response) => {
      const data = response.data as SaleSum[];
      const myLabels = data.map((x) => x.sallerName);
      const mySeries = data.map((x) => x.sum);
      setChartData({ labels: myLabels, series: mySeries });
    });
  }, []);

  /*  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
  };
*/
  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
