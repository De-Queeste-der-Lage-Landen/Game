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
		name: 'jio-house',
		img: 'jio-house',
		positionY: 25,
		positionX: 172,
		originalWidth: 934,
		originalHeight: 720,
		positionFromBottom: true,
		scalesToWidth: true
	},
	{
		name: 'main-doors',
		// img: 'jio-door',
		sprite: 'schuifdeur_3_00000000',
		amountOfImages: 49,
		positionY: 430,
		positionX: 467,
		scalesToWidth: true,
		posRelativeTo: 'jio-house',
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
		name: 'jio-zon',
		sprite: 'zon_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 59,
		positionY: 30,
		positionX: 790
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 719
	},
	{
		img: 'tree',
		positionY: 196,
		positionX: 799
	},

	{
		img: 'cow-left',
		positionY: 280,
		positionX: 740
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'character-1',
		img: 'jio-character-1',
		positionY: 230,
		positionX: 230
	}
];
