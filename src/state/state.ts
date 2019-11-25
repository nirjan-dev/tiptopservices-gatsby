import React from "react"
import globalHook from "use-global-hook"
const initialState = {
  isContactOpen: false,
}

const actions = {
  closeModal: store => {
    store.setState({ isContactOpen: false })
  },
  openModal: store => {
    store.setState({ isContactOpen: true })
  },
}

export const useGlobal = globalHook(React, initialState, actions)
