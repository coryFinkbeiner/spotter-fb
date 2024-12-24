import React from 'react'
import Seed from './Seed'
import { useData } from '../DataProvider';

function Seeds() {
  const { seeds, setSeeds } = useData()


  return (
    <div
      style={{
        backgroundColor: 'orange',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        height: '100%'
      }}
    >
      {seeds?.map((seed, index) => {

        return <Seed seed={seed} index={index} key={index} />
      })}

    </div>
  )
}

export default Seeds