import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from '../routes'
import Header from '../components/Header'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            {/* 这里是使用嵌套路由+子路由的写法 */}
            {
              routes.map((route, key) => {
                if (route.exact) {
                  return <Route exact path={route.path} key={key} render={props => (<route.component {...props} routes={route.routes} />)} />
                } else {
                  return <Route path={route.path} key={key} render={props => (<route.component {...props} routes={route.routes} />)} />
                }
              })
            }
          </div>
          <footer>
            This is footer
          </footer>
        </div>
      </Router>
    );
  }
}

export default Home;