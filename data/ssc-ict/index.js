import sceneOne from '@/static/data/ssc-ict/scene-1';
import sceneTwo from '@/static/data/ssc-ict/scene-2';
import sceneThree from '@/static/data/ssc-ict/scene-3';
import sceneFour from '@/static/data/ssc-ict/scene-4';
import sceneFive from '@/static/data/ssc-ict/scene-5';
import sceneSix from '@/static/data/ssc-ict/scene-6';
import sceneSeven from '@/static/data/ssc-ict/scene-7';

export default [
	{
		id: 'ssc-ict-scene-1',
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
		id: 'ssc-ict-scene-2',
		bgColorPrimary: '0x7487BA',
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
		id: 'ssc-ict-scene-3',
		bgColorPrimary: '0x7487BA',
		character: {
			animate: false,
			positionX: 375,
			flipX: false,
			behindElement: 'ssc-ict-desk'
		},
		elements: sceneThree.elements,
		animations: sceneThree.animations
	},
	{
		id: 'ssc-ict-scene-4',
		bgColorPrimary: '0x7487BA',
		character: {
			animate: true,
			positionX: -50,
			centerPivot: true,
			flipX: false
		},
		elements: sceneFour.elements,
		animations: sceneFour.animations
	},
	{
		id: 'ssc-ict-scene-5',
		bgColorPrimary: '0x7487BA',
		character: {
			animate: false,
			positionX: 455,
			flipX: true
		},
		elements: sceneFive.elements,
		animations: sceneFive.animations
	},
	{
		id: 'ssc-ict-scene-6',
		bgColorPrimary: '0x7487BA',
		character: {
			animate: true,
			positionX: -50,
			centerPivot: true,
			flipX: false
		},
		elements: sceneSix.elements,
		animations: sceneSix.animations
	},
	{
		id: 'ssc-ict-scene-7',
		bgColorPrimary: '0x7487BA',
		character: {
			animate: false,
			positionX: 385,
			flipX: true,
			behindElement: 'ssc-ict-desk'
		},
		elements: sceneSeven.elements,
		animations: sceneSeven.animations,
		isLastScene: true
	}
];
