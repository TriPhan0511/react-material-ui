import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'

const BoxComponent = () => {
	return (
		<Box
			component='span'
			sx={{
				p: 2,
				border: 'dashed 1px #000',
			}}
		>
			<Button onClick={() => alert('Aloha!')}>Save</Button>
		</Box>
	)
}

// const BoxComponent = () => {
// 	return (
// 		<Button
// 			sx={{
// 				p: 2,
// 				border: '1px dashed #000',
// 			}}
// 		>
// 			Save
// 		</Button>
// 	)
// }

// const BoxComponent = () => {
// 	return (
// 		<Box
// 			component='button'
// 			sx={{
// 				p: 2,
// 				border: 'dashed 1px #000',
// 			}}
// 			onClick={() => alert('Good afternoon!')}
// 		>
// 			Save
// 		</Box>
// 	)
// }

export default BoxComponent
