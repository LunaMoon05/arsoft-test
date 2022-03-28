import React from 'react'

export const Popup = props => {
  const {children} = props
  return (
    <div style={{position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {children}
    </div>
  )
}
