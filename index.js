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