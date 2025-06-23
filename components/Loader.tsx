import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-950"></div>
      </div>
    </div>
  )
}

export default Loader