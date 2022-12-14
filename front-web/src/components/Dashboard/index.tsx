import React, { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FilterData, PieChartConfig, SaleByGender } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { buildPieChartConfig, buildSalesByGender, sumSalesByGender } from './helpers';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

function Dashboard({ filterData }: Props) {

  const [totalSum, setTotalSum] = useState(0);
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>({ labels: [], series: [] });

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SaleByGender[]>(`/sales/by-gender`, { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGender(response.data);
        const newTotalSum = sumSalesByGender(response.data);

        setSalesByStore(newSalesByGender);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales');
      });
  }, [params]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className='dashboard-container base-card'>
      <div className='dashboard-container-totalizer'>
        <h3>{formatPrice(totalSum)}</h3>
        <p>Total de vendas</p>
      </div>
      <div className='dashboard-container-graphic'>
        <ReactApexChart
          options={buildPieChartConfig(salesByStore?.labels)}
          series={salesByStore?.series}
          type='donut'
          height={350}
        />
      </div>
    </div>
  );
}

export default Dashboard;
