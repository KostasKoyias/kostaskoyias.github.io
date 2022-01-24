import React from 'react'
import MoreInfo from './more_info/MoreInfo'
import LinksColumn from './links_column/LinksColumn'
import { workLinks, personalLinks } from './config'

function Footer() {

	return (
		<footer id="footer" className="page-footer font-small pt-4">
			<div className="container-fluid text-center text-md-left">
				<div className="row">
					<MoreInfo/>
					<LinksColumn {...workLinks}/>
					<LinksColumn {...personalLinks}/>
				</div>
			</div>
			<div className="footer-copyright text-center py-3">
                Published with <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a>
			</div>
		</footer>)
}

export default Footer