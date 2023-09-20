import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets(){

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading} </h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>Thunder News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Hariharan's app is Ready","Top news - 9099 readers")}
        {newsArticle("Youtube is become a Bid deal?","Top news - 5003 readers")}
        {newsArticle("Rain Fall in Tamil Nadu","Top news - 6008 readers")}
        {newsArticle("Job hiring in india has started","Top news - 2000 readers")}
        {newsArticle("Bitcoin rate is increased or not","Top news - 540 readers")}
    </div>
  )
}

export default Widgets