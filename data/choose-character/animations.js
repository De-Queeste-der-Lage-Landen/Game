import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';
import easings from '../easings';

export default [
	{
		name: 'game-character-1',
		sprite: 'character-7-',
		amountOfImages: 12,
		posScaleToHeight: true,
		loop: true,
		positionY: 100,
		alpha: 0,
		positionX: 145,
		interaction: {
			type: types.SET_CHAR,
			index: 1,
			isCharacter: true
		},
		animation: {
			type: animationTypes.DROP_FROM_SKY,
			duration: 400,
			alpha: 0,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 180
		}
	},
	{
		name: 'game-character-2',
		sprite: 'character-8-',
		amountOfImages: 12,
		posScaleToHeight: true,
		loop: true,
		positionY: 120,
		alpha: 0,
		positionX: 254,
		interaction: {
			type: types.SET_CHAR,
			index: 2,
			isCharacter: true
		},
		animation: {
			type: animationTypes.DROP_FROM_SKY,
			duration: 400,
			alpha: 0,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 180,
			offset: '-=200'
		}
	},
	{
		name: 'game-character-3',
		sprite: 'character-9-',
		amountOfImages: 13,
		posScaleToHeight: true,
		loop: true,
		positionY: 120,
		alpha: 0,
		positionX: 364,
		interaction: {
			type: types.SET_CHAR,
			index: 3,
			isCharacter: true
		},
		animation: {
			type: animationTypes.DROP_FROM_SKY,
			duration: 400,
			alpha: 0,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 180,
			offset: '-=200'
		}
	},
	{
		name: 'game-character-4',
		sprite: 'character-10-',
		amountOfImages: 12,
		posScaleToHeight: true,
		loop: true,
		positionY: 120,
		alpha: 0,
		positionX: 472,
		interaction: {
			type: types.SET_CHAR,
			index: 4,
			isCharacter: true
		},
		animation: {
			type: animationTypes.DROP_FROM_SKY,
			duration: 400,
			alpha: 0,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 180,
			offset: '-=200'
		}
	},
	{
		name: 'game-character-5',
		sprite: 'character-11-',
		amountOfImages: 12,
		posScaleToHeight: true,
		loop: true,
		positionY: 120,
		alpha: 0,
		positionX: 587,
		interaction: {
			type: types.SET_CHAR,
			index: 5,
			isCharacter: true
		},
		animation: {
			type: animationTypes.DROP_FROM_SKY,
			duration: 400,
			alpha: 0,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 180,
			offset: '-=200'
		}
	},
	{
		name: 'game-character-6',
		sprite: 'character-12-',
		amountOfImages: 13,
		posScaleToHeight: true,
		loop: true,
		positionY: 120,
		alpha: 0,
		positionX: 698,
		interaction: {
			type: types.SET_CHAR,
			index: 6,
			isCharacter: true
		},
		animation: {
			type: animationTypes.DROP_FROM_SKY,
			duration: 400,
			alpha: 0,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 180,
			offset: '-=200'
		}
	}
];
