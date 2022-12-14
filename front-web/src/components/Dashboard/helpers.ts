import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors:['#FF7A00', '#7234F5', '#FF0000'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 0,
      labels: {
        colors: ['#b4bed2']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '18px',
      itemMargin: {
        vertical: 5
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return '';
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '24px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};
