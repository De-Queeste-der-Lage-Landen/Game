import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'SscIctLogoAnim',
		sprite: 'textrol_sscict_400x131_00000000',
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
		text: 'HI HELD, GOED DAT JE ER BENT!',
		hasTextCloud: 'centered',
		positionY: 139,
		positionX: 189,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 134,
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
		text: 'WIJ ZIJN SSC-ICT, ICT-DIENSTVERLENER VOOR 7 MINISTERIES.',
		hasTextCloud: 'centered',
		positionY: 122,
		positionX: 137,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 234,
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
		text: "MEER DAN 40.000 COLLEGA'S KUNNEN DANKZIJ ONS ALTIJD, OVERAL EN VEILIG WERKEN.",
		hasTextCloud: 'centered',
		positionY: 120,
		positionX: 110,
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
		text: 'ONS WERK IS COMPLEX DOOR DE GROOTTE VAN ONZE INFRASTRUCTUUR EN DE HOGE BEVEILIGINGSNIVEAUS.',
		hasTextCloud: 'centered',
		positionY: 120,
		positionX: 90,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 342,
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
		name: 'text-cloud-5',
		text: 'KOM SNEL BINNEN, WANT WIJ HEBBEN JOUW SKILLS HARD NODIG.',
		hasTextCloud: 'centered',
		positionY: 125,
		positionX: 153,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 205,
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
		positionY: 85,
		positionX: 285,
		posRelativeTo: 'ssc-ict-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
