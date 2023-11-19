import type { FieldError, FieldErrors, FieldValues } from 'react-hook-form'

/**
 * generateFormFieldErrorMessage
 * =============
 * generateFormFieldErrorMessage is a utility function that works in tandem with our form components to retrieve their errors.
 * @example
 * generateFormFieldErrorMessage('price', formFieldErrors) => "Price is required" || undefined  (return value depends on error existence in formFieldErrors from react-hook-form)
 * generateFormFieldErrorMessage('user.name', formFieldErrors) => "User name is required" || undefined  (return value depends on error existence in formFieldErrors from react-hook-form)
 * generateFormFieldErrorMessage('user.mother.name', formFieldErrors) => "Mother name is required" || undefined  (return value depends on error existence in formFieldErrors from react-hook-form)
 */
export function generateFormFieldErrorMessage<T extends FieldValues>(
  name: string,
  errors: FieldErrors<T>
): string | undefined {
  const fieldNames = name.split('.')
  let nestedError = errors

  fieldNames.forEach((fieldName) => {
    nestedError = nestedError && (nestedError[fieldName] as FieldErrors<T>)
  })

  return (nestedError as unknown as FieldError)?.message
}
