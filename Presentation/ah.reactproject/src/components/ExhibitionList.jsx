import React from 'react'
import SearchBar from './SearchBar'

const ExhibitionList = () => {
  return (
    <>
    <SearchBar/>
      <div className="card-list">
        {/* {recipes.map(
          (recipe) =>
            !recipe.isDeleted && <Recipe recipe={recipe} key={recipe.id} />
        )} */}
      </div>
    </>
  )
}

export default ExhibitionList