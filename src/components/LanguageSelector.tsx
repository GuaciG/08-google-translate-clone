import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../consts'
import { type FunctionComponent } from 'react'

interface Props {
  onChange: (language: string) => void
}

export const LanguageSelector: FunctionComponent<Props> = ({ onChange }) => {
  return (
    <Form.Select aria-label='Selecciona el idioma'>
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
