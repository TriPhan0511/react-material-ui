import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

const ButtonSample = () => {
	return (
		<div>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
			>
				<Button variant='contained'>Hello World</Button>
				<Button variant='contained'>Hello World</Button>
				<Button variant='contained'>Hello World</Button>
			</Stack>
		</div>
	)
	// return (
	// 	<Stack
	// 		spacing={2}
	// 		direction='row'
	// 		divider={<Divider orientation='vertical' flexItem />}
	// 	>
	// 		<Button>Hello Default</Button>
	// 		<Button variant='contained'>Hello Contained</Button>
	// 		<Button variant='outlined'>Hello Outlined</Button>
	// 	</Stack>
	// )
}

export default ButtonSample
