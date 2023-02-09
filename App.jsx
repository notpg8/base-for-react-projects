import React, { useState } from 'react'
import './App.css'

function App() {
	const [st, _setSt] = useState('Console log something')

	return (
		<>
			<p className="paragraph">This is a paragraph inside the body of the component</p>
			<button onClick={() => console.log('something')}>{st}</button>
		</>
	)
}

export default App
