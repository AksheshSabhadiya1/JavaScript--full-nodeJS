
const sessionIdMap = new Map()

const setUser = (id, user)=> {
  sessionIdMap.set(id, user)
}

const getUser = (id)=> {
  return sessionIdMap.get(id)
}

module.exports = { setUser, getUser }