import React from "react";
import { useContext, createContext, useState, useEffect, useReducer } from "react";
import axios from 'axios'
import { reducer } from "./global.context";

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

export const initialState = {
  dentistas: [],
  favoritos: initialFavState,
  theme: 'light'
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)  
  // const [favoritos, setFavoritos] = useState(initialFavState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'DENTISTAS', payload: res.data}))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favoritos))
  }, [state.favoritos])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)