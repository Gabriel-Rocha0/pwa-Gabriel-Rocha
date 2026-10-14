export type Item = {
  id: number
  name: string
  category: string
  price: number
  tags: string[]
  studio: { name: string; country: string }
}

export const byCategory = (list: Item[], cat: string) =>
  list.filter((item) => item.category === cat)

export const total = (list: Item[]): number =>
  list.reduce((sum, { price }) => sum + price, 0)
