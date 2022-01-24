// a simple loading spinner
import React from 'react'
import PropTypes from 'prop-types'

function Spinner({ type }) {
	return <div className={'spinner-border text-' + type} role="status" />
}


Spinner.propTypes = {
	type: PropTypes.string,
}

export default Spinner