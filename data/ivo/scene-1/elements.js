import types from '@/static/data/types';

export default [
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	// {
	// 	name: 'easter-egg-justid-1',
	// 	img: 'controller',
	// 	positionY: 290,
	// 	positionX: 35,
	// 	isEasterEgg: true,
	// 	interaction: {
	// 		type: types.FOUND_EASTER_EGG
	// 	}
	// },
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
		name: 'ivo-house',
		img: 'ivo-house',
		positionY: 40,
		positionX: 140,
		originalWidth: 604,
		originalHeight: 249,
		// scalesToWidth: true,
		positionFromBottom: true
	},
	{
		name: 'main-doors',
		sprite: 'Ivo_deur_x_00000000',
		amountOfImages: 14,
		positionY: 165,
		positionX: 300,
		scalesToWidth: true,
		posRelativeTo: 'ivo-house',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
		}
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 300
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 557
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
		img: 'ivo-character-1',
		positionY: 232,
		positionX: 194
	},
	{
		name: 'found-easter-egg',
		img: 'found-easter-egg',
		positionY: -120,
		positionX: 275
	}
];
