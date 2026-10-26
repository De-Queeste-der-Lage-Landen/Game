import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'KIJK, ZE MAKEN ZICH KLAAR VOOR DE RECHTSZAAK...',
		hasTextCloud: 'normal',
		positionY: 120,
		positionX: 105,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 160,
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
		text: 'HMM, EEN SLECHTE ZAAK. DE RECHTSZAAK BEGINT ZO, MAAR IK KAN HET DIGITALE DOSSIER NIET OPENEN...',
		hasTextCloud: 'normal',
		positionY: 80,
		positionX: 385,
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
		name: 'text-cloud-3',
		text: 'WEES EEN HELD, GA NAAR HET <grey>DEVOPS-TEAM</grey> EN ZORG DAT IK WEER TOEGANG KRIJG TOT MIJN DIGITALE DOSSIER, WIL JE?',
		hasTextCloud: 'normal',
		positionY: 80,
		positionX: 378,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 264,
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
		positionY: 145,
		positionX: 811,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
