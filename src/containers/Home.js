import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import './Home.css'

export default withRouteData(({ jdown, reactStatic }) => (
  <section className="home-content">{convert(jdown.contents)}</section>
))
