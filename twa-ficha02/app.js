import { writeFile } from 'node:fs/promises'
import { items } from './data.js'
import { byCategory, categories, search, top, total } from './catalog.js'

const [cmd, arg] = process.argv.slice(2)
const line = ({ id, name }) => `${id} · ${name}`
const print = (list) => list.forEach((item) => console.log(line(item)))

if (!cmd) {
  print(items)
} else if (cmd === 'search') {
  print(search(items, arg ?? ''))
} else if (cmd === 'top') {
  print(top(items, Number(arg)))
} else if (cmd === 'report') {
  const report = {
    count: items.length,
    total: total(items),
    categories: categories(items),
    top3: top(items, 3),
  }
  await writeFile(new URL('./report.json', import.meta.url), JSON.stringify(report, null, 2))
  console.log('report.json escrito')
} else {
  print(byCategory(items, cmd))
}
