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
  { id: 1, name: 'Alpha', category: 'fps', price: 10, tags: ['tatico'] },
  { id: 2, name: 'Beta', category: 'rpg', price: 30, tags: ['fantasia'] },
  { id: 3, name: 'Gamma', category: 'fps', price: 20, tags: ['tatico', 'equipas'] },
]

assert.equal(byCategory(sample, 'fps').length, 2)
assert.equal(search(sample, 'GAMMA').length, 1)
assert.equal(search(sample, 'tatico equipas')[0].name, 'Gamma')
assert.equal(total(sample), 60)
assert.deepEqual(top(sample, 2).map(({ name }) => name), ['Beta', 'Gamma'])
assert.deepEqual(sample.map(({ id }) => id), [1, 2, 3])
assert.deepEqual(categories(sample), ['fps', 'rpg'])

const discounted = withDiscount(sample, 10)
assert.equal(discounted[0].price, 9)
assert.equal(sample[0].price, 10)

const grouped = groupByCategory(sample)
assert.equal(grouped.fps.length, 2)
assert.equal(grouped.rpg.length, 1)

assert.equal(items.length >= 8, true)
assert.equal(total(items), 310)
assert.deepEqual(categories(items), ['desporto', 'fps', 'rpg'])
