import types from '@/static/data/types';

export default [
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
		img: 'wainscoting-pink',
		positionY: 260,
		positionX: 0
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'duo-clock-animation',
		sprite: 'klok_36x36_00000000',
		amountOfImages: 21,
		positionY: 161,
		positionX: 70,
		autoPlay: true,
		loop: true
	},
	{
		name: 'right-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 230,
		positionX: 828,
		interaction: {
			type: types.NEXT_SCENE,
			endPositionX: 575
		}
	},
	// {
	// 	name: 'easter-egg-duo-1',
	// 	img: 'controller',
	// 	positionY: 185,
	// 	positionX: 290,
	// 	isEasterEgg: true,
	// 	interaction: {
	// 		type: types.FOUND_EASTER_EGG
	// 	}
	// },
	{
		img: 'exam-board-left',
		positionY: 144,
		positionX: 263
		// interaction: {
		// 	type: types.MOVE_OBJECT,
		// 	duration: 500,
		// 	endPositionX: 363
		// }
	},
	{
		img: 'exam-board-right',
		positionY: 144,
		positionX: 365
	},
	{
		img: 'character-taking-exam-1',
		positionY: 231,
		positionX: 150
	},
	{
		img: 'character-taking-exam-2',
		positionY: 226,
		positionX: 312
	},
	{
		img: 'character-taking-exam-3',
		positionY: 231,
		positionX: 474
	},
	// {
	// 	img: 'duo-character-4',
	// 	positionY: 231,
	// 	positionX: 695
	// },
	{
		name: 'duo-examinator-animation',
		sprite: 'character_zwetende_leraar_39x66_00000000',
		amountOfImages: 24,
		positionY: 231,
		positionX: 720,
		autoPlay: true,
		loop: true
	},
	{
		img: 'duo-desk-1',
		positionY: 263,
		positionX: 638
	},
	{
		img: 'floor-stones',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
