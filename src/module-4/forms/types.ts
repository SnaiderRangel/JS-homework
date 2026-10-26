export interface FormSubmitDataType {
  name: string
  email: string
  passportID: string
  gender: string
  size: string
  colors: string[]
  birthDate: string
  height: number
}

export interface FormProps {
  onSubmit: (data: FormSubmitDataType) => void
}

export type FormErrors = Partial<Record<keyof FormSubmitDataType, string>>

export const initialValues: FormSubmitDataType = {
  name: '',
  email: '',
  passportID: '',
  gender: '',
  size: '',
  colors: [],
  birthDate: '',
  height: 0,
}
