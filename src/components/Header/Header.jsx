import React, {
	useContext, useEffect, useRef, useState,
} from 'react';
import { ECAddress } from 'ec-commons';
import {
	Box, SwipeableDrawer, useMediaQuery, Button, MenuList,
} from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';
import Web3Ctx from '../Context/Web3Ctx';
import Divider from '../common/Divider';
// import useScrollDirection from '../utils/useScrollDirection';
import menu from '../../assets/images/menu.svg';
import close from '../../assets/images/close.svg';
import HeaderButton from './components/HeaderButton';
import SocialButton from '../common/SocialButton';
import logo from '../../assets/images/Toddlerpillars-Logo.png';

const BP1 = '@media (max-width: 999px)';
const BP2 = '@media (max-width: 530px)';
const BP3 = '@media (max-width: 1480px) and (min-width:1199px)';
const BP4 = '@media (min-width: 999px)';
const BP5 = '@media (max-width: 500px)';
const BP6 = '@media (max-width: 430px)';
const BP7 = '@media (max-width: 325px)';

const COLOR_CYAN = '#19A8B4';

const sx = {
	root: {
		zIndex: 201,
		position: 'sticky',
		top: 0,
		width: '100%',
		backgroundColor: '#FFF',
		transition: 'all .3s',
	},
	content: {
		background: '#FFF',
		position: 'relative',
		width: '100%',
		maxWidth: '1158px',
		mx: 'auto',
		height: '54px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		pr: '24px',
		gap: '0 28px',
		transition: 'all .3s',
		[BP1]: {
			height: '48px',
			gap: '0 24px',
			pr: '0px',
		},
		[BP3]: {
			maxWidth: '920px',
			gap: '0 14px',
		},
	},
	btnContainer: {
		display: 'flex',
		flexDirection: 'row',
		[BP1]: {
			display: 'none',
		},
	},
	mintBtn: {
		width: '100%',
		maxWidth: '120px',
		height: '40px',
		backgroundColor: 'primary.main',
		borderRadius: '22px',
		// cursor: 'pointer',
		cursor: 'not-allowed',
		opacity: 0.5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#FFF',
		fontFamily: 'roboto-bold',
		transition: 'all .3s',
		[BP4]: {
			marginBottom: '8px',
		},
		[BP1]: {
			maxWidth: '80px',
			height: '32px',
			mr: '8px',
		},
	},
	disconnectBtn: {
		textAlign: 'center',
		cursor: 'pointer',
		transition: 'color 0.3s ease-in-out',
		margin: 0,
		marginLeft: '-7px',
		fontSize: '0.8rem',
		lineHeight: '0.3rem',
		marginTop: '-5px',
		'&:hover': {
			color: '#000',
		},
	},
	address: {
		zIndex: 1,
		minWidth: '150px',
		[BP5]: {
			transform: 'scale(0.9)',
		},
	},
	connectBtn: {
		fontSize: 16,
		minWidth: '150px',
		height: '40px',
		backgroundColor: '#fff',
		color: COLOR_CYAN,
		borderRadius: '22px',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'roboto-bold',
		transition: 'all .3s',
		textTransform: 'unset',
		[BP1]: {
			minWidth: '130px',
			height: '34px',
			fontSize: 14,
			mb: 0,
			mr: 1,
		},
		[BP5]: {
			minWidth: '110px',
			height: '30px',
			fontSize: 12,
			mr: 1,
		},
		'&:focus': {
			backgroundColor: COLOR_CYAN,
			color: '#fff',
			outlineColor: '#000',
			opacity: 0.8,
		},
		'&:disabled': {
			backgroundColor: 'primary.main',
			cursor: 'not-allowed',
			opacity: 0.5,
		},
		'&:hover': {
			backgroundColor: COLOR_CYAN,
			color: '#fff',
			borderColor: COLOR_CYAN,
		},
		'&:active': {
			outlineColor: 'unset',
		},
	},
	errorBtn: {
		color: '#fff',
		fontSize: 16,
		minWidth: '150px',
		height: '40px',
		backgroundColor: 'red',
		borderRadius: '22px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'roboto-bold',
		transition: 'all .3s',
		textTransform: 'unset',
	},
	divider: {
		maxWidth: '1158px',
		mx: 'auto',
		[BP3]: {
			maxWidth: '920px',
		},
	},
	menuBtn: {
		width: '48px',
		minWidth: '48px',
		display: 'none',
		ml: '8px',
		cursor: 'pointer',
		[BP1]: {
			display: 'block',
			zIndex: '1',
		},
	},
	closeBtn: {
		width: '36px',
		minWidth: '36px',
		ml: '8px',
		mt: '8px',
		cursor: 'pointer',
	},
	menu: {
		width: '100%',
		maxWidth: '312px',
		boxShadow: '4px 0 6px 0 rgba(0,0,0,0.25)',
		backgroundColor: '#FFF',
	},
	socialMobileContainer: {
		mt: '24px',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: '24px 18px',
	},
	mobileLogoContainer: {
		display: 'none',
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: '0',
		[BP1]: {
			display: 'flex',
		},
		[BP5]: {
			pr: '15%',
		},
		[BP6]: {
			pr: '20%',
		},
		[BP7]: {
			display: 'none',
		},
	},
	logo: {
		width: '150px',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[BP2]: {
			width: '180px',
		},
		[BP4]: {
			width: '130px',
		},
		[BP5]: {
			width: '135px',
		},
		[BP6]: {
			width: '130px',
		},
	},
	socialContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: '0 14px',
		[BP1]: {
			display: 'none',
		},
		[BP3]: {
			gap: '0 8px',
		},
	},
	socialButtonContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: '0 14px',
	},
	menuList: {
		backgroundColor: '#FFF',
		width: '190px',
		height: '174px',
		position: 'absolute',
		boxShadow: '2px 2px 2px 3px rgba(0, 0, 0, 0.2)',
		pt: '0',
		pb: '0',
	},
	menuListVertical: {
		ml: '45px',
		backgroundColor: '#FFF',
		width: '175px',
		height: '173px',
		marginTop: '0px',
		pt: '0',
	},
};

const BUTTONS = ['Chimerapillars', 'About', 'Roadmap',  'Rarity', 'OpenSea', 'Merge & Burn'];
const MOBILEBUTTONS = ['Chimerapillars', 'About', 'Roadmap',  'Rarity', 'OpenSea', 'Merge & Burn'];
const PATHS = [null, '/about', '/roadmap', null, null, null];
const DROPMENU = ['About Toddlerpillars', 'Mythology', 'History'];
const DROPMENUPATHS = ['/about', '/mythology', '/history'];
const urlChimerapillars = 'https://chimerapillars.com';
const urlChimerapillarsMerge = 'https://chimerapillars.com/#/merge';
const urlRarity = 'https://rarity.tools/toddlerpillars';
const urlOpensea = 'https://opensea.io/collection/toddlerpillars';
const urlMaddies = 'https://maddies.co/official/toddlerpillars/'

const Header = () => {
	const {
		handleConnect, handleDisconnect, address, isCorrectNetwork,
	} = useContext(Web3Ctx);
	const history = useHistory();
	const rootRef = useRef(null);
	// const scrollDirection = useScrollDirection();
	const [isFixed, setFixed] = useState(false);
	// const [hidden, setHidden] = useState(false);
	const location = useLocation();
	const [activeTab, setActiveTab] = useState(0);
	const [activeTabAbout, setActiveTabAbout] = useState(0);
	const [menuOpened, setMenuOpened] = useState(false);
	const [openAbout, setOpenAbout] = useState(false);
	const isMobileView = useMediaQuery('(max-width: 999px)');

	useEffect(() => {
		const { pathname: p } = location;
		for (let i = 0; i < PATHS.length; i += 1) {
			if (PATHS[i] === p) {
				setActiveTab(i);
				setActiveTabAbout(-1);
				break;
			}
		}
		for (let i = 0; i < DROPMENUPATHS.length; i += 1) {
			if (DROPMENUPATHS[i] === p) {
				setActiveTab(1);
				setActiveTabAbout(i);
				break;
			}
		}
	}, [location]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleScroll = () => {
				if (rootRef.current) {
					const { top } = rootRef.current.getBoundingClientRect();
					setFixed(top <= 0 && window.scrollY !== 0);
				}
			};
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
		return () => {};
	}, []);

	// useEffect(() => {
	// 	if (isFixed) {
	// 		setHidden(menuOpened ? false : scrollDirection === 'down');
	// 	}
	// }, [isFixed, scrollDirection, menuOpened]);

	useEffect(() => {
		if (!isMobileView) {
			setMenuOpened(false);
		}
	}, [isMobileView]);

	const handleNavigation = (i) => {
		setMenuOpened(false);
		history.push(PATHS[i]);
	};
	const handleNavigationAbout = (i) => {
		setMenuOpened(false);
		history.push(DROPMENUPATHS[i]);
	};
	const openMenu = () => {
		if (openAbout === false) {
			setOpenAbout(true);
		} else {
			setOpenAbout(false);
		}
	};

	return (
		<>
			<Box sx={{ ...sx.root, backgroundColor: isFixed ? '#FFF' : 'unset', boxShadow: isFixed ? '0 4px 6px 0 rgba(0,0,0,0.25)' : 'unset' }} ref={rootRef}>
				<Box sx={sx.content}>
					<Box sx={sx.menuBtn} onClick={() => setMenuOpened(true)}>
						<img src={menu} style={{ width: '100%' }} alt='Menu' />
					</Box>
					<Box sx={sx.btnContainer}>
						{BUTTONS.map((btn, i) => {
							if (btn === 'Chimerapillars') {
								return (
									<a key={btn} href={urlChimerapillars} style={{ textDecoration: 'none' }} target="_blank">
										<HeaderButton key={btn} text='← Chimerapillars' vertical />
									</a>
								);
							}
							if (btn === 'About') {
								return (
									<>
										<Box onMouseLeave={() => setOpenAbout(false)}>
											<HeaderButton key={btn} text='About' active={activeTab === i} onMouseOver={() => setOpenAbout(true)} vertical onClick={openMenu} />
											{openAbout && (
												<MenuList
													sx={sx.menuList}
													open={openAbout}
												>
													{DROPMENU.map((btna, k) => (<HeaderButton key={btna} active={activeTabAbout === k} onClick={() => handleNavigationAbout(k)} text={btna} vertical />))}
												</MenuList>
											)}
										</Box>
									</>
								);
							}
							if (btn === 'Rarity') {
								return (
									<a href={urlRarity} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
										<HeaderButton key={btn} text='Rarity' vertical />
									</a>
								);
							}
							if (btn === 'OpenSea') {
								return (
									<a href={urlOpensea} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
										<HeaderButton key={btn} text='OpenSea' vertical />
									</a>
								);
							}
							if (btn == 'Merch'){
								return (
									<a href={urlMaddies} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
										<HeaderButton key={btn} text='Merch' vertical />
									</a>
								);
							}
							if (btn == 'Merge & Burn'){
								return (
									<a href={urlChimerapillarsMerge} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
										<HeaderButton key={btn} text='Merge & Burn' vertical />
									</a>
								);
							}
							return (<HeaderButton key={btn} text={btn} active={activeTab === i} onClick={() => handleNavigation(i)} vertical />);
						})}
					</Box>

					<Box sx={sx.mobileLogoContainer}>
						<Box sx={sx.logo}>
							<a href="/"><img src={logo} style={{ width: '100%' }} alt='Logo' /></a>
						</Box>
					</Box>
					<Box sx={sx.socialButtonContainer}>
						<Box sx={sx.socialContainer}>
							{/*<SocialButton variant='instagram' style={{ width: '27px', height: '27px' }} />*/}
							<SocialButton variant='twitter' style={{ width: '27px', height: '27px' }} />
							<SocialButton variant='discord' style={{ width: '27px', height: '27px' }} />
						</Box>
						{!address && (
							<Button variant='outlined' sx={sx.connectBtn} onClick={handleConnect}>Connect Wallet</Button>
						)}
						{address && isCorrectNetwork && (
							<Box sx={sx.address} onClick={(e) => e.stopPropagation()}>
								<ECAddress address={address} short blockie scale={5} />
								<Box sx={sx.disconnectBtn} onClick={() => handleDisconnect()}>disconnect</Box>
							</Box>
						)}
						{address && !isCorrectNetwork && (
							<Box sx={sx.errorBtn}>Wrong Network</Box>
						)}
					</Box>
				</Box>
				<Divider style={sx.divider} />
			</Box>
			{menuOpened && (
				<SwipeableDrawer
					open={menuOpened}
					onOpen={() => setMenuOpened(true)}
					onClose={() => setMenuOpened(false)}
					anchor='left'
					SlideProps={{ sx: sx.menu }}
				>
					<>
						<Box sx={sx.closeBtn} onClick={() => setMenuOpened(false)}>
							<img src={close} style={{ width: '100%' }} alt='Close' />
						</Box>
						<Box sx={{ px: '48px' }}>
							{MOBILEBUTTONS.map((btn, i) => {
								if (btn === 'Chimerapillars') {
									return (
										<a key={btn} href={urlChimerapillars} style={{ textDecoration: 'none' }} target="_blank">
											<HeaderButton key={btn} text='← Chimerapillars' vertical />
										</a>
									);
								}
								if (btn === 'About') {
									return (
										<>
											<HeaderButton text='About' key={btn} active={activeTab === i} onClick={openMenu} vertical />
											{openAbout && (
												<Box
													sx={sx.menuListVertical}
													style={{ position: 'relative' }}
												>
													{DROPMENU.map((btna, k) => (<HeaderButton key={btna} active={activeTabAbout === k} text={btna} onClick={() => handleNavigationAbout(k)} vertical />))}
												</Box>
											)}
										</>
									);
								}
								if (btn === 'Rarity') {
									return (
										<a href={urlRarity} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
											<HeaderButton key={btn} text='Rarity' vertical />
										</a>
									);
								}
								if (btn === 'OpenSea') {
									return (
										<a href={urlOpensea} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
											<HeaderButton key={btn} text='OpenSea' vertical />
										</a>
									);
								}
								if (btn == 'Merch'){
									return (
										<a href={urlMaddies} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
											<HeaderButton key={btn} text='Merch' vertical />
										</a>
									);
								}
								if (btn == 'Merge & Burn'){
									return (
										<a href={urlChimerapillarsMerge} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
											<HeaderButton key={btn} text='Merge & Burn' vertical />
										</a>
									);
								}
								return (<HeaderButton key={btn} text={btn} active={activeTab === i} onClick={() => handleNavigation(i)} vertical />);
							})}
							<Box sx={sx.socialMobileContainer}>
								<SocialButton variant='instagram' />
								<SocialButton variant='twitter' />
								<SocialButton variant='email' />
								<SocialButton variant='discord' />
							</Box>
						</Box>
					</>
				</SwipeableDrawer>
			)}
		</>
	);
};

export default Header;
