import { useState, type ComponentType } from 'react'
import FormikForm from './components/FormikForm'
import NativeForm from './components/NativeForm'
import ReactHookForm from './components/ReactHookForm'
import type { FormProps, FormSubmitDataType } from './forms/types'
import './styles.css'

interface FormTask {
  id: string
  title: string
  Component: ComponentType<FormProps>
}

// Each form task is rendered in its own section
const reactForms: FormTask[] = [
  { id: 'native', title: 'Task 1. Native React form', Component: NativeForm },
  { id: 'react-hook-form', title: 'Task 2. React Hook Form', Component: ReactHookForm },
  { id: 'formik', title: 'Task 3. Formik', Component: FormikForm },
]

function FormTaskSection({ title, Component }: Omit<FormTask, 'id'>) {
  const [submittedData, setSubmittedData] = useState<FormSubmitDataType | null>(null)

  return (
    <section className="task form-task">
      <h2 className="task__title">{title}</h2>
      <div className="form-task__body">
        <Component onSubmit={setSubmittedData} />
      </div>
      {submittedData && (
        <div className="form-task__result">
          <p>Submitted data:</p>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </section>
  )
}

function AppModule4() {
  return (
    <div className="module-4">
      {reactForms.map(({ id, title, Component }) => (
        <FormTaskSection key={id} title={title} Component={Component} />
      ))}
    </div>
  )
}

export default AppModule4
