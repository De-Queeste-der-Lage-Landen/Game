import types from '@/static/data/types';

export default [
	{
		img: 'lamp',
		positionY: 0,
		positionX: 422
	},
	{
		img: 'bricks-small',
		positionY: 126,
		positionX: 86
	},
	{
		img: 'bricks-big',
		positionY: 118,
		positionX: 287
	},
	{
		img: 'bricks-small',
		positionY: 81,
		positionX: 623
	},
	{
		img: 'bricks-small',
		positionY: 151,
		positionX: 841
	},
	{
		img: 'bricks-small',
		positionY: 238,
		positionX: 742
	},
	{
		name: 'arcade',
		sprite: 'arcadekast_62x100_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 236,
		positionX: 690
	},
	{
		name: 'catposter',
		sprite: 'katposter_83x103_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 178,
		positionX: 220
	},
	{
		name: 'spider',
		sprite: 'spin_31x57_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 60,
		scalesToWidth: true,
		positionY: 0,
		positionX: 754
	},
	{
		img: 'photo',
		positionY: 210,
		positionX: 568
	},
	{
		img: 'trash',
		positionY: 287,
		positionX: 512
	},
	{
		name: 'aivd-character-3',
		// img: 'aivd-character-3',
		sprite: 'character_G_walk_61x150_00000000',
		isCharacter: true,
		amountOfImages: 12,
		centerPivot: true,
		positionY: 230,
		positionX: 465
	},
	{
		img: 'spiderweb',
		positionY: 283,
		positionX: 351
	},
	{
		img: 'spiderweb-ceiling',
		positionY: 0,
		positionX: 837
	},
	{
		img: 'aivd-desk',
		positionY: 263,
		positionX: 392,
		interaction: {
			type: types.MOVE_TO_OBJECT,
			startGameAfterLoading: 'decode-message',
			endPositionX: 455
		}
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		img: 'floor-rocks',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
