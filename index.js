const records = {}
const nextId = 1

export function findAll() {
  return Object.values(records).map(record => ({ ...record }))
}

export function findById(id) {
  return { ...records[id] }
}

export function insert(record) {
  record.id = nextId
  records[nextId] = { ...record }
  nextId++
  return record
}

export function update(record) {
  const id = record.id
  if (!id) throw new Error("The record doesn't have an id property")
  if (!records[id]) {
    throw new Error(`The record with id ${id} was not found`)
  }
  records[id] = record
}

export function remove(id) {
  delete records[id]
}