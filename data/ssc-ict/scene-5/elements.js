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
		img: 'ssc-ict-board-1',
		positionY: 139,
		positionX: 143
	},
	{
		img: 'ssc-ict-board-2',
		positionY: 139,
		positionX: 303
	},
	{
		img: 'ssc-ict-board-3',
		positionY: 139,
		positionX: 463
	},
	{
		img: 'ssc-ict-board-4',
		positionY: 139,
		positionX: 623
	},
	{
		img: 'ssc-ict-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		img: 'ssc-ict-character-4',
		positionY: 230,
		positionX: 212,
		flipX: true,
		centerPivot: true
	},
	{
		img: 'ssc-ict-50-c',
		positionY: 183,
		positionX: 793
	},
	{
		img: 'ssc-ict-desk-2',
		positionY: 262,
		positionX: 320
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
		positionX: 828,
		interaction: {
			type: types.NEXT_SCENE,
			endPositionX: 575
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
	}
];
