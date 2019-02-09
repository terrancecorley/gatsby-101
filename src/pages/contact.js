import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home Page</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)