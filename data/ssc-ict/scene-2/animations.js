import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-2',
		text: 'WELKOM BIJ DE <light-purple>SERVICEDESK</light-purple>. GA SNEL ZITTEN WANT ER GAAT IETS FLINK MIS!',
		hasTextCloud: 'normal',
		positionY: 82,
		positionX: 145,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 145,
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
		text: 'WIJ ONTVANGEN KLACHTEN DAT GEBRUIKERS NIET MEER IN KUNNEN LOGGEN OP HUN WERKPLEK, KUN JIJ ONS HELPEN?',
		hasTextCloud: 'normal',
		positionY: 85,
		positionX: 115,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 224,
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
		positionY: 150,
		positionX: 350,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
