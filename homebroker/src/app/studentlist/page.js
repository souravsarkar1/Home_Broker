import Link from 'next/link'
import React from 'react'

const Student = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
      <li>
      <Link href={'/studentlist/1'}>Sourav</Link>
      </li>
      <li>
      <Link href={'/studentlist/2'}>Pinki</Link>
      </li>
      <li>
      <Link href={"/studentlist/3"}>Laboni</Link>
      </li>
      <li>
      <Link href={"/studentlist/4"}>Ratna</Link>
      </li>
      </ul>
    </div>
  )
}

export default Student
