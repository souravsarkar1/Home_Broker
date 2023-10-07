"use client"

import React from 'react'

const SingleStudent = ({params}) => {
    
    console.log(params.student);
    return (
        <div>
           
            <h1>Student delteals {params.student}</h1>
        </div>
    )
}

export default SingleStudent
