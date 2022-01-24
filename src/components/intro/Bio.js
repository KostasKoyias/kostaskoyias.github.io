import React from 'react'
import { getAge } from '../utils'
import { birthday, focus, interests } from './config'

function Bio() {
	return (
		<div className="card-text">
			<div id="personal-info">
				{`My name is Konstantinos Koyias & I am ${getAge(birthday)} years old.`}<br/>
				{'Obtained a B.Sc in Informatics and Telecommunications at '}
				<a href="https://www.di.uoa.gr/eng" target="_blank" rel="noreferrer">DiT UoA</a>
				{' in September 2020'}
				<br/>
				{'concentrated in Data & Knowledge Management as well as Software Engineering.'},
				<div id="specialization">
					<br/>
					{focus}
				</div>
				<div id="interests">
					<br/>I am also interested in
					<ul id="passion">
						{interests.map((inst, i) => <li key={i}>{inst}</li>)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Bio