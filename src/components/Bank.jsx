import React from 'react';
import { useData } from '../DataProvider';
import BankCollection from './child/BankCollection';

export default function Bank() {
  const { bank, setBank } = useData();


  return (
    <div
    style={{
      display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }}
    >
      <BankCollection
        item={bank.one}
      />
      <BankCollection
        item={bank.two}
      />
      <BankCollection
        item={bank.three}
      />
      <BankCollection
        item={bank.four}
      />


    </div>
  )
}


// just the collection image