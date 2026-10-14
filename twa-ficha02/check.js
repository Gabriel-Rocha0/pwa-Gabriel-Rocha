import assert from 'node:assert/strict'
import { items } from './data.js'
import {
  byCategory,
  categories,
  groupByCategory,
  search,
  top,
  total,
  withDiscount,
} from './catalog.js'

const sample = [
  { id: 1, name: 'Clio', category: 'citadino', price: 10, tags: ['cidade'], brand: { name: 'Renault', country: 'FR' } },
  { id: 2, name: 'Serie 1', category: 'desportivo', price: 30, tags: ['premium'], brand: { name: 'BMW', country: 'DE' } },
  { id: 3, name: 'Puma', category: 'citadino', price: 20, tags: ['cidade', 'suv'], brand: { name: 'Ford', country: 'US' } },
]

assert.equal(byCategory(sample, 'citadino').length, 2)
assert.equal(search(sample, 'PUMA').length, 1)
assert.equal(search(sample, 'cidade suv')[0].name, 'Puma')
assert.equal(total(sample), 60)
assert.deepEqual(top(sample, 2).map(({ name }) => name), ['Serie 1', 'Puma'])
assert.deepEqual(sample.map(({ id }) => id), [1, 2, 3])
assert.deepEqual(categories(sample), ['citadino', 'desportivo'])

const discounted = withDiscount(sample, 10)
assert.equal(discounted[0].price, 9)
assert.equal(sample[0].price, 10)
discounted[0].brand.name = 'Outra'
discounted[0].tags.push('extra')
assert.equal(sample[0].brand.name, 'Renault')
assert.deepEqual(sample[0].tags, ['cidade'])

const grouped = groupByCategory(sample)
assert.equal(grouped.citadino.length, 2)
assert.equal(grouped.desportivo.length, 1)

assert.equal(items.length >= 8, true)
assert.equal(total(items), 257000)
assert.deepEqual(categories(items), ['citadino', 'desportivo', 'suv'])
assert.deepEqual(top(items, 3).map(({ name }) => name), ['BMW Serie 1', 'Audi A3', 'Toyota RAV4'])
