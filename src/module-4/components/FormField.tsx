import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  htmlFor: string
  error?: ReactNode
  children: ReactNode
}

// Label + control + error message, shared by the three forms
function FormField({ label, htmlFor, error, children }: FormFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error && <p className="form-field__error">{error}</p>}
    </div>
  )
}

export default FormField
