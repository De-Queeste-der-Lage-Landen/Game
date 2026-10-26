import types from '@/static/data/types';

export default [
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
		positionY: 168,
		positionX: 608,
		centerPivot: true,
		repeatingAnimation: {
			duration: 50000,
			endPositionX: -50,
			delay: 0
		}
	},
	{
		name: 'duo-house',
		img: 'duo-house',
		positionX: 148,
		positionY: 37,
		originalWidth: 560,
		originalHeight: 287
	},
	{
		name: 'main-doors',
		sprite: 'DUO_deur_175x156_00000000',
		amountOfImages: 11,
		positionY: 135,
		positionX: 282,
		posRelativeTo: 'duo-house',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
		}
	},
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 127
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 702
	},
	{
		img: 'bush',
		positionY: 293,
		positionX: 728
	},
	,
	{
		name: 'easter-egg-duo-2',
		img: 'controller',
		positionY: 287,
		positionX: 802,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		name: 'cow-left',
		sprite: 'koe_70x55_00000000',
		amountOfImages: 15,
		positionY: 278,
		positionX: 817,
		autoPlay: false,
		loop: true,
		interaction: {
			type: types.MOVE_OBJECT,
			playSpriteOnMoving: true,
			duration: 1500,
			endPositionX: 1000
		}
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		img: 'duo-character-1',
		positionX: 257,
		positionY: 230
	}
];
