import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="heading-home">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="para-home">
          Millions of people searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential
        </p>
        <Link to="/jobs">
          <button onClick={onRedirectToJobs} className="btn-home" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
