import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';
import easings from '@/static/data/easings';

export default [
	{
		name: 'QueesteLogo',
		sprite: 'textrol_dequeeste_400x131_00000000',
		amountOfImages: 23,
		autoPlay: false,
		loop: false,
		scalesToWidth: true,
		center: true,
		width: 400,
		positionY: 53,
		positionX: 448,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			playSpriteOnFinish: true,
			endPositionY: 72,
			duration: 400,
			offset: '+=300'
		}
	},
	{
		name: 'StartGameBtn',
		img: 'start-game-btn',
		scalesToWidth: true,
		positionY: 250,
		positionX: 375,
		animation: {
			type: animationTypes.FADE_IN,
			easing: easings.EASE_OUT_EXPO,
			endPositionY: 210,
			endPositionYPercentage: true,
			duration: 1000,
			offset: '+=50'
		},
		interaction: {
			type: types.HIDE_SHOW_EL,
			elementsToShow: ['WelcomeTxt', 'IntroTxt', 'NextBtn'],
			elementsToHide: ['CloudOne', 'CloudTwo', 'QueesteLogo', 'StartGameBtn']
		}
	}
];
