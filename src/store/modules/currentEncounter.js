// $store.state.currentEncounter.monsters
export const state = {
  // be aware the monsters is a hash with key matching a monster's id
  monsters: {},
  idTag: 0
}

export const mutations = {

  ADD_MONSTER(state, monster) {
    const m = {...monster}
    state.idTag++
    m.idTag = state.idTag
    m.currentHP = parseInt(m.hitPoints)
    m.conditions = []
    // add initiative?
    // m.init = Math.ceil(Math.random() * 20) + m.dex
    // state needs to be duplicated in order to avoid a reactivity bug
    state.monsters = {...state.monsters, [state.idTag]: m}
  },

  // added remove monster takes either an id or a monster object
  REMOVE_MONSTER(state, payload) {
    if (typeof payload === "object") {
      delete state.monsters[payload.idTag]
      state.monsters = {...state.monsters}
    } else if (typeof payload === "number") {
      delete state.monsters[payload]
      state.monsters = {...state.monsters}
    }
  },

  // in order for alter monster to work it must be passed an object with changes including an idTag for the corresponding monster
  ALTER_MONSTER(state, changes) {
    const m = state.monsters[changes.idTag]
    if (m) {
      Object.keys(changes).forEach(key => m[key] = changes[key])
    }
  },

  // updates all available encounter monsters once a monster entry has been edited
  EDIT_MATCHING_MONSTERS(state, editedMonster) {
    Object.values(state.monsters).forEach(monster => {
      if (monster.id === editedMonster.id) {
        Object.keys(monster).forEach(key => monster[key] = editedMonster[key])
      }
    })
    state.monsters = {...state.monsters}
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
  },
  editMatchingMonsters({commit, state, rootState}, monster) {
    commit('EDIT_MATCHING_MONSTERS', monster)
  }
}
