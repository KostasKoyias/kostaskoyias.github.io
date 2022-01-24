import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const addKey = ((item, index) => { return { ...item, key: index } })

const getAge = (birthday) => {
	const present = new Date(), birthDate = new Date(birthday)
	return new Date(new Date(present.getTime() - birthDate.getTime())).getUTCFullYear() - 1970
}

const createIcon = (iconDefinition, props) => <FontAwesomeIcon icon={iconDefinition} {...props} />

export { getAge, addKey, createIcon }