import types from '@/static/data/types';

export default [
	{
		img: 'lamp',
		positionY: 0,
		positionX: 160
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 422
	},
	{
		img: 'lamp',
		positionY: 0,
		positionX: 683
	},
	{
		img: 'knmi-secondary-bg',
		positionY: 280,
		positionX: 0,
		repeat: true
	},
	{
		name: 'left-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 70
	},
	{
		name: 'right-door',
		sprite: 'deur_81x126_00000000',
		amountOfImages: 18,
		positionY: 220,
		positionX: 828,
		interaction: {
			type: types.NEXT_SCENE,
			endPositionX: 575
		}
	},
	// {
	// 	img: 'code-red-sign-inactive',
	// 	scalesToWidth: true,
	// 	positionY: 185,
	// 	positionX: 788
	// },
	{
		name: 'board-1-green',
		sprite: 'oplichtende_schermen_GROEN_X_1_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 212
	},
	{
		name: 'board-2-green',
		sprite: 'oplichtende_schermen_GROEN_X_2_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 375
	},
	{
		name: 'board-3-green',
		sprite: 'oplichtende_schermen_GROEN_X_3_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 535
	},
	{
		name: 'board-4-green',
		sprite: 'oplichtende_schermen_GROEN_X_4_00000000',
		autoPlay: true,
		loop: true,
		amountOfImages: 48,
		scalesToWidth: true,
		positionY: 120,
		positionX: 695
	},
	{
		img: 'knmi-character-2',
		positionY: 231,
		positionX: 192
	},
	{
		img: 'knmi-character-3',
		positionY: 231,
		positionX: 445
	},
	{
		img: 'knmi-character-4',
		positionY: 231,
		positionX: 528
	},
	{
		img: 'desk-grey-brown',
		positionY: 262,
		positionX: 392
	},
	{
		name: 'water-cooler',
		sprite: 'watercooler_32x84_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 247,
		positionX: 704
	},
	{
		img: 'floor-wood',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
