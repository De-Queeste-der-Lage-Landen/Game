import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'rivm-screen-1',
		sprite: 'scherm_5_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 74,
		scalesToWidth: true,
		positionY: 50,
		positionX: 402
	},
	{
		name: 'rivm-screen-2',
		sprite: 'scherm_6_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 299,
		scalesToWidth: true,
		positionY: 50,
		positionX: 712
	},
	{
		img: 'easter-egg-bg-rivm',
		positionY: 180,
		positionX: 126
	},
	{
		name: 'easter-egg-rivm-2',
		img: 'controller',
		positionY: 175,
		positionX: 148,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		name: 'foxposter',
		sprite: 'rivm_fox_poster_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 125,
		// scalesToWidth: true,
		positionY: 100,
		positionX: 165,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionY: 65
		}
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
		img: 'rivm-clock',
		positionY: 158,
		positionX: 52
	},
	{
		img: 'rivm-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		img: 'rivm-plant',
		positionY: 238,
		positionX: 150
	},
	{
		name: 'character-2',
		img: 'rivm-character-2',
		positionY: 230,
		positionX: 493
	},
	{
		name: 'character-4',
		img: 'rivm-character-4',
		positionY: 230,
		positionX: 640
	},
	{
		name: 'character-3',
		img: 'rivm-character-3',
		positionY: 230,
		positionX: 792
	},
	{
		img: 'rivm-desk',
		positionY: 262,
		positionX: 287,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'whack-a-mole',
			endPositionX: 365,
			showLoadingScreen: true
		}
	},
	{
		img: 'rivm-desk',
		positionY: 262,
		positionX: 437
	},
	{
		img: 'rivm-desk',
		positionY: 262,
		positionX: 587
	},
	{
		img: 'rivm-desk',
		positionY: 262,
		positionX: 737
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'character-1',
		img: 'rivm-character-1',
		positionY: 230,
		positionX: 215,
		centerPivot: true
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
