import React from 'react'
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className="container">
        <h2>
          Portfolio
        </h2>
        <div className="my-works">
          <a href='https://sultan-clone.netlify.app/' className="work-card" target='_blank'>
            <div className="card-up sultan">
              <div className="up-curtain">
                visit the site
              </div>
            </div>
            <div className="card-down">
              <h4>Sultan converted from figma</h4>
            </div>
          </a>
          <a href='https://crudfromazizbe.netlify.app/' className="work-card" target='_blank'>
            <div className="card-up crud">
              <div className="up-curtain">
                visit the site
              </div>
            </div>
            <div className="card-down">
              <h4>Crud with non-bootsrap modal</h4>
            </div>
          </a>
          <a href='https://weatherappfromazizbe.netlify.app/' className="work-card" target='_blank'>
            <div className="card-up weather">
              <div className="up-curtain">
                visit the site
              </div>
            </div>
            <div className="card-down">
              <h4>Created using API</h4>
            </div>
          </a>
          <a href='https://ddsofttest.netlify.app/' className="work-card" target='_blank'>
            <div className="card-up ddsoft">
              <div className="up-curtain">
                visit the site
              </div>
            </div>
            <div className="card-down">
              <h4>Converted from figma</h4>
            </div>
          </a>
          <a href='https://draganddropfromazizbe.netlify.app/' className="work-card" target='_blank'>
            <div className="card-up dnd">
              <div className="up-curtain">
                visit the site
              </div>
            </div>
            <div className="card-down">
              <h4>Drag and Drop test work</h4>
            </div>
          </a>
        </div>       
      </div>
    </div>
  )
}

export default Portfolio