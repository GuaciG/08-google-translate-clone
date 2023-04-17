import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './consts'

// do not => export type language = 'en' | 'es | 'de' | 'auto'
// To recover the types of SUPPORTED LANGUAGES's keys
export type Language = keyof typeof SUPPORTED_LANGUAGES
// do not => export type AutoLanguage = 'auto'
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  // concatenamos diferentes tipos para cada action
  // ya que serán tipos diferentes y esperarán payload diferentes

  | { type: 'SET_FROM_LANGUAGE'; payload: FromLanguage }
  | { type: 'INTERCHANGE_LANGUAGES' } // no need payload
  | { type: 'SET_TO_LANGUAGE'; payload: Language }
  | { type: 'SET_FROM_TEXT'; payload: string }
  | { type: 'SET_RESULT'; payload: string }
