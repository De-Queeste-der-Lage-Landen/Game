import types from '@/static/data/types';

export default [
	{
		img: 'rijksoverheid-logo',
		positionY: 0,
		positionX: 435
	},
	{
		img: 'floor-grass',
		positionY: 312,
		positionX: 0,
		repeat: true
	},
	{
		name: 'CharacterTxt',
		text: 'KIES JE CHARACTER',
		positionY: 65,
		positionX: 291,
		fontSize: 20,
		fill: '#6B1200',
		wordWrap: true,
		wordWrapWidth: 640,
		lineHeight: 20,
		align: 'left'
	},
	{
		name: 'NextBtn',
		img: 'next-btn',
		scalesToWidth: true,
		positionY: 118,
		positionX: 382,
		interaction: {
			type: types.SELECT_ORGANISATION_SCENE
		},
		hideElOnStart: true
	}
	// {
	// 	sprite: [
	// 		images.SpriteCharacter1Frame1,
	// 		images.SpriteCharacter1Frame2,
	// 		images.SpriteCharacter1Frame3,
	// 		images.SpriteCharacter1Frame4,
	// 		images.SpriteCharacter1Frame5,
	// 		images.SpriteCharacter1Frame6,
	// 		images.SpriteCharacter1Frame7,
	// 		images.SpriteCharacter1Frame8
	// 	],
	// 	positionY: 150,
	// 	positionX: 20,
	// 	interaction: {
	// 		type: types.SET_CHAR,
	// 		index: 1,
	// 		isCharacter: true
	// 	}
	// },
];
