import React, { useRef, useState } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import discord from '../../../assets/images/social/discord.svg';
import Divider from '../../common/Divider';
import navPrev from '../../../assets/images/slider-prev.svg';
import navNext from '../../../assets/images/slider-next.svg';
import Explorer from './Explorer';
import SaleCard from './SaleCard';
import Checkout from './Checkout';
import SocialButton from '../../common/SocialButton';

import tp1 from '../../../assets/images/carousel/tp01.jpg';
import cp1 from '../../../assets/images/carousel/cp02.jpg';
import tp2 from '../../../assets/images/carousel/tp13.jpg';
import cp2 from '../../../assets/images/carousel/cp04.jpg';
import tp3 from '../../../assets/images/carousel/tp11.jpg';
import cp3 from '../../../assets/images/carousel/cp06.jpg';
import tp4 from '../../../assets/images/carousel/tp12.jpg';
import cp4 from '../../../assets/images/carousel/cp01.jpg';
import tp5 from '../../../assets/images/carousel/tp02.jpg';
import cp5 from '../../../assets/images/carousel/cp05.jpg';
import tp6 from '../../../assets/images/carousel/tp15.jpg';
import cp6 from '../../../assets/images/carousel/cp03.jpg';


const BP1 = '@media (max-width: 1079px)';
const BP2 = '@media (max-width: 1480px) and (min-width:1199px)';

const COLOR_CYAN = '#19A8B4';

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'center',
		gap: '40px 40px',
		pt: '80px',
		[BP1]: {
			flexWrap: 'wrap',
		},
		[BP2]: {
			flexWrap: 'wrap',
		},
	},
	content: {
		width: '100%',
		maxWidth: '460px',
		// pt: '24px',
		zIndex: '1',
		[BP1]: {
			pt: '40px',
		},
		[BP2]: {
			maxWidth: '70%',
			pt: 0,
		},
	},
	rightContainer: {
		// alignSelf: 'center',
		position: 'relative',
		width: '100%',
		maxWidth: '658px',
		minWidth: '55%',
		boxSizing: 'border-box',
		[BP1]: {
			minWidth: 'unset',
		},
	},
	imageContainer: {
		overflow: 'hidden',
		width: '100%',
		aspectRatio: '1 / 1',
		cursor: 'pointer',
	},
	carouselImageContainer: {
		outline: 'none',
	},
	sliderNavContainer: {
		position: 'relative',
		width: '100%',
		mt: '8px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: '0 24px',
	},
	sliderNavBtn: {
		width: '40px',
		cursor: 'pointer',
	},
	discordBtn: {
		width: '100%',
		maxWidth: '280px',
		height: '44px',
		backgroundColor: 'primary.main',
		borderRadius: '30px',
		mt: '24px',
		mb: '40px',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[BP1]: {
			mx: 'auto',
		},
	},
	socialContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: '0 24px',
		[BP1]: {
			justifyContent: 'center',
		},
	},
	title: {
		[BP1]: {
			textAlign: 'center',
		},
	},
	text1: {
		mt: '16px',
		[BP1]: {
			mt: '24px',
		},
	},
	url: {
		color: COLOR_CYAN,
		'&:hover': {
			textDecoration: 'none',
			color: COLOR_CYAN,
			opacity: 0.9,
		},
	},
	chimeraBtn: {
	  fontSize: 22,
	  minWidth: "150px",
		margin: "auto",
	  marginTop: "1.75em",
	  paddingLeft: "40px",
	  paddingRight: "40px",
	  height: "66px",
	  borderRadius: "33px",
	  cursor: "pointer",
	  display: "flex",
	  justifyContent: "center",
	  alignItems: "center",
	  fontFamily: "roboto-bold",
	  transition: "all .3s",
	  textTransform: "unset",
	  [BP1]: {
	    width: '100%',
  	    paddingLeft: "20px",
  	    paddingRight: "20px",
	  },
	  "&:focus": {
	    outlineColor: COLOR_CYAN,
	  },
	  "&:disabled": {
	    cursor: "not-allowed",
	    opacity: 0.5,
	  },
	},
};

const HEADER_TEXT = `Through a ragged hole in reality crawled 9,999 Toddlerpillar NFTs generated from 888 mind-bending traits. These infantile demigods have turned our reality inside out, but never fear! The Chimerapillars have been summoned to save us! These collections continue the twenty-year history of artist and gallerist Jon Beinart's renowned doll sculptures, imbuing them with fresh psychedelic energy from award-winning artist and madman, Tim Molloy`;

const HEADER2_TEXT = `Toddlerpillar & Chimerapillar holders join an inter-dimensional art collective with access to global gatherings, exclusive airdrops, a 100+ page multimedia graphic novel exploring our lore, IRL collectable toys, metaverse exhibitions, merch & much more!`

const DISCORD_TEXT = 'Join our delightfully strange discord family!';

const IMAGES = [tp1, cp1, tp2, cp2, tp3, cp3, tp4, cp4, tp5, cp5, tp6, cp6];

const url = 'https://discord.gg/nHXHE2TqYa';

const bold = (children) => <Box component='span' sx={{ fontFamily: 'roboto-bold' }}>{children}</Box>;

const sliderConfig = (setCurrentSlide) => ({
	infinite: true,
	speed: 500,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: false,
	// arrows: false,
	autoplay: true,
	autoplaySpeed: 1000,
	adaptiveHeight: true,
	afterChange: setCurrentSlide,
});

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [selectedSlide, setSelectedSlide] = useState(2);
	const [explorerVisible, setExplorerVisible] = useState(false);
	const [checkoutVisible, setCheckoutVisible] = useState(false);
	const [mintInfo, setMintInfo] = useState({
		role: null,
		canMintEc: false,
		canMintSale: false,
		saleMaxToken: 0,
		ecMaxToken: 0,
		ecUserMinted: 0,
		userMinted: 0,
		price: 0,
	});
	const [mainSaleStarted, setMainSaleStarted] = useState(false);

	const vertical = useMediaQuery('(max-width: 1079px)');
	const sliderRef = useRef(null);

	const handleCarouselClicked = () => {
		setSelectedSlide(currentSlide);
		setExplorerVisible(true);
	};

	return (
		<Box sx={sx.root}>
			<Box sx={sx.rightContainer}>
				<Box sx={sx.imageContainer} onClick={handleCarouselClicked}>
					<Slider {...(sliderConfig(setCurrentSlide))} ref={sliderRef}>
						{IMAGES.map((image, i) => (
							<Box key={i.toString()} sx={sx.carouselImageContainer}>
								<img src={image} style={{ width: '100%' }} alt={`Carousel ${i + 1}`} />
							</Box>
						))}
					</Slider>
				</Box>
				<Box sx={sx.sliderNavContainer}>
					<Box />
					{!vertical && (
						<>
							<Box sx={sx.sliderNavBtn} onClick={() => sliderRef.current.slickPrev()}>
								<img src={navPrev} alt='Previous' />
							</Box>
							<Box sx={sx.sliderNavBtn} onClick={() => sliderRef.current.slickNext()}>
								<img src={navNext} alt='Next' />
							</Box>
						</>
					)}
					<Typography sx={{ position: 'absolute', right: 0 }}>{`${currentSlide + 1} of ${IMAGES.length}`}</Typography>
				</Box>
			</Box>
			<Box sx={sx.content}>
				<Box sx={sx.col}>
					<Typography variant='heading2' sx={sx.title}>Toddlerpillars & Chimerapillars</Typography>
					{vertical && <Divider titleDivider />}
					<Typography variant='text' sx={{ ...sx.text1, mb: 2 }}>{HEADER_TEXT}</Typography>

					<Typography variant='text' sx={{ ...sx.text1, mb: 2 }}>{HEADER2_TEXT}</Typography>

					<Typography variant='text' sx={{ ...sx.text1, mb: 2 }}>Over <span style={{ fontFamily: 'roboto-bold'}}>400 unique artworks</span> from our graphic novel will be <span style={{ fontFamily: 'roboto-bold'}}>airdropped</span> to holders over the next few years with hi-res files & commercial rights:
					<i><br />
				• 1 Chimera + 1 Toddler = 80 airdrops
				<br />
				• 2 Chimeras + 2 Toddlers = 160 airdrops
				<br />
				• 3 Chimeras + 3 Toddlers = 240 airdrops
				<br />
				• 6 Chimeras + 6 Toddlers = 320 airdrops
				<br />
				• 9 Chimeras + 9 Toddlers = 400 airdrops</i></Typography>

					{/* {!mainSaleStarted
						&& (
							<Typography variant='text' sx={{ ...sx.text2, my: '16px' }}>
								{bold('Public Sale starts 12pm EST on Nov 19th.')}
							</Typography>
						)} */}
					<br />
					<br />
				</Box>

				<Box sx={sx.col}>
					<Typography variant='heading2' sx={sx.title}>Chimerapillars Public Sale is Live</Typography>
					{vertical && <Divider titleDivider />}
					<Typography variant='text' sx={{ ...sx.text1, mb: 2 }}>8888 Chimerapillars with 888 traits have been summoned to save humanity from the Toddlerpillar apocalypse. Madness and mayhem have plagued the world since the 6 armed bebehs tore a hole in our reality! Can the Chimerapillars rescue their infantile cousins from the corruption of the Lonely Pillar?<br /><br />
					Mint multiple Chimerapillars and customise them with our <a href="https://chimerapillars.com/#/merge" target="_blank" style={{ color: COLOR_CYAN }}>merge & burn</a> DApp. Holders can select their favourite traits from 2 NFTs and merge them into 1 while reducing the supply with a burn mechanism.<br /><br />
					<span style={{ fontWeight: 'bold' }}>Chimerapillars Mint price: 0.03 ETH.</span></Typography>
					{/* <SaleCard
						mintOnClick={(mintInfo) => {
							setCheckoutVisible(true);
							setMintInfo(mintInfo);
						}}
						setMainSaleStarted={setMainSaleStarted}
					/> */}
				</Box>

				<Button
					variant="contained"
					sx={sx.chimeraBtn}
					onClick={(evt) => {
						evt.preventDefault()
						window.open('https://chimerapillars.com')
					}}
				>
					MINT CHIMERAPILLARS
				</Button>

				{/* <Typography variant='text' sx={{ ...sx.text2, mt: '16px' }}>
					{bold(
						<>
							Check collection on
							{' '}
							<Box
								component='a'
								sx={sx.url}
								href='https://opensea.io/collection/toddlerpillars'
								target='_blank'
								rel='noopener noreferrer'
							>
								OpenSea
							</Box>
						</>,
					)}
				</Typography> */}

				{/*
				<Typography variant='text' sx={{ mt: '16px' }}>{DISCORD_TEXT}</Typography>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					<Box sx={sx.discordBtn}>
						<img src={discord} style={{ height: 35 }} alt='Discord' />
					</Box>
				</a>
				<Box sx={sx.socialContainer}>
					<SocialButton variant='instagram' />
					<SocialButton variant='twitter' />
					<SocialButton variant='email' />
				</Box> */}
			</Box>
			<Checkout isOpen={checkoutVisible} setOpen={setCheckoutVisible} mintInfo={mintInfo} />
			<Explorer isOpen={explorerVisible} setOpen={setExplorerVisible} images={IMAGES} initialSlide={selectedSlide} />
		</Box>
	);
};

export default Banner;
