import React from 'react';


function BankCollection({ item }) {

  console.log({item})


  return (

    <div
        style={{
          backgroundColor: 'purple',
          backgroundImage: `url(${item?.imageUrl})`,
          backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
          backgroundPosition: 'center',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
      </div>

  )
}

export default BankCollection