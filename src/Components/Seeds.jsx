import React from 'react'
import Seed from './Seed'
import { useData } from '../DataProvider';

function Seeds() {
  const { seeds } = useData()

  // Create array of 5 slots, filling with seeds or placeholders
  const seedSlots = Array.from({ length: 5 }, (_, index) => {
    const seed = seeds[index];
    return seed ? { ...seed, slotIndex: index } : { slotIndex: index, isPlaceholder: true };
  });

  return (
    <div className="seeds">
      {seedSlots.map((item, index) => {
        if (item.isPlaceholder) {
          return (
            <div key={`placeholder-${index}`} className="seed">
              <div className="seed-placeholder">•</div>
            </div>
          );
        }

        let imageUrl = ''
        let name = ''
        let type = ''

        if (item.type === 'artist') {
          imageUrl = item?.images[0]?.url
          name = item.name
          type = 'artist'
        }
        if (item.type === 'track') {
          imageUrl = item?.album.images[0]?.url
          name = item.name
          type = 'track'
        }

        return <Seed
            seed={item}
            index={item.slotIndex}
            key={item.slotIndex}
            name={name}
            imageUrl={imageUrl}
            type={type}
          />
      })}
    </div>
  )
}

export default Seeds
