function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}
// Animations
const duoLogoAnim = importAll(require.context('@/assets/images/elements/duo/duo-logo', false, /\.(png)$/));
const duoDoorAnim = importAll(require.context('@/assets/images/elements/duo/door', false, /\.(png)$/));
const duoExaminatorAnim = importAll(require.context('@/assets/images/elements/duo/examinator', false, /\.(png)$/));
const duoClockAnim = importAll(require.context('@/assets/images/elements/duo/clock', false, /\.(png)$/));

import DuoHouse from '@/assets/images/elements/duo/duo-house.png';
import Door from '@/assets/images/elements/duo/door.png';
import PanelFacet from '@/assets/images/elements/duo/panel-facet.png';
import PanelStufi from '@/assets/images/elements/duo/panel-stufi.png';
import PanelDiploma from '@/assets/images/elements/duo/panel-diploma.png';
import ExamBoardRight from '@/assets/images/elements/duo/exam-board-right.png';
import ExamBoardLeft from '@/assets/images/elements/duo/exam-board-left.png';
import DuoCharacterOne from '@/assets/images/elements/duo/duo-character-1.png';
import DuoCharacterTwo from '@/assets/images/elements/duo/duo-character-2.png';
import DuoCharacterThree from '@/assets/images/elements/duo/duo-character-3.png';
import DuoCharacterFour from '@/assets/images/elements/duo/duo-character-4.png';
import DuoCharacterFive from '@/assets/images/elements/duo/duo-character-5.png';
import DuoCharacterSix from '@/assets/images/elements/duo/duo-character-6.png';
import DuoCharacterSeven from '@/assets/images/elements/duo/duo-character-7.png';
import DuoCharacterEight from '@/assets/images/elements/duo/duo-character-8.png';
import CharacterTakingExamOne from '@/assets/images/elements/duo/character-taking-exam-1.png';
import CharacterTakingExamTwo from '@/assets/images/elements/duo/character-taking-exam-2.png';
import CharacterTakingExamThree from '@/assets/images/elements/duo/character-taking-exam-3.png';
import DuoDeskOne from '@/assets/images/elements/duo/duo-desk-1.png';
import DuoDeskTwo from '@/assets/images/elements/duo/duo-desk-2.png';
import DuoWindowTrees from '@/assets/images/elements/duo/duo-window-trees.png';
import WainscotingPurple from '@/assets/images/elements/duo/wainscoting-purple.png';
import WainscotingPink from '@/assets/images/elements/duo/wainscoting-pink.png';
import WainscotingYellow from '@/assets/images/elements/duo/wainscoting-yellow.png';

export default [
	// Animations
	{ id: 'duo-logo-animation', sprite: duoLogoAnim },
	{ id: 'duo-door-animation', sprite: duoDoorAnim },
	{ id: 'duo-examinator-animation', sprite: duoExaminatorAnim },
	{ id: 'duo-clock-animation', sprite: duoClockAnim },

	{ id: 'duo-house', img: DuoHouse },
	{ id: 'door', img: Door },
	{ id: 'duo-character-1', img: DuoCharacterOne },
	{ id: 'duo-character-2', img: DuoCharacterTwo },
	{ id: 'duo-character-3', img: DuoCharacterThree },
	{ id: 'duo-character-4', img: DuoCharacterFour },
	{ id: 'duo-character-5', img: DuoCharacterFive },
	{ id: 'duo-character-6', img: DuoCharacterSix },
	{ id: 'duo-character-7', img: DuoCharacterSeven },
	{ id: 'duo-character-8', img: DuoCharacterEight },
	{ id: 'character-taking-exam-1', img: CharacterTakingExamOne },
	{ id: 'character-taking-exam-2', img: CharacterTakingExamTwo },
	{ id: 'character-taking-exam-3', img: CharacterTakingExamThree },
	{ id: 'duo-desk-1', img: DuoDeskOne },
	{ id: 'duo-desk-2', img: DuoDeskTwo },
	{ id: 'exam-board-right', img: ExamBoardRight },
	{ id: 'exam-board-left', img: ExamBoardLeft },
	{ id: 'panel-facet', img: PanelFacet },
	{ id: 'panel-stufi', img: PanelStufi },
	{ id: 'panel-diploma', img: PanelDiploma },
	{ id: 'wainscoting-purple', img: WainscotingPurple },
	{ id: 'wainscoting-pink', img: WainscotingPink },
	{ id: 'wainscoting-yellow', img: WainscotingYellow },
	{ id: 'duo-window-trees', img: DuoWindowTrees }
];
