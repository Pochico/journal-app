import React from 'react'
import { useRef } from 'react'

export default function FocusScreen() {

    const inputRef = useRef()

  return (
    <>
        <h1>INPUT</h1>
        <input type="text" placeholder='Write something...'/>
        <button>Focus Input</button>
    </>
  )
}
