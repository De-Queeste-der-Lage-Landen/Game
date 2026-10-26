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
		name: 'rivm-house',
		img: 'rivm-house',
		positionY: 25,
		positionX: 214,
		originalWidth: 934,
		originalHeight: 720,
		positionFromBottom: true,
		scalesToWidth: true
	},
	{
		name: 'main-doors',
		sprite: 'schuifdeur_4_00000000',
		amountOfImages: 49,
		positionY: 490,
		positionX: 466,
		scalesToWidth: true,
		posRelativeTo: 'rivm-house',
		interaction: {
			type: types.NEXT_SCENE
			// playSpriteOnFinish: true
		}
	},
	{
		name: 'cow-right',
		sprite: 'koe_70x55_00000000',
		amountOfImages: 15,
		positionY: 280,
		positionX: -20,
		autoPlay: true,
		loop: true,
		animationSpeed: 0.3,
		repeatingAnimation: {
			duration: 80000,
			endPositionX: 500,
			delay: 0
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
		positionX: 160
	},
	{
		name: 'easter-egg-rivm-1',
		img: 'controller',
		positionY: 235,
		positionX: 738,
		isEasterEgg: true,
		interaction: {
			type: types.FOUND_EASTER_EGG
		}
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 719,
		interaction: {
			type: types.MOVE_OBJECT,
			duration: 500,
			endPositionX: 650
		}
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 799
	},
	{
		img: 'rivm-tulip-pink',
		positionY: 280,
		positionX: 605
	},
	{
		img: 'rivm-tulip-yellow',
		positionY: 280,
		positionX: 633
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-1',
		img: 'rivm-character-1',
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
