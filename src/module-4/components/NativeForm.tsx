import { useId, useState, type ChangeEvent, type FormEvent, type MouseEvent } from 'react'
import { colors, genders, HEIGHT_RANGE, sizes } from '../forms/constants'
import { toggleColor } from '../forms/toggleColor'
import { initialValues, type FormErrors, type FormProps, type FormSubmitDataType } from '../forms/types'
import { validateForm } from '../forms/validation'
import FormField from './FormField'

type FieldName = keyof FormSubmitDataType

function NativeForm({ onSubmit }: FormProps) {
  const id = useId()
  const [values, setValues] = useState<FormSubmitDataType>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})

  const updateField = <K extends FieldName>(field: K, value: FormSubmitDataType[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    // remove the error as soon as the field changes
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target
    updateField(name as FieldName, type === 'range' ? Number(value) : value)
  }

  // colors can only be selected/unselected with the mouse, one click per option
  const handleColorMouseDown = (event: MouseEvent<HTMLOptionElement>, color: string) => {
    event.preventDefault()
    updateField('colors', toggleColor(values.colors, color))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateForm(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormField label="Name" htmlFor={`${id}-name`} error={errors.name}>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          data-testid="nameField"
        />
      </FormField>

      <FormField label="Email" htmlFor={`${id}-email`} error={errors.email}>
        <input
          id={`${id}-email`}
          name="email"
          type="text"
          placeholder="Email (email@email.com)"
          value={values.email}
          onChange={handleChange}
          data-testid="emailField"
        />
      </FormField>

      <FormField label="Passport ID" htmlFor={`${id}-passportID`} error={errors.passportID}>
        <input
          id={`${id}-passportID`}
          name="passportID"
          type="text"
          placeholder="Passport ID (MM000000)"
          value={values.passportID}
          onChange={handleChange}
          data-testid="passportIDField"
        />
      </FormField>

      <FormField label="Gender" htmlFor={`${id}-gender`} error={errors.gender}>
        <select
          id={`${id}-gender`}
          name="gender"
          value={values.gender}
          onChange={handleChange}
          data-testid="genderField"
        >
          <option value="" disabled>
            Select gender
          </option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Size" htmlFor={`${id}-size`} error={errors.size}>
        <select
          id={`${id}-size`}
          name="size"
          value={values.size}
          onChange={handleChange}
          data-testid="sizeField"
        >
          <option value="" disabled>
            Select size
          </option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Color" htmlFor={`${id}-colors`} error={errors.colors}>
        <select
          id={`${id}-colors`}
          name="colors"
          multiple
          size={4}
          value={values.colors}
          // selection is handled on mouse down, keyboard changes are ignored
          onChange={() => {}}
          data-testid="colorsField"
        >
          {colors.map((color) => (
            <option key={color} value={color} onMouseDown={(event) => handleColorMouseDown(event, color)}>
              {color}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Birth Date" htmlFor={`${id}-birthDate`} error={errors.birthDate}>
        <input
          id={`${id}-birthDate`}
          name="birthDate"
          type="date"
          value={values.birthDate}
          onChange={handleChange}
          data-testid="birthDateField"
        />
      </FormField>

      <FormField label="Height" htmlFor={`${id}-height`} error={errors.height}>
        <input
          id={`${id}-height`}
          name="height"
          type="range"
          min={HEIGHT_RANGE.min}
          max={HEIGHT_RANGE.max}
          value={values.height}
          onChange={handleChange}
          data-testid="heightField"
        />
        <p className="form-field__value">{values.height}</p>
      </FormField>

      <button type="submit" data-testid="submitButton">
        Submit
      </button>
    </form>
  )
}

export default NativeForm
