import React from 'react'

export default function Button(props) {
  return (
    <button className='bg-blue-500 rounded-sm mt-2 py-1 font-semibold text-white'>{props.name}</button>
  )
}
