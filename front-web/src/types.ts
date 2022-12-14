export type Store = {
  id: number,
  name: string
}

export type FilterData = {
  store?: Store;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SaleByGender = {
  gender: Gender,
  sum: number
}

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
