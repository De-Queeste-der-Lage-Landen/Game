import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'JioLogoAnim',
		sprite: 'textrol_jio_400x131_00000000',
		amountOfImages: 49,
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
		text: 'HALLO HELD! WELKOM BIJ DE  <blue-jio>JUSTITIËLE ICT ORGANISATIE</blue-jio>.',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 190,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 124,
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
		text: '<blue-jio>JIO</blue-jio> IS DE ICT- DIENSTVERLENER VOOR HET MINISTERIE VAN JUSTITIE EN VEILIGHEID.',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 157,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 204,
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
		name: 'text-cloud-3',
		text: 'ELKE DAG ZORGEN WE DAT MEER DAN 20.000 RIJKSAMBTENAREN BESCHIKKEN OVER <blue-jio>VEILIGE, BETROUWBARE EN INNOVATIEVE ICT</blue-jio>.',
		hasTextCloud: 'centered',
		positionY: 100,
		positionX: 120,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 294,
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
		text: 'KOM SNEL BINNEN, WIJ HEBBEN JOUW HULP NODIG MET EEN FOXHUNT!',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 170,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 164,
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
		positionY: 285,
		positionX: 435,
		posRelativeTo: 'jio-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
