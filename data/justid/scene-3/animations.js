import types from '@/static/data/types';
import animationTypes from '@/static/data/animation-types';

export default [
	{
		name: 'email-notification',
		sprite: 'email_65x73_00000000',
		positionY: 170,
		positionX: 465,
		amountOfImages: 48,
		autoPlay: false,
		loop: false,
		posScaleToWidth: true,
		interaction: {
			type: types.GO_TO_NEXT_ANIMATION_ELEMENT
		},
		animation: {
			type: animationTypes.FADE_IN,
			playSpriteOnFinish: true,
			reverseAnimation: true,
			pauseAfter: true
		}
	},
	{
		name: 'board-policeman',
		img: 'board-policeman',
		positionY: 174,
		positionX: 353,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'board-suspect',
		img: 'board-suspect',
		positionY: 167,
		positionX: 473,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'text-cloud-1',
		text: 'WE HEBBEN EEN PERSOON AANGEHOUDEN DIE BETROKKEN IS BIJ EEN <purple-dark>GEWELDDADIGE STRAATOVERVAL</purple-dark>.',
		hasTextCloud: 'centered',
		positionY: 45,
		positionX: 280,
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
		name: 'text-cloud-2',
		text: 'WE HEBBEN NAAST DEZE FOTO OOK EEN <purple-dark>NAAM</purple-dark>, <purple-dark>VINGERAFDRUKKEN</purple-dark>, EN DE <purple-dark>GEBOORTEDATUM</purple-dark>.',
		hasTextCloud: 'centered',
		positionY: 40,
		positionX: 295,
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
		text: 'KUN JE CONTROLEREN OF DEZE PERSOON MET DEZE GEGEVENS AL BIJ JULLIE BEKEND IS?',
		hasTextCloud: 'centered',
		positionY: 65,
		positionX: 280,
		fontSize: 10,
		lineHeight: 20,
		fill: '#000000',
		wordWrap: true,
		wordWrapWidth: 245,
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
		text: 'IK STUUR JE DE GEGEVENS <purple-dark>ENCRYPTED</purple-dark> TOE, ZODAT JE ER DIRECT MEE AAN DE SLAG KUNT!',
		hasTextCloud: 'centered',
		positionY: 45,
		positionX: 295,
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
		name: 'board-with-token',
		img: 'board-with-token',
		positionY: 147,
		positionX: 313,
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'button-webtoken',
		img: 'button-webtoken',
		positionY: 263,
		positionX: 362,
		interaction: {
			type: types.COPY_TO_CLIPBOARD,
			copyText:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkouIHZhbiBEb25rIiwiaWF0IjoxNTE2MjM5MDIyfQ.rNtpbwPilTZM67-g1wQuERzFNhWRh5_U_0KjN-axYpY'
		},
		animation: {
			type: animationTypes.FADE_IN
		}
	},
	{
		name: 'arrow-green',
		img: 'arrow-green',
		positionY: 190,
		positionX: 725,
		animation: {
			type: animationTypes.FADE_IN
		}
	}
];
