import React from 'react'
import arrow from '../../assets/images/arrowSort.svg'

export const ArrowSort = ({type = 'default'}) => {
  return (
    <>
    {type === 'default' ? 
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <img style={{width: 20, height: 20, transform: 'rotate(180deg)'}} src={arrow} alt="sorting" />
      <img style={{width: 20, height: 20}} src={arrow} alt="sorting" />
    </div> : null}
    {type === 'up' ? 
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <img style={{width: 20, height: 20, transform: 'rotate(180deg)'}} src={arrow} alt="sorting" />
    </div> : null}
    {type === 'down' ? 
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <img style={{width: 20, height: 20}} src={arrow} alt="sorting" />
    </div> : null}
    </>
  )
}
