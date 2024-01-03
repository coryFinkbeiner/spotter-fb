import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';
import getSearchResults from '../data/getSearchResults';

function Search() {
  const { accessToken } = useData();
  const searchResults = getSearchResults({
    accessToken,
    query: 'radiohead',
    type: 'album',
  })

  console.log(searchResults)
  return (
    <div>Search</div>
  )
}

export default Search