# Module 4: React forms

The same form built three ways. All tasks are listed in the `reactForms` array in `AppModule4.tsx`. Each form receives an `onSubmit` prop, and the submitted data is shown below the form.

## Fields

| Field | Element | Rule | `data-testid` |
| --- | --- | --- | --- |
| Name | `input` | required | `nameField` |
| Email | `input type="text"` | required, email format | `emailField` |
| Passport ID | `input` | required, `MM000000` format | `passportIDField` |
| Gender | `select` | required, no default | `genderField` |
| Size | `select` | required, no default | `sizeField` |
| Color | `select multiple` | at least one, no default | `colorsField` |
| Birth Date | `input type="date"` | required, no default | `birthDateField` |
| Height | `input type="range"` (0-250, default 0) | between 50 and 210 | `heightField` |

- Every validation error shows the same message: "Field is empty or invalid".
- Fields are validated on submit, and a field's error is removed as soon as that field changes.
- Colors are selected and unselected with a mouse click only: each click toggles one option, no Ctrl needed, and keyboard changes are ignored.
- Submitted data follows `FormSubmitDataType`.

## Shared code (`forms/`)

- `constants.ts`: `genders`, `sizes`, `colors`, the error message and the regexes.
- `types.ts`: `FormSubmitDataType`, `FormProps` and the initial values.
- `validation.ts`: plain validators for the native form, and a Yup schema for Formik.
- `toggleColor.ts`: helper for the mouse-only multiselect.

## Task 1 - Native React form

`components/NativeForm.tsx` uses native elements, `onChange` / `onSubmit` handlers, and `useState` for both values and errors.

## Task 2 - React Hook Form

`components/ReactHookForm.tsx`:

- Uses `useForm`, and registers each input with its validation rules (`required`, `pattern`, `min`, `max`, `validate`).
- The multiselect uses `Controller`.
- Errors come from `formState.errors`.

## Task 3 - Formik

`components/FormikForm.tsx`:

- Uses the `Formik` component with the `Form`, `Field` and `ErrorMessage` components.
- Validation uses the Yup schema from `forms/validation.ts`.
