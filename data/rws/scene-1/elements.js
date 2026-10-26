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
		name: 'rws-house',
		img: 'rws-house',
		positionY: 25,
		positionX: 238,
		originalWidth: 840,
		originalHeight: 602,
		positionFromBottom: true,
		scalesToWidth: true
	},
	{
		name: 'main-doors',
		// img: 'rws-door',
		sprite: 'schuifdeur_1_00000000',
		amountOfImages: 30,
		positionY: 344,
		positionX: 423,
		scalesToWidth: true,
		posRelativeTo: 'rws-house',
		interaction: {
			type: types.NEXT_SCENE
			// playSpriteOnFinish: true
		}
	},
	// {
	// 	name: 'ssc-ict-door',
	// 	img: 'ssc-ict-door',
	// 	positionY: 137,
	// 	positionX: 234,
	// 	scalesToWidth: true,
	// 	posRelativeTo: 'ssc-ict-house',
	// 	interaction: {
	// 		type: types.NEXT_SCENE,
	// 		playSpriteOnFinish: true
	// 	}
	// },
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 142
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 772
	},
	{
		img: 'rws-tulip-pink',
		positionY: 280,
		positionX: 725
	},
	{
		img: 'rws-tulip-yellow',
		positionY: 280,
		positionX: 753
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-1',
		img: 'rws-character-1',
		positionY: 230,
		positionX: 175
	}
];
