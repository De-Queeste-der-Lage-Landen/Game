import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';
import easings from '@/static/data/easings';

export default [
	{
		name: 'AivdLogo',
		sprite: 'textrol_aivd_400x131_00000000',
		amountOfImages: 42,
		autoPlay: false,
		loop: false,
		scalesToWidth: true,
		center: true,
		width: 400,
		positionY: 102,
		positionX: 248,
		animation: {
			type: animationTypes.FADE_IN,
			playSpriteOnFinish: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-1',
		text: 'HALLO, WIE BEN JIJ EN WAARMEE KAN IK JE HELPEN?',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 140,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 150,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-2',
		text: 'HALLO, IK BEN DE HELD EN WORD VANDAAG VERWACHT BIJ DE AIVD. ',
		hasTextCloud: 'reverse',
		positionY: 100,
		positionX: 35,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 170,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT,
			animateBuilding: true
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-3',
		text: 'DAT KLOPT. JE BENT VAN HARTE WELKOM IN ONZE <purple>BEZOEKERSRUIMTE</purple>.',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 115,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 210,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-4',
		text: 'HIER IS DE <purple>PAS</purple> WAARMEE JE NAAR BINNEN KUNT. SUCCES HELD!',
		hasTextCloud: 'normal',
		positionY: 100,
		positionX: 143,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 144,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'main-doors',
		sprite: 'aivd_deur_x_00000000',
		amountOfImages: 14,
		positionY: 175,
		positionX: 55,
		posRelativeTo: 'aivd-house-2',
		interaction: {
			type: types.NEXT_SCENE,
			playSpriteOnFinish: true
		}
	},
	{
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 110,
		positionX: 44,
		posRelativeTo: 'aivd-house-2',
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'visitor-pass',
		img: 'visitor-pass',
		positionY: 50,
		positionX: 380,
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
