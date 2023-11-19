import { FieldValues, useForm as useHookForm, UseFormProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useForm = <T extends FieldValues>(
  validationSchema: z.Schema<T>,
  formProps?: UseFormProps<T>
) => {
  const { register, handleSubmit, setValue, formState, ...helpers } = useHookForm<T>({
    ...formProps,
    resolver: zodResolver(validationSchema),
  })

  const formFieldRequiredProps = {
    register,
    setValue,
    errors: formState.errors,
  }

  return {
    handleSubmit,
    formState,
    helpers,
    formFieldRequiredProps,
  }
}
