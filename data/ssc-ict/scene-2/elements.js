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
		positionX: 422
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 683
	},
	{
		img: 'ssc-ict-window-trees',
		positionY: 111,
		positionX: 138
	},
	{
		img: 'ssc-ict-clock',
		positionY: 158,
		positionX: 430
	},
	{
		img: 'ssc-ict-window-trees',
		positionY: 111,
		positionX: 483
	},
	{
		img: 'ssc-ict-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-2',
		img: 'ssc-ict-character-2',
		positionY: 230,
		positionX: 485
	},
	{
		name: 'character-3',
		img: 'ssc-ict-character-3',
		positionY: 230,
		positionX: 610
	},
	{
		img: 'ssc-ict-systeem-beheer',
		positionY: 180,
		positionX: 788
	},
	{
		img: 'ssc-ict-desk',
		positionY: 262,
		positionX: 300,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'decrypt-token',
			endPositionX: 375,
			showLoadingScreen: true
		}
	},
	{
		img: 'ssc-ict-desk',
		positionY: 262,
		positionX: 427
	},
	{
		img: 'ssc-ict-desk',
		positionY: 262,
		positionX: 554
	},
	{
		name: 'water-cooler',
		sprite: 'watercooler_32x84_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 247,
		positionX: 720
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
		// interaction: {
		// 	type: types.NEXT_SCENE,
		// 	endPositionX: 575
		// }
	},
	{
		name: 'character-1',
		img: 'ssc-ict-character-1',
		positionY: 230,
		positionX: 190
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
	}
];
