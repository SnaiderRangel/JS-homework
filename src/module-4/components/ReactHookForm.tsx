import { useId } from 'react'
import { Controller, useForm, useWatch, type RegisterOptions } from 'react-hook-form'
import {
  colors,
  EMAIL_REGEX,
  ERROR_MESSAGE,
  genders,
  HEIGHT_RANGE,
  PASSPORT_ID_REGEX,
  sizes,
  VALID_HEIGHT,
} from '../forms/constants'
import { toggleColor } from '../forms/toggleColor'
import { initialValues, type FormProps, type FormSubmitDataType } from '../forms/types'
import FormField from './FormField'

type FieldName = keyof FormSubmitDataType

function ReactHookForm({ onSubmit }: FormProps) {
  const id = useId()
  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormSubmitDataType>({
    defaultValues: initialValues,
    // validate only on submit, errors are cleared manually on change
    reValidateMode: 'onSubmit',
  })

  const registerField = <K extends FieldName>(name: K, rules: RegisterOptions<FormSubmitDataType, K>) =>
    register(name, { ...rules, onChange: () => clearErrors(name) })

  const height = useWatch({ control, name: 'height' })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField label="Name" htmlFor={`${id}-name`} error={errors.name?.message}>
        <input
          id={`${id}-name`}
          type="text"
          placeholder="Name"
          data-testid="nameField"
          {...registerField('name', {
            required: ERROR_MESSAGE,
            validate: (value) => value.trim() !== '' || ERROR_MESSAGE,
          })}
        />
      </FormField>

      <FormField label="Email" htmlFor={`${id}-email`} error={errors.email?.message}>
        <input
          id={`${id}-email`}
          type="text"
          placeholder="Email (email@email.com)"
          data-testid="emailField"
          {...registerField('email', {
            required: ERROR_MESSAGE,
            validate: (value) => EMAIL_REGEX.test(value.trim()) || ERROR_MESSAGE,
          })}
        />
      </FormField>

      <FormField label="Passport ID" htmlFor={`${id}-passportID`} error={errors.passportID?.message}>
        <input
          id={`${id}-passportID`}
          type="text"
          placeholder="Passport ID (MM000000)"
          data-testid="passportIDField"
          {...registerField('passportID', {
            required: ERROR_MESSAGE,
            pattern: { value: PASSPORT_ID_REGEX, message: ERROR_MESSAGE },
          })}
        />
      </FormField>

      <FormField label="Gender" htmlFor={`${id}-gender`} error={errors.gender?.message}>
        <select id={`${id}-gender`} data-testid="genderField" {...registerField('gender', { required: ERROR_MESSAGE })}>
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

      <FormField label="Size" htmlFor={`${id}-size`} error={errors.size?.message}>
        <select id={`${id}-size`} data-testid="sizeField" {...registerField('size', { required: ERROR_MESSAGE })}>
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

      <FormField label="Color" htmlFor={`${id}-colors`} error={errors.colors?.message}>
        <Controller
          name="colors"
          control={control}
          rules={{ validate: (value) => value.length > 0 || ERROR_MESSAGE }}
          render={({ field }) => (
            <select
              id={`${id}-colors`}
              ref={field.ref}
              name={field.name}
              multiple
              size={4}
              value={field.value}
              // selection is handled on mouse down, keyboard changes are ignored
              onChange={() => {}}
              onBlur={field.onBlur}
              data-testid="colorsField"
            >
              {colors.map((color) => (
                <option
                  key={color}
                  value={color}
                  onMouseDown={(event) => {
                    event.preventDefault()
                    field.onChange(toggleColor(field.value, color))
                    clearErrors('colors')
                  }}
                >
                  {color}
                </option>
              ))}
            </select>
          )}
        />
      </FormField>

      <FormField label="Birth Date" htmlFor={`${id}-birthDate`} error={errors.birthDate?.message}>
        <input
          id={`${id}-birthDate`}
          type="date"
          data-testid="birthDateField"
          {...registerField('birthDate', {
            required: ERROR_MESSAGE,
            validate: (value) => !Number.isNaN(new Date(value).getTime()) || ERROR_MESSAGE,
          })}
        />
      </FormField>

      <FormField label="Height" htmlFor={`${id}-height`} error={errors.height?.message}>
        <input
          id={`${id}-height`}
          type="range"
          min={HEIGHT_RANGE.min}
          max={HEIGHT_RANGE.max}
          // without it the browser starts the range in the middle (125)
          defaultValue={initialValues.height}
          data-testid="heightField"
          {...registerField('height', {
            valueAsNumber: true,
            min: { value: VALID_HEIGHT.min, message: ERROR_MESSAGE },
            max: { value: VALID_HEIGHT.max, message: ERROR_MESSAGE },
          })}
        />
        <p className="form-field__value">{height}</p>
      </FormField>

      <button type="submit" data-testid="submitButton">
        Submit
      </button>
    </form>
  )
}

export default ReactHookForm
