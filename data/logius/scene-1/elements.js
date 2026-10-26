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
		name: 'logius-house',
		img: 'logius-house',
		positionY: 84,
		positionX: 280,
		originalWidth: 343,
		originalHeight: 289
	},
	{
		name: 'main-doors',
		sprite: 'Logius_deur_x_00000000',
		amountOfImages: 14,
		positionY: 158,
		positionX: 169,
		posRelativeTo: 'logius-house',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
		}
	},
	{
		img: 'tree',
		positionY: 125,
		positionX: 70,
		posRelativeTo: 'logius-house'
	},
	{
		img: 'tree',
		positionY: 125,
		positionX: 206,
		posRelativeTo: 'logius-house'
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		img: 'logius-character-1',
		positionY: 231,
		positionX: 195
	},
	{
		img: 'bench-with-tree',
		positionY: 197,
		positionX: 689
	}
];
