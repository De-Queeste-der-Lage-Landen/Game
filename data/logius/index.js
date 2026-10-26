import sceneOne from '@/static/data/logius/scene-1';
import sceneTwo from '@/static/data/logius/scene-2';
import sceneThree from '@/static/data/logius/scene-3';
import sceneFour from '@/static/data/logius/scene-4';

export default [
	{
		id: 'logius-scene-1',
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
		id: 'logius-scene-2',
		bgColorPrimary: '0x83BDA1',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneTwo.elements,
		animations: sceneTwo.animations
	},
	{
		id: 'logius-scene-3',
		bgColorPrimary: '0x83BDA1',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'logius-scene-4',
		bgColorPrimary: '0x83BDA1',
		character: {
			animate: false,
			positionX: 790,
			flipX: true,
			behindElement: 'logius-desk-blue'
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations,
		isLastScene: true
	}
];
