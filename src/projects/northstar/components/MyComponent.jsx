import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const MyComponent = () => {
	return (
		<>
			{/* Top Header */}
			<section id='top-header'>
				<div className='container'>
					<div className='row d-flex align-items-center'>
						<div className='col-md-4 text-center text-md-left'>
							<a href='https://testing.ivyglobalschool.org/'>
								<img
									className='main-logo'
									src='https://testing.ivyglobalschool.org/wp-content/uploads/2020/11/igs-logo-2.png'
								/>
							</a>
						</div>
						<div className='col-md-8 text-center text-md-right mt-3 mb-3'>
							<ul className='top-menu'>
								<li>
									<a href='tel:0898 083 111'>
										<FontAwesomeIcon
											icon={faPhoneFlip}
											className='pb-1 mr-1'
											style={{ width: '15px' }}
										/>
										0898 083 111
									</a>
								</li>
								<li>
									<a
										href='mailto:admission@ivyglobalschool.org'
										className='mr-1'
										style={{ width: '15px' }}
									>
										<FontAwesomeIcon icon={faEnvelope} />
										admission@ivyglobalschool.org
									</a>
								</li>
							</ul>
							{/* <ul className="top-menu">
                            <li>
                                <a href="tel:0898 083 111">
                                    <svg className="pb-1 mr-1" style="width: 15px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"/></svg> 
                                    0898 083 111                                </a>
                            </li>
                            <li>
                                <a href="mailto:admission@ivyglobalschool.org">
                                    <svg className="mr-1" style="width: 15px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                                    admission@ivyglobalschool.org                                </a>
                            </li>
                        </ul> */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default MyComponent
