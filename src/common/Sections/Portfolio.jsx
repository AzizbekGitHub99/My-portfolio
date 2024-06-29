import WorkCard from '../../components/WorkCard'
import { myWorks } from '../../constants'
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className="container">
        <h2>
          Portfolio
        </h2>
        <div className="my-works">
          {myWorks.map(work => <WorkCard work={work} key={work.id}/>)}
        </div>       
      </div>
    </div>
  )
}

export default Portfolio