import type { MouseEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'hooks/useForm'
import { z } from 'zod'

import { buildQueryString } from '~utils/buildQueryString'

const validationSchema = z.object({
  name: z.string().optional(),
  producer: z.string().optional(),
  dimensions: z.array(z.string()).optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  colors: z.array(z.string()).optional(),
})
export type FiltersFormSchema = z.infer<typeof validationSchema>

export const useFiltersForm = () => {
  const router = useRouter()
  const params = useSearchParams()

  const form = useForm(validationSchema, {
    defaultValues: {
      name: params.get('name') || '',
      producer: params.get('producer') || '',
      minPrice: params.get('minPrice') || '0',
      maxPrice: params.get('maxPrice') || '10000',
      dimensions: params.getAll('dimensions') || [],
      colors: params.getAll('colors') || [],
    },
  })

  const submitForm = async (data: FiltersFormSchema) => {
    const queryString = buildQueryString(data)

    router.push(`/?${queryString}`)
  }

  const handleChangeColor = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const color = e.currentTarget.value || ''
    const formColors = form.helpers.getValues('colors') || []

    if (formColors.includes(color)) {
      form.formFieldRequiredProps.setValue(
        'colors',
        formColors.filter((c) => c !== color)
      )
    } else {
      form.formFieldRequiredProps.setValue('colors', [...formColors, color])
    }
  }

  const handleToggleChip = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const chip = e.currentTarget.textContent || ''
    const chips = form.helpers.getValues('dimensions') || []

    if (chips.includes(chip)) {
      form.formFieldRequiredProps.setValue(
        'dimensions',
        chips.filter((c) => c !== chip)
      )
    } else {
      form.formFieldRequiredProps.setValue('dimensions', [...chips, chip])
    }
  }

  return {
    form,
    submitForm,
    handleChangeColor,
    handleToggleChip,
  }
}
