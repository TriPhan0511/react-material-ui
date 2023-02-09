import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const ColorSample = () => {
	return (
		<Box display='flex' justifyContent='center'>
			<Box width={'80vw'}>
				<Grid container spacing={1}>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'primary.main',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							primary.main
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'secondary.main',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							secondary.main
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'error.main',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							error.main
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'warning.main',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							warning.main
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'info.main',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							info.main
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'success.main',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							success.main
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'text.primary',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							text.primary
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'text.secondary',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							text.secondary
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								backgroundColor: 'text.disabled',
								color: '#fff',
								px: 1,
								py: 2,
							}}
						>
							text.disabled
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
// const ColorSample = () => {
// 	return (
// 		<Typography component='div' variant='body1'>
// 			<Box sx={{ color: 'primary.main' }}>primary.main</Box>
// 			<Box sx={{ color: 'secondary.main' }}>secondary.main</Box>
// 			<Box sx={{ color: 'error.main' }}>error.main</Box>
// 			<Box sx={{ color: 'warning.main' }}>warning.main</Box>
// 			<Box sx={{ color: 'info.main' }}>info.main</Box>
// 			<Box sx={{ color: 'success.main' }}>success.main</Box>
// 			<Box sx={{ color: 'text.primary' }}>text.primary</Box>
// 			<Box sx={{ color: 'text.secondary' }}>text.secondary</Box>
// 			<Box sx={{ color: 'text.disabled' }}>text.disabled</Box>
// 		</Typography>
// 	)
// }

export default ColorSample
