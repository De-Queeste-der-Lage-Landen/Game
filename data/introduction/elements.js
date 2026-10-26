import types from '@/static/data/types';

export default [
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	{
		name: 'CloudOne',
		img: 'cloud',
		positionY: 105,
		positionX: 751,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: -200,
			delay: 0
		}
	},
	{
		name: 'CloudTwo',
		img: 'cloud-two',
		positionY: 103,
		positionX: 44,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: 1000,
			delay: 0
		}
	},
	{
		name: 'WelcomeTxt',
		text: 'WELKOM',
		positionY: 65,
		positionX: 391,
		fontSize: 20,
		fill: '#6B1200',
		wordWrap: true,
		wordWrapWidth: 640,
		lineHeight: 20,
		align: 'left',
		hideElOnStart: true
	},
	{
		name: 'IntroTxt',
		text: 'WERKEN BIJ DE RIJKSOVERHEID, IS WERKEN VOOR NEDERLAND. WERK MET IMPACT VOOR MEER DAN 17 MILJOEN MENSEN. CYBERAANVALLEN TEGENHOUDEN...',
		positionY: 118,
		positionX: 130,
		fontSize: 10,
		fill: '#00395D',
		wordWrap: true,
		wordWrapWidth: 640,
		lineHeight: 25,
		align: 'center',
		hideElOnStart: true
	},
	{
		name: 'IntroTwoTxt',
		text: '...DE DIGID-OMGEVING UPGRADEN, VERTROUWELIJKE PERSOONSGEGEVENS VERWERKEN, DATA OVER ONS KLIMAAT ANALYSEREN. KUN JIJ ALS IT’ER HIERAAN BIJDRAGEN?',
		positionY: 118,
		positionX: 110,
		fontSize: 10,
		fill: '#00395D',
		wordWrap: true,
		wordWrapWidth: 675,
		lineHeight: 25,
		align: 'center',
		hideElOnStart: true
	},
	{
		name: 'windmill',
		sprite: 'meelmolen70x101_00000000',
		amountOfImages: 12,
		positionY: 224,
		positionX: 125,
		autoPlay: true,
		loop: true,
		animationSpeed: 0.15
	},
	{
		img: 'tree-with-bushes',
		positionY: 238,
		positionX: 17
	},
	{
		name: 'cow-right',
		sprite: 'koe_70x55_00000000',
		amountOfImages: 15,
		positionY: 280,
		positionX: -20,
		autoPlay: true,
		loop: true,
		animationSpeed: 0.3,
		repeatingAnimation: {
			duration: 80000,
			endPositionX: 500,
			delay: 0
		}
	},
	{
		name: 'cow-right',
		sprite: 'koe_70x55_00000000',
		amountOfImages: 15,
		positionY: 280,
		positionX: 296,
		autoPlay: true,
		loop: true,
		animationSpeed: 0.3,
		repeatingAnimation: {
			duration: 65000,
			endPositionX: 950,
			delay: 0
		}
	},
	{
		name: 'cow-right',
		sprite: 'koe_70x55_00000000',
		amountOfImages: 15,
		positionY: 280,
		positionX: 700,
		autoPlay: false,
		loop: true,
		flipX: true,
		animationSpeed: 0.3,
		repeatingAnimation: {
			duration: 80000,
			endPositionX: -50,
			startPlayAfterDelay: true,
			delay: 4000
		}
	},
	{
		img: 'bench-with-tree',
		positionY: 195,
		positionX: 689
	},
	{
		name: 'NextBtn',
		img: 'next-btn',
		scalesToWidth: true,
		positionY: 184,
		positionX: 382,
		interaction: {
			type: types.HIDE_SHOW_EL,
			elementsToShow: ['IntroTwoTxt', 'PlayNowBtn'],
			elementsToHide: ['IntroTxt', 'NextBtn']
		},
		hideElOnStart: true
	},
	{
		name: 'PlayNowBtn',
		img: 'play-now-btn',
		scalesToWidth: true,
		positionY: 184,
		positionX: 382,
		interaction: {
			type: types.CHOOSE_CHAR_SCENE
		},
		hideElOnStart: true
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	}
];
