import React from 'react'
import {UserContext, HobbyContext} from '../App'

const ContextC = () => {

  return (
    <>
      <UserContext.Consumer>
        {
          user => {
            return (
              <HobbyContext.Consumer>
                { hobby => <p>{user.name}{user.age}歳: 趣味は{hobby}です。</p> }
              </HobbyContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
   </>
  )
}

export default ContextC