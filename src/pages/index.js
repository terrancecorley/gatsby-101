import React from "react"
import { Link } from 'gatsby'

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/contact">Contact Page</Link>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)