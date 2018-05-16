import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import './Home.css'

export default withRouteData(({ jdown, reactStatic }) => (
  <div className="container">
    <section className="content">{convert(jdown.contents)}</section>
  </div>
))
