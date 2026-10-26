import { ErrorMessage, Field, Form, Formik, type FieldProps } from 'formik'
import { useId, type ChangeEvent } from 'react'
import { colors, genders, HEIGHT_RANGE, sizes } from '../forms/constants'
import { toggleColor } from '../forms/toggleColor'
import { initialValues, type FormProps, type FormSubmitDataType } from '../forms/types'
import { validationSchema } from '../forms/validation'
import FormField from './FormField'

function FieldError({ name }: { name: keyof FormSubmitDataType }) {
  return <ErrorMessage name={name} component="p" className="form-field__error" />
}

function FormikForm({ onSubmit }: FormProps) {
  const id = useId()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // validate only on submit, errors are cleared manually on change
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ values, handleChange, setFieldError }) => {
        const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          handleChange(event)
          setFieldError(event.target.name, undefined)
        }

        return (
          <Form noValidate>
            <FormField label="Name" htmlFor={`${id}-name`}>
              <Field
                id={`${id}-name`}
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleFieldChange}
                data-testid="nameField"
              />
              <FieldError name="name" />
            </FormField>

            <FormField label="Email" htmlFor={`${id}-email`}>
              <Field
                id={`${id}-email`}
                name="email"
                type="text"
                placeholder="Email (email@email.com)"
                onChange={handleFieldChange}
                data-testid="emailField"
              />
              <FieldError name="email" />
            </FormField>

            <FormField label="Passport ID" htmlFor={`${id}-passportID`}>
              <Field
                id={`${id}-passportID`}
                name="passportID"
                type="text"
                placeholder="Passport ID (MM000000)"
                onChange={handleFieldChange}
                data-testid="passportIDField"
              />
              <FieldError name="passportID" />
            </FormField>

            <FormField label="Gender" htmlFor={`${id}-gender`}>
              <Field
                as="select"
                id={`${id}-gender`}
                name="gender"
                onChange={handleFieldChange}
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
              </Field>
              <FieldError name="gender" />
            </FormField>

            <FormField label="Size" htmlFor={`${id}-size`}>
              <Field as="select" id={`${id}-size`} name="size" onChange={handleFieldChange} data-testid="sizeField">
                <option value="" disabled>
                  Select size
                </option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Field>
              <FieldError name="size" />
            </FormField>

            <FormField label="Color" htmlFor={`${id}-colors`}>
              <Field name="colors">
                {({ field, form }: FieldProps<string[], FormSubmitDataType>) => (
                  <select
                    id={`${id}-colors`}
                    name={field.name}
                    multiple
                    size={4}
                    value={field.value}
                    // selection is handled on mouse down, keyboard changes are ignored
                    onChange={() => {}}
                    data-testid="colorsField"
                  >
                    {colors.map((color) => (
                      <option
                        key={color}
                        value={color}
                        onMouseDown={(event) => {
                          event.preventDefault()
                          form.setFieldValue('colors', toggleColor(field.value, color))
                          form.setFieldError('colors', undefined)
                        }}
                      >
                        {color}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <FieldError name="colors" />
            </FormField>

            <FormField label="Birth Date" htmlFor={`${id}-birthDate`}>
              <Field
                id={`${id}-birthDate`}
                name="birthDate"
                type="date"
                onChange={handleFieldChange}
                data-testid="birthDateField"
              />
              <FieldError name="birthDate" />
            </FormField>

            <FormField label="Height" htmlFor={`${id}-height`}>
              <Field
                id={`${id}-height`}
                name="height"
                type="range"
                min={HEIGHT_RANGE.min}
                max={HEIGHT_RANGE.max}
                onChange={handleFieldChange}
                data-testid="heightField"
              />
              <p className="form-field__value">{values.height}</p>
              <FieldError name="height" />
            </FormField>

            <button type="submit" data-testid="submitButton">
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormikForm
