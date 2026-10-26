import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'RwsLogoAnim',
		sprite: 'textrol_rws_400x131_00000000',
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
		text: 'HELD! WELKOM BIJ <green-rws>RIJKSWATERSTAAT</green-rws>.  BIJ RIJKSWATERSTAAT DOE JE BELANGRIJK EN UITDAGEND WERK. ',
		hasTextCloud: 'centered',
		positionY: 85,
		positionX: 115,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 184,
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
		text: 'WE BESCHERMEN ONS LAND TEGEN OVERSTROMINGEN. WE ZORGEN VOOR VOLDOENDE SCHOON WATER, EN VOOR VOLDOENDE GROEN.',
		hasTextCloud: 'centered',
		positionY: 90,
		positionX: 95,
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
		text: 'OOK ZORGEN WE ERVOOR DAT MENSEN VLOT EN VEILIG VAN A NAAR B KUNNEN. OP DE WEG ÉN HET WATER.',
		hasTextCloud: 'centered',
		positionY: 90,
		positionX: 103,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 214,
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
		text: 'EN DAAR KOMT EEN HELEBOEL IT EN <green-rws>DATA</green-rws> BIJ KIJKEN.',
		hasTextCloud: 'centered',
		positionY: 125,
		positionX: 110,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 174,
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
		text: 'KOM SNEL BINNEN: WE HEBBEN JE HULP NODIG!',
		hasTextCloud: 'centered',
		positionY: 125,
		positionX: 125,
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
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 225,
		positionX: 392,
		posRelativeTo: 'rws-house',
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
