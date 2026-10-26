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
		name: 'ssc-ict-house',
		img: 'ssc-ict-house',
		positionY: 40,
		positionX: 135,
		originalWidth: 604,
		originalHeight: 249,
		positionFromBottom: true,
		scalesToWidth: true
	},
	{
		name: 'main-doors',
		sprite: 'sscict_deur_138x117_00000000',
		amountOfImages: 30,
		positionY: 145,
		positionX: 302,
		scalesToWidth: true,
		posRelativeTo: 'ssc-ict-house',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
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
		positionX: 727
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 803
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-1',
		img: 'ssc-ict-character-1',
		positionY: 230,
		positionX: 230
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	}
];
