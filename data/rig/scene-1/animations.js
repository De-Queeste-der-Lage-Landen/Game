import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'RigLogoAnim',
		sprite: 'textrol_rig_400x131_00000000',
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
		text: 'HAI! WELKOM BIJ HET RIJKS ICT GILDE (RIG). KOM SNEL VERDER, DAN DOEN WE EEN BAKKIE EN VERTEL IK JE MEER OVER WAT WE BIJ HET RIG DOEN.',
		hasTextCloud: 'centered',
		positionY: 70,
		positionX: 130,
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
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 175,
		positionX: 160,
		posRelativeTo: 'rig-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
