import React, { createContext, useEffect, useState } from 'react';

export const SavedRecipesContext = createContext();

const SavedRecipesContextProvider = (props) => {
  const [ savedRecipes, setSavedRecipes ] = useState([]);

  useEffect(() => {
    console.log(savedRecipes);
  }, [savedRecipes])

  return (
    <SavedRecipesContext.Provider value={{savedRecipes, setSavedRecipes}}>
      {props.children}
    </SavedRecipesContext.Provider>
  )
}

export default SavedRecipesContextProvider;