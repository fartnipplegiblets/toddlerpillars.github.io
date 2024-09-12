import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Divider from './common/Divider';
import Discord from './common/Discord';
import Paragraph from './common/Paragraph';

const BP1 = '@media (max-width: 1079px)';

const sx = {
	title: {
		textAlign: 'center',
		mt: '80px',
		[BP1]: {
			mt: '56px',
		},
	},
	divider: {
		mt: '80px',
		[BP1]: {
			mt: '56px',
		},
	},
	textContainer: {
		width: '100%',
		mt: '40px',
		display: 'flex',
		flexDirection: 'row',
		gap: '32px 40px',
		[BP1]: {
			mt: '32px',
			flexDirection: 'column',
		},
	},
	subtitle: {
		mb: '16px',
	},
	textCol: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: '32px',
		zIndex: '1',
	},
};

const TEXT2 = 'Youtube, Twitch and Podcast interviews with project creators Jon Beinart & Tim Molloy. They will also frequently participate in Twitter spaces to talk about the project.';
const TEXT3 = 'We will research ways in which we can enhance our project by adding utility to our tokens and pave the way for future interactivity with the metaverse. '
	+ 'This will include post-mint plans for a blockchain-based Toddlerpillar game and 3D assets for the Metaverse.';
const TEXT4 = [
	'Our illustrator, Tim Molloy will draw around the clock and produce as many strange trait variants as is humanly possible and we will continue to share sneak-peeks in our discord '
	+ 'and on Twitter. A number of these traits have been suggested by community members on our discord.',
	'One of our aims for this project is to create an enormous variety of unique traits, ensuring that even the most "common" Toddlerpillars will be far from that! Every Toddlerpillar '
	+ 'will look dramatically different to its siblings. So much so, that those special creatures, with a combination of the rarest traits, including a handful of 1/1 traits, will be '
	+ 'highly coveted by collectors!',
];

const TEXT5 = [
	'Superchief Gallery NFT will arrange a Toddlerpillar installation at SCOPE during Miami Art Week/Miami Art Basel 2021. They will also arrange a featured booth at Miami '
	+ 'DCentral 2021 (Defi Conference) for Toddlerpillars.',
	'Both Opensea and Juxtapoz Magazine will host twitter spaces for Toddlerpillars.',
	'Jon Beinart and Tim Molloy will reach out to NFT and Crypto influencers on Youtube, Podcasts and streaming services for interviews. They will also frequently participate '
	+ 'in Twitter spaces to talk about the Toddlerpillars project. There will be more giveaways in collaboration with other NFT projects & Twitter influencers.',
];

const TEXT6 = [
	`Jon Beinart and Tim Molloy will start working on their next NFT project, Chimerapillars,
	which they aim to launch in the second quarter of 2022. Chimerapillars will be loyal
	companions to the Toddlerpillars and as such, every Toddlerpillar token holder will be able to
	claim a free Chimerapillar!`,
	`All Toddlerpillar parents (token holders) will also gain access to the VIP Presale for the Chimerapillars drop.
	This next series will be just as intricate and bizarre as the Toddlerpillars series, only much more cuddly.`,
];

const TEXT7 = 'We will collaborate with skilled 3D digital artists to create still & animated Toddlerpillar assets for the Metaverse. '
	+ 'We will also release a series of real world Toddlerpillar vinyl toys as well as other merch.';
const TEXT8 = 'We will collaborate with new creative and interesting NFT projects by airdropping their tokens to random holders of Toddlerpillars. '
	+ 'These projects will be curated and will need to complement our own aesthetics, themes and community.';
const TEXT9 = 'We\'ll arrange three large gatherings of Toddlerpillar token holders for 2022. The first will take place at Beinart Gallery in '
	+ 'Melbourne, Australia, the second in Los Angeles, USA and the third at Superchief Gallery NFT in NYC, USA. These events will provide a wonderful '
	+ 'opportunity for community members to get to know each other in real life and discuss future plans for all things Toddlerpillar.';
const TEXT10 = 'In early 2022, Tim Molloy will create another set of completely unique 1/1 Toddlerpillar-themed NFTs to be airdropped to a random '
	+ 'group of Toddlerpillar parents (token holders). We will also airdrop a limited edition Toddlerpillar-themed NFT to a group of holders.';
const TEXT11 = 'Our medium to long-term goal is to develop a blockchain-based game for Toddlerpillar token holders and in 2022 we will research the '
	+ 'various approaches to gamification. We are also hoping to team up with an animation studio who can bring the Toddlerpillars to life in an animated series for adults.';
const TEXT12 = 'We will continue to develop the Toddlerpillars brand & mythology with new related projects and continues exploration of integration with the metaverse.';

const bold = (children) => <Box component='span' sx={{ fontFamily: 'roboto-bold' }}>{children}</Box>;

const Roadmap = () => {
	const history = useHistory();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const { hash } = history.location;
		if (hash && document.getElementById(hash.substr(1))) {
			// Check if there is a hash and if an element with that id exists
			document.getElementById(hash.substr(1)).scrollIntoView({ behavior: 'smooth' });
		}
	}, [history.location.hash]); // Fi

	return (
		<>
			<Typography variant='heading1' sx={sx.title}>2022 - Early 2023</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Chimerapillars: Our Companion Collection</Typography>
						<Typography variant='text'>8888 Chimerapillars with 888 traits have been summoned to save humanity from the Toddlerpillar apocalypse. Madness and mayhem have plagued the world since the 6 armed bebehs tore a hole in our reality! Can the Chimerapillars rescue their infantile cousins from the corruption of the lonely pillar? You can mint a Chimerapillar for 0.03 ETH on our website: <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="https://chimerapillars.com" target="_blank">https://chimerapillars.com</a></Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Chimerapillar Trait Merge and Burn</Typography>
						<Typography variant='text'>The <a href="https://chimerapillars.com/#/merge" target="_blank" style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }}>merge & burn</a> is now live!  Holders with multiple Chimerapillars can select their favourite traits from two NFTs and merge them into one, while burning the other NFT with the rejected traits. This enables holders to customise their Chimerapillars and improve their rarity, while decreasing the supply & collection size.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Multimedia Graphic Novel & 400+ Airdrops for Holders</Typography>
						<Typography variant='text'>Our multimedia graphic novel will explore the psychedelic dystopian story of the Toddlerpillars and Chimerapillars with over 100 pages of highly detailed art, including a number of animations. This online publication will be available on our website for everyone to enjoy, but only our holders will receive free NFTs of the individual artworks and animations with full commercial rights and unlockable hi-res files. <span style={{ fontFamily: 'roboto-bold'}}>400 unique artworks</span> will be airdropped to our holders over the next few years:
						<i><br />
						• 1 Chimera + 1 Toddler = 80 airdrops
				<br />
				• 2 Chimeras + 2 Toddlers = 160 airdrops
				<br />
				• 3 Chimeras + 3 Toddlers = 240 airdrops
				<br />
				• 6 Chimeras + 6 Toddlers = 320 airdrops
				<br />
				• 9 Chimeras + 9 Toddlers = 400 airdrops<br /></i>We also hope to release the graphic novel in print at a later date through a publisher.</Typography>
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Pillarian Art Museum in the Metaverse</Typography>
						<Typography variant='text'>We're collecting Toddlerpillar and Chimerapillar inspired NFTs by some of the most
						talented artists and animators in Web 3 in our <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="https://opensea.io/Pillarverse-Art-Vault" target="_blank">Pillaverse Art Vault</a>.
						We will build a Pillarian Art Museum in the metaverse to permanently showcase this collection. Each artwork is like a portal to a parallel pillarverse, governed by the imagination of it's creator.
						We encourage all creatives to participate in our project by expanding upon the Pillarian multiverse with full creative licence.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>1/1 & Limited Edition Airdrops for Holders on Discord</Typography>
						<Typography variant='text'>Tim Molloy will continue creating 1/1 hero & villian themed Pillar NFTs and
						limited edition Pillar NFTs. Holders with 9 or more Toddlerpillars or Chimerapillars (The Nines) can enter a
						weekly draw to win themed 1/1 NFTs & holders who participate in Discord activities can earn larval gems,
						which can be exchanged for limited edition NFTs in our Discord shop.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Custom Blank Toddlerpillar Toy Contest & Gallery Exhibitions</Typography>
						<Typography variant='text'>We’ve teamed up with <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="https://ismtoys.ca/" target="_blank">IsmToys</a> to
						release a custom blank Toddlerpillar toy for artists to modify
						and paint for two huge gallery exhibitions and a competition.
						All of the custom toys will be exhibited and sold on consignment.
						One exhibition will take place in Los Angeles at Superchief
						Gallery and the other will take place in Melbourne Australia with
						This is Not a Toy Company. Both events will double as
						Toddlerpillar meetups. A downloadable 3D file of the blank will
						also be available for digital artists to customise for the
						digital art category of our contest. An artist will be selected
						from each category to win an 8” hand painted designer
						Toddlerpillar toy, created by IsmToys and 20 runners up will be selected to win Toddlerpillar & Chimerapillar NFTs.</Typography>
					</Box>
				</Box>
			</Box>
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>

				</Box>
				<Box sx={sx.textCol}>

				</Box>

			</Box>
			<Divider style={sx.divider} />
			<Typography variant='heading1' sx={sx.title}>Mid 2023 & Beyond</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Toddlerpillar Toys</Typography>
						<Typography variant='text'>We will work with various toy companies to
						create both limited edition & open edition Toddlerpillar toys. These
						will include full figure vinyl Toddlerpillars as well as toys of
						specific traits. Some of these toys will be limited editions that are
						exclusively available to Toddlerpillar parents and others will be open
						editions that are widely available, with a significant discount for
						Toddlerpillar parents.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Long Term Vision of An Animated Series</Typography>
						<Typography variant='text'>
						We'll pitch our graphic novel to various animation studios and production companies and hope to find a team
						who are interested in producing an animated series based on the story of our strange bebehs. Our dream would
						be to work with Adult Swim.
						</Typography>
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Expansion of the Toddlerpillars Brand & Metaverse Integration</Typography>
						<Typography variant='text'>We will continue to develop the Toddlerpillars brand & story with new
						related projects and continued exploration of integration with the metaverse as it evolves.</Typography>
					</Box>
				</Box>
			</Box>
			<Discord />
		</>
	);
};

export default Roadmap;
