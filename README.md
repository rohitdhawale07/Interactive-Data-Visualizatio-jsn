# Interactive-Data-Visualization-js
## Hosted Link:- https://rohitdhawale07.github.io/Interactive-Data-Visualization-js/
This is the code of creating charts using charts js and making charts interactive.
## HTML Code:-
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Visualization Dashboard</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="dashboard">
        <div class="chart-container">
            <canvas id="barChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="pieChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="lineChart"></canvas>
        </div>
    </div>    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    

    <script src="./index.js"></script>
</body>
</html>
```
## CSS  code:-
```
/* Add your custom CSS styles for the dashboard here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.dashboard {
    display: flex;
    justify-content: space-around;
    margin: 20px;
}

.chart-container {
    width: 30%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}
```
This function takes two arguments: chartId and chartData. It creates a new Chart.js chart using 
the provided data and options. Here's a breakdown of the important parts:

const ctx = document.getElementById(chartId).getContext('2d');: This line gets the 2D rendering 
context of the HTML canvas element with the specified chartId. This canvas will be used to render the chart.

const chart = new Chart(ctx, { ... });: This creates a new Chart.js chart instance using the canvas context, chart type ('bar' in this case), chart data, and options.

plugins and tooltip: These options enable tooltips for the chart, allowing you to see additional information when you hover over data points.

onClick: This defines a click event handler for the chart. When you click on a data point, it logs information about the clicked dataset and data index.

animateChart: This is an inner function responsible for animating the chart using Anime.js. It targets the data points of the chart's first dataset and updates the chart on each animation frame.

Finally, the createAnimatedChart function is called three times to create and animate three different charts: a bar chart, a pie chart, and a line chart.

If you want to display these charts on an HTML page, you would need to include the necessary Chart.js and Anime.js libraries and create HTML canvas elements with the specified chartIds where these charts will be rendered.

Please note that you can customize the chart types, data, animations, and event handlers according to your requirements.

##  JAVASCRIPT code:-
```
const barChartData = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [{
      label: 'Data1',
      data: [10, 20, 15, 30, 25],
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
  }]
};

const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [{
      data: [12, 19, 3, 5, 2],
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
  }]
};

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
      label: 'Data2',
      data: [30, 40, 35, 45, 50],
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false
  }]
};

function createAnimatedChart(chartId, chartData) {
  const ctx = document.getElementById(chartId).getContext('2d');
  const chart = new Chart(ctx, {
      type: 'bar', 
      data: chartData,
      options: {
          animation: {
              duration: 1000, 
              easing: 'easeInOutQuart' 
          },
          plugins: {
              tooltip: {
                  enabled: true, 
                  mode: 'index', 
                  intersect: false,
              },
          },
          onClick: (event, elements) => {
              if (elements && elements.length > 0) {
                 const clickedElement = elements[0];
                  const datasetIndex = clickedElement.datasetIndex;
                  const dataIndex = clickedElement.index;
                  console.log(`Clicked on dataset ${datasetIndex}, data index ${dataIndex}`);
              }
          },
      }
  });

  const animateChart = () => {
      anime({
          targets: chart.data.datasets[0].data,
          easing: 'linear',
          delay: anime.stagger(100), 
          duration: 500, 
          round: 1, 
          update: function () {
              chart.update();
          }
      });
  }

  animateChart();
}

createAnimatedChart('barChart', barChartData);
createAnimatedChart('pieChart', pieChartData);
createAnimatedChart('lineChart', lineChartData);
```
