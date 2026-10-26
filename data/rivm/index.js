import sceneOne from '@/static/data/rivm/scene-1';
import sceneTwo from '@/static/data/rivm/scene-2';
import sceneThree from '@/static/data/rivm/scene-3';
import sceneFour from '@/static/data/rivm/scene-4';

export default [
	{
		id: 'rivm-scene-1',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneOne.elements,
		animations: sceneOne.animations
	},
	{
		id: 'rivm-scene-2',
		bgColorPrimary: '0xFBD257',
		character: {
			animate: true,
			positionX: -50,
			centerPivot: true,
			flipX: false
		},
		elements: sceneTwo.elements,
		animations: sceneTwo.animations
	},
	{
		id: 'rivm-scene-3',
		bgColorPrimary: '0xFBD257',
		character: {
			animate: false,
			positionX: 350,
			flipX: false,
			behindElement: 'rivm-desk'
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations,
		isLastScene: true
	},
	{
		id: 'rivm-scene-4',
		bgColorPrimary: '0xFBD257',
		character: {
			animate: false,
			positionX: 350,
			flipX: false,
			behindElement: 'rivm-desk'
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations,
		isLastScene: true
	}
];
