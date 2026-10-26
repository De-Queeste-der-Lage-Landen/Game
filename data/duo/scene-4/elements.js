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
		img: 'wainscoting-yellow',
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
		img: 'plan-board-today',
		scalesToWidth: true,
		positionY: 154,
		positionX: 175
	},
	{
		img: 'plan-board-tomorrow',
		scalesToWidth: true,
		positionY: 154,
		positionX: 342
	},
	{
		img: 'duo-window-trees',
		scalesToWidth: true,
		positionY: 122,
		positionX: 525
	},
	{
		img: 'duo-character-5',
		positionY: 231,
		positionX: 465
	},
	{
		img: 'duo-character-6',
		positionY: 231,
		positionX: 652
	},
	{
		img: 'duo-desk-2',
		positionY: 263,
		positionX: 225,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'exams-issue',
			endPositionX: 295,
			showLoadingScreen: true
		}
	},
	{
		img: 'duo-desk-2',
		positionY: 263,
		positionX: 412
	},
	{
		img: 'duo-desk-2',
		positionY: 263,
		positionX: 599
	},
	{
		name: 'water-cooler',
		sprite: 'watercooler_32x84_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 247,
		positionX: 825
	},
	{
		img: 'floor-stones',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
