'use client'

import type { Color } from '@prisma/client'
import { TranslationKeys } from 'locales/types'

import { Chip } from '~ui/form/Chip'
import { ColorSelector } from '~ui/form/ColorSelector'
import { FormInput } from '~ui/form/FormInput'
import { Button } from '~ui/shadcn/ui/button'

import { type FiltersFormSchema, useFiltersForm } from './useFiltersForm'

type FiltersFormProps = {
  translations: Omit<TranslationKeys['HomePage']['Filters'], 'header'>
  colors: Color[]
}

export const FiltersForm = ({ colors, translations }: FiltersFormProps) => {
  const { form, handleToggleChip, submitForm, handleChangeColor } = useFiltersForm()

  return (
    <form className="mt-4 flex flex-col" onSubmit={form.handleSubmit(submitForm)}>
      <FormInput<FiltersFormSchema>
        label={translations.name}
        inputProps={{ placeholder: translations.name }}
        name="name"
        {...form.formFieldRequiredProps}
      />

      <FormInput<FiltersFormSchema>
        label={translations.producer}
        inputProps={{ placeholder: translations.producer }}
        name="producer"
        {...form.formFieldRequiredProps}
      />
      <div className="flex justify-evenly">
        <FormInput<FiltersFormSchema>
          label={translations.minPrice}
          inputProps={{ type: 'number' }}
          name="minPrice"
          className="w-1/3"
          {...form.formFieldRequiredProps}
        />
        <FormInput<FiltersFormSchema>
          label={translations.maxPrice}
          inputProps={{ type: 'number' }}
          name="maxPrice"
          className="w-1/3"
          {...form.formFieldRequiredProps}
        />
      </div>

      <div className="flex w-full justify-evenly gap-4">
        {['7ft', '8ft', '9ft'].map((dim) => (
          <Chip
            key={dim}
            onClick={handleToggleChip}
            isActive={form.helpers.watch('dimensions')?.some((formDim) => formDim === dim)}
          >
            {dim}
          </Chip>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-evenly gap-2">
        {colors.map((color) => (
          <ColorSelector
            key={color.id}
            color={color}
            isActive={form.helpers.watch('colors')?.some((formColor) => formColor === color.id)}
            onClick={handleChangeColor}
          />
        ))}
      </div>
      <Button type="submit" className="mt-8">
        {translations.setFilters}
      </Button>
    </form>
  )
}
