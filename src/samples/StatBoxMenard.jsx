import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BarChartIcon from '@mui/icons-material/BarChart'
import PieChartIcon from '@mui/icons-material/PieChart'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

import styled from '@emotion/styled'

const Sb = ({
	title = '71',
	subtitle = 'Khóa học',
	iconSize = '8rem',
	icon = <BarChartIcon />,
	readMoreText = 'Xem thêm',
	readMoreIcon = <ArrowCircleRightIcon />,
	backgroundColor = 'rgb(0, 192, 239)',
	textColor = '#fff',
}) => {
	return (
		<Box
			sx={{
				color: textColor,
				backgroundColor: backgroundColor,
				borderRadius: '3px',
			}}
			width='100%'
		>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='flex-start'
				paddingLeft='20px'
			>
				<Box>
					<Typography variant='h5' fontSize='4rem' fontWeight='700'>
						{title}
					</Typography>
					<Typography variant='h6' letterSpacing='1px'>
						{subtitle}
					</Typography>
				</Box>
				<BarChartIcon sx={{ fontSize: '8rem' }} />
			</Box>
			<Box
				sx={{
					backgroundColor: 'rgb(0, 172, 215)',
					opacity: 0.8,
					borderRadius: '3px',
					padding: '5px',
				}}
				display='flex'
				justifyContent='center'
				alignItems='center'
				gap='3px'
			>
				<Typography variant='h6' letterSpacing='1px'>
					{readMoreText}
				</Typography>
				{readMoreIcon}
			</Box>
		</Box>
	)
}

const StatBoxMenard = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '20px',
				marginTop: '30px',
			}}
		>
			<div
				style={{
					width: '320px',
				}}
			>
				<Sb />
			</div>
		</div>
	)
}

export default StatBoxMenard
