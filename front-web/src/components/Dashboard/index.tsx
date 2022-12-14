import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

function Dashboard() {
  return (
    <div className='dashboard-container base-card'>
      <div className='dashboard-container-totalizer'>
        <h3>R$ 746.484,00</h3>
        <p>Total de vendas</p>
      </div>
      <div className='dashboard-container-graphic'>
        <ReactApexChart
          options={buildPieChartConfig(['Feminino', 'Masculino', 'Outro'], '??')}
          series={[150.23, 150.15, 69.90]}
          type='donut'
          height={350}
        />
      </div>
    </div>
  );
}

export default Dashboard;
