import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Climate',
    dataIndex: 'climate',
    key: 'climate',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    render: (population: string) =>
      parseInt(population)
        ? parseInt(population).toLocaleString('es-AR')
        : population,
  },
  {
    title: 'Residents count',
    dataIndex: 'residents',
    key: 'residents_count',
    render: (residents: string[]) => residents.length,
  },
];

const Planets = () => {
  const { data, error } = useSWR('/planets', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }
//cambio
  return (
    <div>
<<<<<<< HEAD
      <Table columns={columns} data={data.results} /* :D */ />
=======
      <Table columns={columns} data={data.results} /* :D f */ />
>>>>>>> 81a6ea6fb1e6cf010b4fcc06c41ff48052428afe
    </div>
  );
};

export default Planets;
