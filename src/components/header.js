import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      backgroundColor: "transparent",
      marginBottom: '1.45rem',
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 10000
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div className="header">
          {siteTitle}
        </div>
      </h1>
    </div>
  </div>
)

export default Header
