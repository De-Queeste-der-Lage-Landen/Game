import sceneOne from '@/static/data/rig/scene-1';
import sceneTwo from '@/static/data/rig/scene-2';
import sceneThree from '@/static/data/rig/scene-3';
import sceneFour from '@/static/data/rig/scene-4';

export default [
	{
		id: 'rig-scene-1',
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
		id: 'rig-scene-2',
		bgColorPrimary: '0xFFA851',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneTwo.elements,
		animations: sceneTwo.animations
	},
	{
		id: 'rig-scene-3',
		bgColorPrimary: '0xFFA851',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'rig-scene-4',
		bgColorPrimary: '0xFFA851',
		character: {
			animate: false,
			positionX: 268,
			flipX: false
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations,
		isLastScene: true
	}
];
