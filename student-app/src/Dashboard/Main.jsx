import React from 'react'
import { Link } from 'react-router-dom'

export default ({ match }) => (
  <div>
    <h1>This is Main!</h1>
    <Link to="/dashboard/topics">Learn</Link>
  </div>
)