import { useTranslations } from 'next-intl'
import { Color } from '@prisma/client'

import { FiltersForm } from './FiltersForm'

type Props = {
  colors: Color[]
}

export const Filters = ({ colors }: Props) => {
  const t = useTranslations('HomePage')

  const translations = {
    name: t('Filters.name'),
    producer: t('Filters.producer'),
    minPrice: t('Filters.minPrice'),
    maxPrice: t('Filters.maxPrice'),
    setFilters: t('Filters.setFilters'),
    clearFilters: t('Filters.clearFilters'),
  }

  return (
    <aside className="mt-2 flex h-auto w-full max-w-sm flex-col border-r border-slate-600 px-6 pt-6">
      <h2 className="text-2xl">{t('Filters.header')}</h2>
      <FiltersForm translations={translations} colors={colors} />
    </aside>
  )
}
