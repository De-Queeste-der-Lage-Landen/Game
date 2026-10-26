import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		img: 'logo-wall',
		positionY: -40,
		positionX: 148
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 160
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 422
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 683
	},
	{
		img: 'ivo-secondary-bg-2',
		positionY: 260,
		positionX: 0
	},
	{
		img: 'ivo-character-3',
		positionY: 229,
		positionX: 379
	},
	{
		img: 'ivo-character-4',
		positionY: 229,
		positionX: 516
	},
	{
		img: 'ivo-character-5',
		positionY: 229,
		positionX: 657
	},
	{
		img: 'ivo-desk-sensei',
		positionY: 262,
		positionX: 189,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'riddles',
			endPositionX: 250,
			showLoadingScreen: true
		}
	},
	{
		img: 'ivo-desk-1',
		positionY: 262,
		positionX: 325
		// interaction: {
		// 	type: types.MOVE_TO_OBJECT,
		// 	startGameAfterLoading: 'riddles',
		// 	endPositionX: 390,
		// 	showLoadingScreen: true
		// }
	},
	{
		img: 'ivo-desk-2',
		positionY: 262,
		positionX: 462
		// interaction: {
		// 	type: types.MOVE_TO_OBJECT,
		// 	startGameAfterLoading: 'riddles',
		// 	endPositionX: 530,
		// 	showLoadingScreen: true
		// }
	},
	{
		img: 'ivo-desk-1',
		positionY: 262,
		positionX: 602
		// interaction: {
		// 	type: types.MOVE_TO_OBJECT,
		// 	startGameAfterLoading: 'riddles',
		// 	endPositionX: 660,
		// 	showLoadingScreen: true
		// }
	},
	{
		img: 'world-globe',
		positionY: 181,
		positionX: 229,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'riddle-four',
			endPositionX: 250,
			showLoadingScreen: false
		}
	},
	{
		img: 'books',
		positionY: 190,
		positionX: 273,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'riddle-two',
			endPositionX: 300,
			showLoadingScreen: false
		}
	},
	// {
	// 	img: 'old-radio',
	// 	positionY: 180,
	// 	positionX: 319
	// },
	{
		name: 'ghettoblaster-ivo-anim',
		sprite: 'ghettoblaster_56x59_00000000',
		amountOfImages: 21,
		positionY: 161,
		positionX: 350,
		autoPlay: true,
		loop: true
	},
	{
		img: 'wooden-plank',
		positionY: 221,
		positionX: 212
	},
	{
		img: 'jagermeister',
		positionY: 190,
		positionX: 512
	},
	{
		name: 'cactus',
		img: 'little-cactus',
		positionY: 190,
		positionX: 540
		// interaction: {
		// 	type: types.CLICK_ON_OBJECT,
		// 	showTextCloud: true,
		// 	textCloud: {
		// 		name: 'text-cloud-key',
		// 		text: 'RAADSEL...',
		// 		hasTextCloud: 'normal',
		// 		positionY: 125,
		// 		positionX: 520,
		// 		fontSize: 10,
		// 		lineHeight: 20,
		// 		fill: '#77593C',
		// 		wordWrap: true,
		// 		wordWrapWidth: 100,
		// 		align: 'center'
		// 	}
		// }
	},
	// {
	// 	img: 'desk-lamp',
	// 	positionY: 170,
	// 	positionX: 623
	// },
	{
		name: 'lamp-ivo-anim',
		sprite: 'ivo_lamp_50x55_00000000',
		amountOfImages: 38,
		positionY: 165,
		positionX: 645,
		autoPlay: true,
		loop: true
	},
	{
		img: 'wooden-plank',
		positionY: 221,
		positionX: 492
	},
	{
		img: 'fire-extinguisher',
		positionY: 269,
		positionX: 735,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'riddle-three',
			endPositionX: 750,
			showLoadingScreen: false
		}
	},
	{
		img: 'ivo-plant',
		positionY: 238,
		positionX: 781
	},
	{
		img: 'ivo-plant',
		positionY: 238,
		positionX: 813
	},
	{
		img: 'ivo-plant',
		positionY: 237,
		positionX: 845
	},
	{
		img: 'court-room',
		positionY: 183,
		positionX: 35
	},
	{
		img: 'mirror-sun',
		positionY: 117,
		positionX: 788,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'riddle-one',
			endPositionX: 800,
			showLoadingScreen: false
		}
	},
	{
		img: 'ivo-character-2',
		positionY: 229,
		positionX: 139
	},
	{
		img: 'future-teller-ball',
		positionY: 305,
		positionX: 582
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		img: 'floor-rocks',
		positionY: 330,
		positionX: 0,
		repeat: true
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	}
];
