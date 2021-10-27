import Chart from 'react-apexcharts'
const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Patricia', 'Anderson', 'Willian', 'Ronilson']
        },
        series: [
            {
                name: "% Sucesso",
                data: [50.0, 50.0, 50.0, 50, 50.0]                   
            }
        ]
    };
    return (
      <Chart 
            options ={{ ...options, xaxis: mockData.labels}}
            series = {mockData.series}
            type= "bar"
            height= "240"
      />
     
    );
      
  }

  export default BarChart;