import ArchiveBoxXMarkIcon from '@heroicons/react/24/outline/ArchiveBoxXMarkIcon'
import CameraIcon from '@heroicons/react/24/outline/CameraIcon'
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon'
import ChevronUpIcon from '@heroicons/react/24/outline/ChevronUpIcon'
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'
import CartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'
import StarIcon from '@heroicons/react/24/outline/StarIcon'

export const Icons = {
  Search: MagnifyingGlassIcon,
  Cart: CartIcon,
  EmptyCart: ArchiveBoxXMarkIcon,
  ArrowUp: ChevronUpIcon,
  ArrowDown: ChevronDownIcon,
  Rating: StarIcon,
  Gallery: CameraIcon,
} as const
