import { useReducer } from 'react'
import {
  type Language,
  type Action,
  type State,
  type FromLanguage
} from '../types'
import { AUTO_LANGUAGE } from '../consts'

// We create a custom hooks for useReducer
// 1. Create an initialState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer(state: State, action: Action) {
  // we need to know the type action
  // and payload, but in this case, must be pass when needed
  const { type /* , payload */ } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    // logic of the state inside of reducer
    // this way we avoit it on the components
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    const loading = state.fromText !== ''

    return {
      ...state,
      loading,
      result: '',
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  // payload is extra information given for the action
  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state
    const loading = state.fromText !== ''

    return {
      ...state,
      fromLanguage: action.payload, // use action.payload only where is typed
      result: '',
      loading
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state
    const loading = state.fromText !== ''

    return {
      ...state,
      toLanguage: action.payload, // use action.payload only where is typed
      result: '',
      loading
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''

    return {
      ...state,
      loading,
      fromText: action.payload, // use action.payload only where is typed
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload // use action.payload only where is typed
    }
  }
  // if there is not type, return the same state
  return state
}

export function useStore() {
  // 3. Use the useReducer hook (give back to us: state and dispatch)
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  // do not use dispatchs in components, keep all of them here
  // and export a contract which do that
  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
