import { useEffect } from 'react';
import { getAllVideoGames } from '../../services';
import { adapterVideoGames } from '../../Adapters';

export default function Prueba() {
  // useEffect(() => {
  //   getAllVideoGames(1, 5)
  //     .then((res) => adapterVideoGames(res))
  //     .then((res) => console.log(res));
  // }, []);
  return <div>Prueba</div>;
}
