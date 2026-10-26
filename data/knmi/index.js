import sceneOne from '@/static/data/knmi/scene-1';
import sceneTwo from '@/static/data/knmi/scene-2';
import sceneThree from '@/static/data/knmi/scene-3';
import sceneFour from '@/static/data/knmi/scene-4';
import sceneFive from '@/static/data/knmi/scene-5';

export default [
	{
		id: 'knmi-scene-1',
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
		id: 'knmi-scene-2',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneTwo.elements,
		animations: sceneTwo.animations
	},
	{
		id: 'knmi-scene-3',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: true,
			positionX: -50,
			flipX: false
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'knmi-scene-4',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: false,
			positionX: 300,
			flipX: true,
			behindElement: 'desk-grey-brown'
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations
	},
	{
		id: 'knmi-scene-5',
		bgColorPrimary: '0xAECADF',
		character: {
			animate: false,
			positionX: 300,
			flipX: true,
			behindElement: 'desk-grey-brown'
		},
		elements: sceneFive.elements,
		animations: sceneFive.animations,
		isLastScene: true
	}
];
