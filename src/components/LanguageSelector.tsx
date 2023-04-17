import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../consts'
import { type FromLanguage, type Language } from '../types'

type Props =
  | {
      type: 'from'
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | { type: 'to'; value: Language; onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange}>
      {/* Object.entries because SUPPORTED_LANGUAGES is not an Array
      So, take the key and value from this object */}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
