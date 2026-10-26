import types from '@/static/data/types';

export default [
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	{
		name: 'easter-egg-justid-1',
		img: 'controller',
		positionY: 290,
		positionX: 35,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		name: 'cow-right',
		sprite: 'koe_70x55_00000000',
		amountOfImages: 15,
		positionY: 280,
		positionX: 50,
		animationSpeed: 0.3,
		loop: true,
		interaction: {
			type: types.MOVE_OBJECT,
			endPositionX: 110,
			duration: 1300,
			playSpriteOnMoving: true
		}
	},
	{
		img: 'cow-left',
		positionY: 280,
		positionX: 500
	},
	{
		img: 'cloud',
		positionY: 73,
		positionX: 70,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: 800,
			delay: 0
		}
	},
	{
		img: 'cloud',
		positionY: 176,
		positionX: 187,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: -50,
			delay: 0
		}
	},
	{
		img: 'cloud',
		positionY: 168,
		positionX: 608,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: 600,
			delay: 0
		}
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 655
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 745
	},
	{
		name: 'justid-house',
		img: 'justid-house',
		positionY: 72,
		positionX: 298,
		originalWidth: 287,
		originalHeight: 258
	},
	{
		name: 'main-doors',
		sprite: 'Justid_deur_x_00000000',
		amountOfImages: 14,
		positionY: 137,
		positionX: 142,
		posRelativeTo: 'justid-house',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
		}
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-1',
		img: 'justid-character-4',
		positionY: 231,
		positionX: 299
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	}
];
