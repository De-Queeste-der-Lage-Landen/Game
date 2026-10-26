import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'text-cloud-1',
		text: 'HELEMAAL TOP EN NET OP TIJD! IK GA HET DOORGEVEN, DANK JE WEL!',
		hasTextCloud: 'centered',
		positionY: 105,
		positionX: 98,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 155,
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
		text: 'NICE!',
		hasTextCloud: 'centered-small',
		positionY: 160,
		positionX: 422,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 45,
		align: 'center',
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			moveCharacterOutOfScreen: true,
			pauseAfter: true,
			reverseAnimation: true
		}
	},
	{
		name: 'text-cloud-3',
		text: 'GOED GEDAAN!',
		hasTextCloud: 'centered-small',
		positionY: 140,
		positionX: 555,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 65,
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
		text: 'HEB JE WEL EENS GEDACHT AAN EEN CARRIÈRE BIJ HET KNMI?',
		hasTextCloud: 'vacancy-big',
		hasVacancyBtn: true,
		organisation: 'knmi',
		// meetUsLink:
		// 	'https://c.spotler.com/ct/m15/k1/f2lYu2mDHl3WGNLdyHhdQtWDUK7H9ZSAMfaY3M9xIZzTSjn7RcZtHc4UoEJifpai/2hz5kYatTeC7zD6',
		link: ' https://www.werkenvoornederland.nl/organisaties/ministerie-van-infrastructuur-en-waterstaat/koninklijk-nederlands-meteorologisch-instituut?utm_source=tweakersgame&utm_medium=game&utm_campaign=2022_tweakersgame&utm_term=tweakers_knmi',
		positionY: 45,
		positionX: 640,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 194,
		align: 'center',
		interaction: {
			type: types.CLOSE_TEXT_CLOUD
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-5',
		text: 'BEKIJK ALLE CHALLENGES',
		hasTextCloud: 'vacancy-big',
		hasColor: '-green',
		positionY: 40,
		positionX: 40,
		fontSize: 10,
		lineHeight: 20,
		fill: '#298941',
		wordWrap: true,
		wordWrapWidth: 105,
		align: 'center',
		interaction: {
			type: types.TOGGLE_MENU
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
