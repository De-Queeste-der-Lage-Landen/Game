function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const doorRigAnim = importAll(require.context('@/assets/images/elements/rig/door', false, /\.(png)$/));
const RigLogoAnim = importAll(require.context('@/assets/images/elements/rig/rig-logo', false, /\.(png)$/));
const RigBoardAnim = importAll(require.context('@/assets/images/elements/rig/rig-board', false, /\.(png)$/));

// Images
import RigHouse from '@/assets/images/elements/rig/rig-house.png';
import RigCharacterOneBeer from '@/assets/images/elements/rig/character-1-beer.png';
import RigCharacterTwoBeer from '@/assets/images/elements/rig/character-2-beer.png';
import RigCharacterThreeBeer from '@/assets/images/elements/rig/character-3-beer.png';
import RigCharacterFourBeer from '@/assets/images/elements/rig/character-4-beer.png';
import RigCharacterFiveBeer from '@/assets/images/elements/rig/character-5-beer.png';
import RigCharacterOne from '@/assets/images/elements/rig/character-1.png';
import RigCharacterTwo from '@/assets/images/elements/rig/character-2.png';
import RigCharacterThree from '@/assets/images/elements/rig/character-3.png';
import RigCharacterFour from '@/assets/images/elements/rig/character-4.png';
import RigCharacterFive from '@/assets/images/elements/rig/character-5.png';
import RigCharacterSix from '@/assets/images/elements/rig/character-6.png';
import RigCharacterSeven from '@/assets/images/elements/rig/character-7.png';
import RigCharacterEight from '@/assets/images/elements/rig/character-8.png';
import RigCharacterNine from '@/assets/images/elements/rig/character-9.png';
import RigSecondaryBg from '@/assets/images/elements/rig/rig-secondary-bg.svg';
import BoardEmpty from '@/assets/images/elements/rig/board-empty.png';
import BoardPubquiz from '@/assets/images/elements/rig/board-pubquiz.png';
import BoardWinner from '@/assets/images/elements/rig/board-winner.png';
import BoardFindMyColleague from '@/assets/images/elements/rig/board-find-my-colleague.png';
import Couch from '@/assets/images/elements/rig/couch.png';
import Cup from '@/assets/images/elements/rig/cup.png';
import TableFlowersRig from '@/assets/images/elements/rig/table-flowers.png';
import DeskTeamData from '@/assets/images/elements/rig/desk-team-data.png';
import DeskTeamSecurity from '@/assets/images/elements/rig/desk-team-security.png';
import DeskTeamSoftware from '@/assets/images/elements/rig/desk-team-software.png';
import WindowTrees from '@/assets/images/elements/rig/window-trees.png';
import QuizPubText from '@/assets/images/elements/rig/quiz-pub-text.png';
import CelebrationFlags from '@/assets/images/elements/rig/celebration-flags.png';

export default [
	// Animations
	{ id: 'door-rig-animation', sprite: doorRigAnim },
	{ id: 'rig-logo-animation', sprite: RigLogoAnim },
	{ id: 'rig-board-animation', sprite: RigBoardAnim },

	// Images
	{ id: 'rig-house', img: RigHouse },
	{ id: 'rig-character-1-beer', img: RigCharacterOneBeer },
	{ id: 'rig-character-2-beer', img: RigCharacterTwoBeer },
	{ id: 'rig-character-3-beer', img: RigCharacterThreeBeer },
	{ id: 'rig-character-4-beer', img: RigCharacterFourBeer },
	{ id: 'rig-character-5-beer', img: RigCharacterFiveBeer },
	{ id: 'rig-character-1', img: RigCharacterOne },
	{ id: 'rig-character-2', img: RigCharacterTwo },
	{ id: 'rig-character-3', img: RigCharacterThree },
	{ id: 'rig-character-4', img: RigCharacterFour },
	{ id: 'rig-character-5', img: RigCharacterFive },
	{ id: 'rig-character-6', img: RigCharacterSix },
	{ id: 'rig-character-7', img: RigCharacterSeven },
	{ id: 'rig-character-8', img: RigCharacterEight },
	{ id: 'rig-character-9', img: RigCharacterNine },
	{ id: 'rig-secondary-bg', img: RigSecondaryBg },
	{ id: 'board-empty', img: BoardEmpty },
	{ id: 'board-pubquiz', img: BoardPubquiz },
	{ id: 'board-winner', img: BoardWinner },
	{ id: 'board-find-my-colleague', img: BoardFindMyColleague },
	{ id: 'couch', img: Couch },
	{ id: 'cup', img: Cup },
	{ id: 'table-flowers-rig', img: TableFlowersRig },
	{ id: 'desk-team-data', img: DeskTeamData },
	{ id: 'desk-team-security', img: DeskTeamSecurity },
	{ id: 'desk-team-software', img: DeskTeamSoftware },
	{ id: 'window-trees', img: WindowTrees },
	{ id: 'quiz-pub-text', img: QuizPubText },
	{ id: 'celebration-flags', img: CelebrationFlags }
];
