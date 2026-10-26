import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'WAARSCHIJNLIJK KEN JE DUO WEL VAN DE STUDIEFINANCIERING...',
		hasTextCloud: 'normal',
		positionY: 115,
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
		text: "DAARNAAST DOEN WE NOG VEEL MEER. DUO IS OOK VERANTWOORDELIJK VOOR FACET EN HET ERKENNEN VAN DIPLOMA'S HET BEHEREN VAN MIJN DIPLOMA'S",
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 30,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 340,
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
		text: 'FACET IS HET AFNAMEPLATFORM VOOR TOETSEN EN EXAMENS. ZE ZIJN NET BEGONNEN MET DE JAARLIJKSE CENTRALE EINDTOETS. GA MAAR GAUW KIJKEN!',
		hasTextCloud: 'normal',
		positionY: 105,
		positionX: 30,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 350,
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
