import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		img: 'lamp',
		positionY: 0,
		positionX: 160
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 683
	},
	// {
	// 	img: 'ssc-ict-board-1',
	// 	positionY: 139,
	// 	positionX: 143
	// },
	{
		img: 'easter-egg-bg-ivo',
		positionY: 142,
		positionX: 146
	},
	{
		name: 'easter-egg-ssc-ict-1',
		img: 'controller',
		positionY: 175,
		positionX: 198,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		name: 'board-1',
		sprite: 'ssc-ict_blauweschermen_612x100_scherm1_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 213,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionY: 80
			// endPositionX: 303
		}
	},
	{
		name: 'board-2',
		sprite: 'ssc-ict_blauweschermen_612x100_scherm2_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 373
	},
	// {
	// 	img: 'ssc-ict-board-2',
	// 	positionY: 139,
	// 	positionX: 303,
	// 	interaction: {
	// 		type: types.MOVE_OBJECT,
	// 		duration: 500,
	// 		endPositionY: 80
	// 		// endPositionX: 303
	// 	}
	// },
	{
		img: 'lamp',
		positionY: 0,
		positionX: 422
	},
	{
		name: 'board-3',
		sprite: 'ssc-ict_blauweschermen_612x100_scherm3_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 533
	},
	// {
	// 	img: 'ssc-ict-board-3',
	// 	positionY: 139,
	// 	positionX: 463
	// },
	{
		name: 'board-4',
		sprite: 'ssc-ict_blauweschermen_612x100_scherm4_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 693
	},
	// {
	// 	img: 'ssc-ict-board-4',
	// 	positionY: 139,
	// 	positionX: 623
	// },
	{
		img: 'ssc-ict-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		img: 'ssc-ict-character-4',
		positionY: 230,
		positionX: 212
	},
	{
		img: 'ssc-ict-50-c',
		positionY: 183,
		positionX: 793
	},
	{
		img: 'ssc-ict-desk-2',
		positionY: 260,
		positionX: 320,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'vdi-issue',
			endPositionX: 475,
			showLoadingScreen: true
		}
	},
	{
		img: 'ssc-ict-occupied-desk',
		positionY: 230,
		positionX: 464
	},
	{
		img: 'ssc-ict-red-bike',
		positionY: 280,
		positionX: 682
	},
	{
		img: 'ssc-ict-table-plant',
		positionY: 247,
		positionX: 605,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-4'
		}
	},
	{
		img: 'ssc-ict-ball',
		positionY: 279,
		positionX: 262,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-5'
		}
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'right-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 828
	},
	{
		img: 'ssc-ict-poster',
		positionY: 236,
		positionX: 43,
		interaction: {
			type: types.OPEN_TEXT_CLOUD,
			index: 'text-cloud-character-6'
		}
	},
	{
		img: 'floor-wood',
		positionY: 330,
		positionX: 0,
		repeat: true
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	},
	{
		name: 'text-cloud-character-4',
		text: '<light-purple>WIST JE DAT</light-purple> SSC-ICT 140 RIJKS-APPLICATIES IN BEHEER HEEFT',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 520,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 240,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-character-5',
		text: '<light-purple>WIST JE DAT</light-purple> SSC-ICT OOK ICT-ONDERSTEUNING BIEDT AAN ALLE AMBASSADES EN CONSULATEN WERELDWIJD',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 180,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 260,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-character-6',
		text: '<light-purple>WIST JE DAT</light-purple> SSC-ICT 584 KM KABEL IN GEBRUIK HEEFT IN HET DATACENTER',
		hasTextCloud: 'normal',
		positionY: 60,
		positionX: 10,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 120,
		hideElOnStart: true,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	}
];
