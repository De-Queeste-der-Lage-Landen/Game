import sceneOne from '@/static/data/rws/scene-1';
import sceneTwo from '@/static/data/rws/scene-2';
import sceneThree from '@/static/data/rws/scene-3';
import sceneFour from '@/static/data/rws/scene-4';

export default [
	{
		id: 'rws-scene-1',
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
		id: 'rws-scene-2',
		bgColorPrimary: '0xC1F0DF',
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
		id: 'rws-scene-3',
		bgColorPrimary: '0xC1F0DF',
		character: {
			animate: false,
			positionX: 700,
			flipX: true,
			behindElement: 'rws-desk'
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations,
		isLastScene: true
	},
	{
		id: 'rws-scene-4',
		bgColorPrimary: '0xC1F0DF',
		character: {
			animate: false,
			positionX: 700,
			flipX: true,
			behindElement: 'rws-desk'
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations,
		isLastScene: true
	}
];
