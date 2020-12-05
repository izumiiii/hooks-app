import React, {createContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import EffectFunc from './components/effectFunc';
import Context from './components/ContextA';
import Counter2 from './components/reducers/Counter2';
import Counter3 from './components/reducers/Counter3';
import UseMemo from './components/UseMemo';


//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext()
export const HobbyContext = createContext()

function App() {
  // useStateを使ってuserを作成
  const [user, setUser] = useState({
    name: 'セイラ',
    age: '17'
  })

  // useStateを使ってhobbyを作成
  const [hobby, setHobby] = useState('キャンプ')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2>Counter</h2>
        <Counter></Counter>
        <h2>EffectFunc</h2>
        <EffectFunc></EffectFunc>
        <h2>UseContext</h2>
        <UserContext.Provider value={user}>
          <HobbyContext.Provider value={hobby}>
            <Context />
          </HobbyContext.Provider>
        </UserContext.Provider>
        <h2>useReducer: sample1</h2>
        <Counter2 />
        <h2>useReducer: sample2</h2>
        <Counter3 />
        <h2>useMemo</h2>
        <UseMemo />
      </header>
    </div>
  );
}

export default App;
