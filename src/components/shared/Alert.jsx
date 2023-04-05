import React from 'react'

function Alert({alert}) {
  return (
    <div className="p-4 my-4 text-sm text-red-700 rounded-lg bg-red-50 bg-opacity-90" role="alert" style={{maxWidth:'500px'}}>
        <span className="font-medium">{alert.type} </span> 
        {alert.msg}
    </div>
  )
}

export default Alert