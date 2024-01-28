import { createContext ,useReducer} from "react";

export const AuthContext = createContext();


export const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
            return { user:action.payload}
      case 'SIGNUP':
           return { user:null} 
      default:
        return state
    }
  }

export const AuthsContextsProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, { 
        users: null
      })
    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
          {children}
        </AuthContext.Provider>
    )
}