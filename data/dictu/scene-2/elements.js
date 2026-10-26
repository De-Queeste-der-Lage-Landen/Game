import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	// {
	// 	img: 'dictu-screens-1',
	// 	positionY: 140,
	// 	positionX: 155
	// },
	{
		name: 'board-1',
		sprite: 'screen_1_dictu_304x266_000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 213
	},
	{
		name: 'board-2',
		sprite: 'screen_2_dictu_304x266_000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 373
	},
	{
		name: 'board-3',
		sprite: 'screen_3_dictu_304x266_000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 533
	},
	{
		name: 'board-4',
		sprite: 'screen_4_dictu_304x266_000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 141,
		positionX: 693
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
		img: 'dictu-clock',
		positionY: 158,
		positionX: 52
	},
	{
		img: 'dictu-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		img: 'plant',
		positionY: 238,
		positionX: 162
	},
	{
		name: 'character-2',
		img: 'dictu-character-2',
		positionY: 230,
		positionX: 420
	},
	{
		name: 'character-3',
		img: 'dictu-character-3',
		positionY: 230,
		positionX: 562
	},
	{
		name: 'character-4',
		img: 'dictu-character-4',
		positionY: 230,
		positionX: 717
	},
	{
		img: 'dictu-desk-1',
		positionY: 263,
		positionX: 222,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'tetris',
			endPositionX: 290,
			showLoadingScreen: true
		}
	},
	{
		img: 'dictu-desk-1',
		positionY: 263,
		positionX: 370
	},
	{
		img: 'dictu-desk-2',
		positionY: 263,
		positionX: 516
	},
	{
		img: 'dictu-desk-1',
		positionY: 263,
		positionX: 663
	},
	{
		name: 'easter-egg-dictu-1',
		img: 'controller',
		positionY: 300,
		positionX: 795,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		name: 'water-cooler',
		sprite: 'watercooler_32x84_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 247,
		positionX: 810,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionX: 780
		}
	},
	{
		img: 'dictu-plant',
		positionY: 238,
		positionX: 845
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		img: 'floor-wood',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
