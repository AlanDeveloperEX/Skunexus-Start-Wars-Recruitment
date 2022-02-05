import React, {useEffect, useState} from 'react'
import Data from '../../services/api'
import Grid from '../Grid';
import './Planets.css';

function Planets() {

  const [planetsList, setPlanetsList] = useState([])

  const data = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    values: planetsList?.items?.results,
    actions: [
      {
        label: 'Go to Films',
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`)}
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`)}
      }
    ]
  }

  useEffect(() => {
    const loadData = async () => {
      // ALL DATA 
      let list = await Data.getPlanetsList()
      setPlanetsList(list[0])
    }

    loadData()
  }, [])

  return (
    <div className='App'>
      {
        data.values && data.values.length > 0 ? <Grid data={data} /> : 'Loading...'
      }
    </div>
  );
}

export default Planets;
