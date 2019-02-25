module.exports = ({ fields }, { success }) => {
  success({ data: addSelections(fields, {}) })
}

function addSelections(fields, selections) {
  fields.forEach(({ name, fields }) => {
    selections[name] = fields ? addSelections(fields, {}) : 1
  })
  return selections
}
