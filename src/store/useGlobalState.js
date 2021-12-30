import { useState } from 'react'

const useGlobalState = () => {
  const [state, setState] = useState({ value: false, list: [] })

  const actions = (action) => {
    const { type, payload } = action

    // if (type === 'setState') {

    return type === 'setState' ? setState(payload) : state

    // switch (type) {
    //   case 'setState':
    //     return setState(payload)
    //   default:
    //     return state
    // }
  }

  return { state, actions }
}

export default useGlobalState
