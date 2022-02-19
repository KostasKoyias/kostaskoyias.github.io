import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const createIcon = (iconDefinition, props) => <FontAwesomeIcon icon={iconDefinition} {...props} />

export { createIcon }