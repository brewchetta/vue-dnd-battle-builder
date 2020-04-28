// $store.state.currentEncounter.monsters
export const state = {
  // be aware the monsters is a hash with key matching a monster's id
  monsters: {},
  idIterator: 0
}

export const mutations = {

  ADD_MONSTER(state, monster) {
    const m = {...monster}
    m.id = idIterator ++
    m.currentHP = m.hitPoints
    m.conditions = []
    // add initiative?
    // m.init = Math.ceil(Math.random() * 20) + m.dex
    state.monster[idIterator] = m
  },

  // added remove monster takes either an id or a monster object
  REMOVE_MONSTER(state, payload) {
    if (typeof payload === "object") {
      delete state.monsters[payload.id]
    } else if (typeof payload === "number") {
      delete state.monsters[payload]
    }
  },

  // in order for alter monster to work it must be passed an object with changes including an id for the corresponding monster
  ALTER_MONSTER(state, changes) {
    const m = state.monsters.find(monster => monster.id === changes.id)
    if (m) {
      Object.keys(changes).forEach(key => m[key] = changes[key])
    }
  }
}

// $store.dispatch('addMonster', monster)
export const actions = {
  addMonster({commit, state, rootState}, monster) {
    commit('ADD_MONSTER', monster)
  },
  removeMonster({commit, state, rootState}, monster) {
    commit('REMOVE_MONSTER', monster)
  },
  alterMonster({commit, state, rootState}, changes) {
    commit('ALTER_MONSTER', changes)
  }
}
