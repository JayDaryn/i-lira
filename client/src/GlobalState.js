import React, {useEffect, createContext} from 'react'
import useLocalStorage from './utils/useLocalStrorage'
import axios from 'axios'
const baseurl = "https://api.com"


const initialState = {
	httpLoading: false,
	user: null,
	token: null
}

export const GlobalState = createContext(initialState)

export const GlobalStateWrapper = props => {
  // const [state, setState] = useState(initialState)
  const [state, setState] = useLocalStorage("session", initialState);

  useEffect(() => {
    (async () => {
      // Load Session here
    })()
  }, [])

  const actions = {
    authenticate: async () => {
      // auth
      setState(prevState => ({...prevState, user:{name:'JC',email:'jeanclaude@jaydaryn.com'}}))
    },
    signOut: async () => {
			setState(initialState)
    },
    httpGet: async (url) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.get(baseurl + url, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    },
    httpPost: async (url, body) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.post(baseurl + url, body, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    },
    httpPatch: async (url, body) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.patch(baseurl + url, body, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    },
    httpDelete: async (url) => {
      setState(prevState => ({ ...prevState, httpLoading: true }))
      const headers = { 'Content-Type': 'application/json' }
      if (state.token !== null) {
        headers.Authorization = 'Bearer ' + state.token
      }
      try {
        const resp = await axios.delete(baseurl + url, { headers })
        setState(prevState => ({ ...prevState, httpLoading: false }))
        return resp
      } catch (error) {
        console.log(error.response.data)
        setState(prevState => ({ ...prevState, httpLoading: false }))
        throw new Error('Request Failed')
      }
    }
  }

  return (
    <GlobalState.Provider value={{ ...state, ...actions }}>
      {props.children}
    </GlobalState.Provider>
  )
}
