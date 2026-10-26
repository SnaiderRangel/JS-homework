import * as yup from 'yup'
import { EMAIL_REGEX, ERROR_MESSAGE, PASSPORT_ID_REGEX, VALID_HEIGHT } from './constants'
import type { FormErrors, FormSubmitDataType } from './types'

function isValidDate(value: string) {
  return value !== '' && !Number.isNaN(new Date(value).getTime())
}

// Plain validators, used by the native form
const validators: { [K in keyof FormSubmitDataType]: (value: FormSubmitDataType[K]) => boolean } = {
  name: (value) => value.trim() !== '',
  email: (value) => EMAIL_REGEX.test(value.trim()),
  passportID: (value) => PASSPORT_ID_REGEX.test(value),
  gender: (value) => value !== '',
  size: (value) => value !== '',
  colors: (value) => value.length > 0,
  birthDate: isValidDate,
  height: (value) => value >= VALID_HEIGHT.min && value <= VALID_HEIGHT.max,
}

export function validateForm(values: FormSubmitDataType): FormErrors {
  const errors: FormErrors = {}

  for (const field of Object.keys(validators) as (keyof FormSubmitDataType)[]) {
    const isValid = (validators[field] as (value: unknown) => boolean)(values[field])
    if (!isValid) {
      errors[field] = ERROR_MESSAGE
    }
  }

  return errors
}

// Yup schema, used by the Formik form
export const validationSchema = yup.object({
  name: yup.string().trim().required(ERROR_MESSAGE),
  email: yup.string().trim().required(ERROR_MESSAGE).matches(EMAIL_REGEX, ERROR_MESSAGE),
  passportID: yup.string().required(ERROR_MESSAGE).matches(PASSPORT_ID_REGEX, ERROR_MESSAGE),
  gender: yup.string().required(ERROR_MESSAGE),
  size: yup.string().required(ERROR_MESSAGE),
  colors: yup.array().of(yup.string()).min(1, ERROR_MESSAGE),
  birthDate: yup.string().required(ERROR_MESSAGE).test('date', ERROR_MESSAGE, (value) => isValidDate(value ?? '')),
  height: yup.number().min(VALID_HEIGHT.min, ERROR_MESSAGE).max(VALID_HEIGHT.max, ERROR_MESSAGE),
})
