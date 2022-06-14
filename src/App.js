import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import AddPost from './AddPost'

import { Navbar } from './app/Navbar'
import PostList from './features/post/PostList'
import SinglePost from './features/post/SinglePost'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
        
          <Route exact path="/" render={() => (
              <section>
                <h2>Welcome to the Redux Essentials example app!</h2>
              </section>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePost}/>
          <Redirect to="/" />
        </Switch>
      </div>
    <React.Fragment>
    <PostList></PostList>
    </React.Fragment>
    <AddPost />
    </Router>
    
    </>
  )
}

export default App
