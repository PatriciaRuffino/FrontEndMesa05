import Chart from 'react-apexcharts'
const DonutChart = () => {
    const mockData = {
        series: [1, 1, 1, 1],
        labels: ['Patricia', 'Anderson', 'Willian', 'Ronilson']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
      <Chart 
            options ={{ ...options, labels: mockData.labels}}
            series = {mockData.series}
            type= "donut"
            height= "240"
      />
     
    );
      
  }

  export default DonutChart;