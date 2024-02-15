import React, { createContext, useContext,useState } from 'react'
import {posts as myPosts,users as myUsers} from '../data/data'
const AppContext = createContext({user:null})
const AppContextProvider = ({children}) => {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('fb-clone-user')));
  const [users,setUsers] = useState(myUsers);
  const [posts,setPosts] = useState(myPosts);
  const share = {user,setUser,users,setUsers,posts,setPosts}
  console.log(users);
  return (
    <AppContext.Provider value={{...share}} >
        {children}
    </AppContext.Provider>
  )
  }
export const useAppContext = ()=>{
    return useContext(AppContext);
}

export default AppContextProvider
