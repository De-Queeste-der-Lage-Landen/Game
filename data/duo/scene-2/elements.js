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
		img: 'wainscoting-purple',
		positionY: 260,
		positionX: 0
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
	{
		img: 'panel-stufi',
		positionY: 148,
		positionX: 142
	},
	{
		img: 'panel-facet',
		positionY: 148,
		positionX: 352
	},
	{
		img: 'panel-diploma',
		positionY: 148,
		positionX: 562
	},
	{
		img: 'duo-character-1',
		positionY: 230,
		positionX: 167
	},
	{
		img: 'duo-character-2',
		positionY: 230,
		positionX: 480
	},
	{
		img: 'duo-character-3',
		positionY: 230,
		positionX: 550
	},
	{
		name: 'coffee-machine',
		sprite: 'koffieautomaat_29x43_00000000',
		amountOfImages: 60,
		autoPlay: true,
		loop: true,
		positionY: 243,
		positionX: 651
	},
	{
		img: 'coffee-table',
		positionY: 285,
		positionX: 635
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
		img: 'floor-stones',
		positionY: 330,
		positionX: 0,
		repeat: true
	}
];
