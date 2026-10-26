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
		img: 'knmi-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		img: 'window-with-trees',
		positionY: 131,
		positionX: 175
	},
	{
		img: 'clock-5-to-8',
		positionY: 156,
		positionX: 498
	},
	{
		name: 'easter-egg-knmi-1',
		img: 'controller',
		positionY: 210,
		positionX: 635,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		name: 'plan-board-today',
		img: 'plan-board-today',
		scalesToWidth: true,
		positionY: 154,
		positionX: 591,
		interaction: {
			type: types.MOVE_OBJECT,
			endPositionX: 460
		}
	},
	{
		img: 'plan-board-tomorrow',
		scalesToWidth: true,
		positionY: 154,
		positionX: 741
	},
	{
		img: 'knmi-character-5',
		positionY: 227,
		positionX: 419
	},
	{
		name: 'knmi-character-6',
		img: 'knmi-character-6',
		positionY: 227,
		positionX: 562
	},
	{
		name: 'knmi-character-7',
		img: 'knmi-character-7',
		positionY: 231,
		positionX: 712
	},
	{
		img: 'floor-wood',
		positionY: 330,
		positionX: 0,
		repeat: true
	},
	{
		img: 'desk-grey-brown',
		posScaleToHeight: true,
		name: 'desk-grey-brown',
		positionY: 263,
		positionX: 223,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			endPositionX: 295
		}
	},
	{
		img: 'desk-grey-brown',
		posScaleToHeight: true,
		positionY: 263,
		positionX: 370
	},
	{
		name: 'knmi-desk',
		img: 'desk-grey-brown-books',
		posScaleToHeight: true,
		positionY: 261,
		positionX: 517
	},
	{
		img: 'desk-grey-brown',
		posScaleToHeight: true,
		positionY: 263,
		positionX: 664
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	}
];
