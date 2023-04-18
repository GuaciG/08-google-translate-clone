import { Configuration, OpenAIApi } from 'openai'
import { SUPPORTED_LANGUAGES } from '../consts'
import { type FromLanguage, type Language } from '../types'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })

const openai = new OpenAIApi(configuration)

export async function translate({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  /*  const messages = [
    {
      role: 'system',
      content: 'You are a AI that translates text. You receive a message in one language and'
    }
  ] */
}
