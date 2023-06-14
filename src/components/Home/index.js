import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="heading-home">Find The Job That Fits Your Life</h1>
          <p className="para-home">
            Millions of people searching for jobs, salary information, company
            reviews. Find the job that fits your abilities and potential
          </p>
          <button className="btn-home" type="button">
            Find Jobs
          </button>
        </div>
      </>
    )
  }
}

export default Home
