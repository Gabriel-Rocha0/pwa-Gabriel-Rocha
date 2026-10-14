import {
  byCategory as byCategoryRaw,
  categories as categoriesRaw,
  groupByCategory as groupByCategoryRaw,
  search as searchRaw,
  top as topRaw,
  total as totalRaw,
  withDiscount as withDiscountRaw,
} from './catalog.js'

export type Item = {
  id: number
  name: string
  category: string
  price: number
  tags: string[]
  brand: { name: string; country: string }
}

export const byCategory = (list: Item[], cat: string): Item[] => byCategoryRaw(list, cat)

export const search = (list: Item[], text: string): Item[] => searchRaw(list, text)

export const total = (list: Item[]): number => totalRaw(list)

export const top = (list: Item[], n: number): Item[] => topRaw(list, n)

export const categories = (list: Item[]): string[] => categoriesRaw(list)

export const withDiscount = (list: Item[], pct: number): Item[] => withDiscountRaw(list, pct)

export const groupByCategory = (list: Item[]): Partial<Record<string, Item[]>> =>
  groupByCategoryRaw(list)
