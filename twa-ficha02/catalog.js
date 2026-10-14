const textOf = ({ name, tags }) => [name, ...tags].join(' ').toLowerCase()

export const byCategory = (list, cat) => list.filter((item) => item.category === cat)

export const search = (list, text) => {
  const words = String(text ?? '').toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return [...list]
  return list.filter((item) => {
    const blob = textOf(item)
    return words.every((word) => blob.includes(word))
  })
}

export const total = (list) => list.reduce((sum, { price }) => sum + price, 0)

export const top = (list, n) =>
  list.toSorted((a, b) => b.price - a.price || a.name.localeCompare(b.name)).slice(0, n)

export const categories = (list) =>
  [...new Set(list.map(({ category }) => category))].toSorted((a, b) => a.localeCompare(b))

export const withDiscount = (list, pct) =>
  list.map((item) => {
    const copy = structuredClone(item)
    copy.price = item.price * (1 - pct / 100)
    return copy
  })

export const groupByCategory = (list) => Object.groupBy(list, ({ category }) => category)
