import React from 'react'
import { cols } from './config'
import { itemToColumn } from './methods'

function Footer() {

  return (
    <footer id="footer" className="page-footer font-small pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">{cols.map(itemToColumn)}</div>
      </div>
      <div className="footer-copyright text-center py-3">
        Published with <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a>
      </div>
    </footer>)
}

export default Footer