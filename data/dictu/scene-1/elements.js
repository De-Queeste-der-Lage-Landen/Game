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
		name: 'dictu-house',
		img: 'dictu-house',
		positionY: 25,
		positionX: 168,
		originalWidth: 1120,
		originalHeight: 760,
		positionFromBottom: true,
		scalesToWidth: true
	},
	{
		name: 'main-doors',
		sprite: 'door-dictu_000',
		amountOfImages: 50,
		positionY: 514,
		positionX: 560,
		scalesToWidth: true,
		posRelativeTo: 'dictu-house',
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
		positionX: 10
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 147
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 632
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 709
	},
	{
		img: 'cow-left',
		positionY: 280,
		positionX: 740
	},
	{
		img: 'dictu-bike',
		positionY: 275,
		positionX: 525
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-1',
		img: 'dictu-character-1',
		positionY: 230,
		positionX: 230
	}
];
