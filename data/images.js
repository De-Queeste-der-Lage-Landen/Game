function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

// Animations
const cowAnim = importAll(require.context('@/assets/images/elements/cow', false, /\.(png)$/));
const windmillAnim = importAll(require.context('@/assets/images/elements/windmill', false, /\.(png)$/));
const queesteLogoAnim = importAll(require.context('@/assets/images/elements/queeste-logo', false, /\.(png)$/));
// const characterOneAnim = importAll(require.context('@/assets/images/characters/character-1', false, /\.(png)$/));
// const characterTwoAnim = importAll(require.context('@/assets/images/characters/character-2', false, /\.(png)$/));
// const characterThreeAnim = importAll(require.context('@/assets/images/characters/character-3', false, /\.(png)$/));
// const characterFourAnim = importAll(require.context('@/assets/images/characters/character-4', false, /\.(png)$/));
// const characterFiveAnim = importAll(require.context('@/assets/images/characters/character-5', false, /\.(png)$/));
// const characterSixAnim = importAll(require.context('@/assets/images/characters/character-6', false, /\.(png)$/));
const characterSevenAnim = importAll(require.context('@/assets/images/characters/character-7', false, /\.(png)$/));
const characterEightAnim = importAll(require.context('@/assets/images/characters/character-8', false, /\.(png)$/));
const characterNineAnim = importAll(require.context('@/assets/images/characters/character-9', false, /\.(png)$/));
const characterTenAnim = importAll(require.context('@/assets/images/characters/character-10', false, /\.(png)$/));
const characterElevenAnim = importAll(require.context('@/assets/images/characters/character-11', false, /\.(png)$/));
const characterTwelveAnim = importAll(require.context('@/assets/images/characters/character-12', false, /\.(png)$/));
const characterAnim = importAll(require.context('@/assets/images/elements/character-with-coffee', false, /\.(png)$/));
const cloudThunderAnim = importAll(require.context('@/assets/images/elements/cloud-thunder', false, /\.(png)$/));
const cloudRainAnim = importAll(require.context('@/assets/images/elements/cloud-rain', false, /\.(png)$/));
const farmMillAnim = importAll(require.context('@/assets/images/elements/knmi/farm-mill', false, /\.(png)$/));
const doorAnim = importAll(require.context('@/assets/images/elements/door', false, /\.(png)$/));
const arrowAnim = importAll(require.context('@/assets/images/elements/arrow-in-text-cloud', false, /\.(png)$/));
const carAnim = importAll(require.context('@/assets/images/elements/aivd/car', false, /\.(png)$/));
const watercoolerAnim = importAll(require.context('@/assets/images/elements/knmi/watercooler', false, /\.(png)$/));
const cMachineAnim = importAll(require.context('@/assets/images/elements/justid/coffee-machine', false, /\.(png)$/));

// Global
import QueesteLogo from '@/assets/images/elements/queeste-logo.png';
import RijksoverheidLogo from '@/assets/images/elements/rijksoverheid-logo.png';
import FloorGrass from '@/assets/images/elements/floor-grass.png';
import FloorRocks from '@/assets/images/elements/floor-rocks.png';
import FloorStones from '@/assets/images/elements/floor-stones.png';
import FloorWood from '@/assets/images/elements/floor-wood.png';
import Tree from '@/assets/images/elements/tree.png';
import Bike from '@/assets/images/elements/bike.png';
import DoorBrown from '@/assets/images/elements/door-brown.png';
import DoorGrey from '@/assets/images/elements/door-grey.svg';
import Cloud from '@/assets/images/elements/cloud.png';
import Controller from '@/assets/images/elements/controller-small.png';
import TextCloud from '@/assets/images/elements/text-cloud.svg';
import TextCloudReverse from '@/assets/images/elements/text-cloud-reverse.svg';
import TextCloudBorderTopLeft from '@/assets/images/elements/border-top-left.png';
import TextCloudBorderTopRight from '@/assets/images/elements/border-top-right.png';
import TextCloudBorderBottomLeft from '@/assets/images/elements/border-bottom-left.png';
import TextCloudBorderBottomRight from '@/assets/images/elements/border-bottom-right.png';
import TextCloudBorderBottomCenter from '@/assets/images/elements/border-bottom-center.png';
import TextCloudBorderTopLeftBrown from '@/assets/images/elements/border-top-left-brown.png';
import TextCloudBorderTopRightBrown from '@/assets/images/elements/border-top-right-brown.png';
import TextCloudBorderBottomLeftBrown from '@/assets/images/elements/border-bottom-left-brown.png';
import TextCloudBorderBottomRightBrown from '@/assets/images/elements/border-bottom-right-brown.png';
import TextCloudBorderBottomCenterBrown from '@/assets/images/elements/border-bottom-center-brown.png';
import TextCloudBorderTopLeftLightBrown from '@/assets/images/elements/border-top-left-light-brown.png';
import TextCloudBorderTopRightLightBrown from '@/assets/images/elements/border-top-right-light-brown.png';
import TextCloudBorderBottomLeftLightBrown from '@/assets/images/elements/border-bottom-left-light-brown.png';
import TextCloudBorderBottomRightLightBrown from '@/assets/images/elements/border-bottom-right-light-brown.png';
import TextCloudBorderBottomCenterLightBrown from '@/assets/images/elements/border-bottom-center-light-brown.png';
import TextCloudBorderTopLeftGreen from '@/assets/images/elements/border-top-left-green.png';
import TextCloudBorderTopRightGreen from '@/assets/images/elements/border-top-right-green.png';
import TextCloudBorderBottomLeftGreen from '@/assets/images/elements/border-bottom-left-green.png';
import TextCloudBorderBottomRightGreen from '@/assets/images/elements/border-bottom-right-green.png';
import TextCloudBorderBottomCenterGreen from '@/assets/images/elements/border-bottom-center-green.png';
import ArrowInTextCloud from '@/assets/images/elements/arrow-in-text-cloud.png';
import ArrowGreen from '@/assets/images/elements/arrow-green.png';
import Lamp from '@/assets/images/elements/lamp.png';
import Table from '@/assets/images/elements/table.png';
import CoffeMachine from '@/assets/images/elements/coffee-machine.png';
import WaterCooler from '@/assets/images/elements/watercooler.png';
import LaptopBig from '@/assets/images/elements/laptop-big.png';
import BenchWithTree from '@/assets/images/elements/bench-with-tree.png';
import TreeWithBushes from '@/assets/images/elements/tree-with-bushes.png';
import Cactus from '@/assets/images/elements/cactus.svg';
import Clock from '@/assets/images/elements/clock.png';
import Clock5To8 from '@/assets/images/elements/clock-5-to-8.png';
import Clock1To8 from '@/assets/images/elements/clock-1-to-8.png';
import CloseIcon from '@/assets/images/elements/close-icon.svg';
import CloseIconBrown from '@/assets/images/elements/close-icon-brown.png';
import CloudRain from '@/assets/images/elements/cloud-rain.png';
import CloudThunder from '@/assets/images/elements/cloud-thunder.png';
import CloudTwo from '@/assets/images/elements/cloud-2.png';
import CowLeft from '@/assets/images/elements/cow-left.png';
import CowRight from '@/assets/images/elements/cow-right.png';
import StartGameBtn from '@/assets/images/elements/start-game-btn.png';
import NextBtn from '@/assets/images/elements/next-btn.png';
import PlayNowBtn from '@/assets/images/elements/play-now-btn.png';
import VacancyBtn from '@/assets/images/elements/show-vacancy-btn-2.svg';
import MeetUsBtn from '@/assets/images/elements/show-vacancy-btn-3.svg';
import PlayAgainBtn from '@/assets/images/elements/play-again-btn.svg';
import NoThanksBtn from '@/assets/images/elements/no-thanks-btn.svg';
import CompetePriceBtn from '@/assets/images/elements/compete-price-btn.svg';
import ChooseTeamBtn from '@/assets/images/elements/choose-team-btn.svg';
import foundEasterEgg from '@/assets/images/elements/found-easter-egg.png';
import termsTransparentBg from '@/assets/images/elements/terms-transparent-bg-2.png';
import termsText from '@/assets/images/elements/terms-text.png';
import privacyText from '@/assets/images/elements/privacy-text.png';
import contactText from '@/assets/images/elements/contact-text.png';
import LampBig from '@/assets/images/elements/lamp-big.png';
import Bush from '@/assets/images/elements/bush.png';
import CoffeeTable from '@/assets/images/elements/justid/coffee-table.png';
import PlanBoardToday from '@/assets/images/elements/knmi/plan-board-today.png';
import PlanBoardTomorrow from '@/assets/images/elements/knmi/plan-board-tomorrow.png';

// Introduction
import Windmill from '@/assets/images/elements/windmill.png';
import ControllerBig from '@/assets/images/elements/controller-big.png';
import DotAivd from '@/assets/images/elements/dot-aivd.png';
import DotJustid from '@/assets/images/elements/dot-justid.png';
import DotSscIct from '@/assets/images/elements/dot-ssc.png';
import DotKnmi from '@/assets/images/elements/dot-knmi.png';
import DotLogius from '@/assets/images/elements/dot-logius.png';
import DotRig from '@/assets/images/elements/dot-rig.png';
import DotIvo from '@/assets/images/elements/dot-ivo.png';
import DotDuo from '@/assets/images/elements/dot-duo.png';
import DotRivm from '@/assets/images/elements/dot-rivm.png';
import DotJio from '@/assets/images/elements/dot-jio.png';
import DotDictu from '@/assets/images/elements/dot-dictu.png';
import DotRws from '@/assets/images/elements/dot-rws.png';
import DotControllerActive from '@/assets/images/elements/dot-controller-active.png';
import DotControllerInactive from '@/assets/images/elements/dot-controller-inactive.png';
import LogoAivd from '@/assets/images/elements/map-logos/logo-aivd.png';
import LogoJustid from '@/assets/images/elements/map-logos/logo-justid.png';
import LogoKnmi from '@/assets/images/elements/map-logos/logo-knmi.png';
import LogoLogius from '@/assets/images/elements/map-logos/logo-logius.png';
import LogoRig from '@/assets/images/elements/map-logos/logo-rig.png';
import LogoSscIct from '@/assets/images/elements/map-logos/logo-ssc-ict.png';
import LogoIvo from '@/assets/images/elements/map-logos/logo-ivo.png';
import LogoDuoIct from '@/assets/images/elements/map-logos/logo-duo-ict.png';
import LogoRivm from '@/assets/images/elements/map-logos/logo-rivm.png';
import LogoJio from '@/assets/images/elements/map-logos/logo-jio.png';
import LogoDictu from '@/assets/images/elements/map-logos/logo-dictu.png';
import LogoRws from '@/assets/images/elements/map-logos/logo-rws.png';
import MarkerAivd from '@/assets/images/elements/marker-aivd.png';
import MarkerRig from '@/assets/images/elements/marker-rig.png';
import MarkerJustid from '@/assets/images/elements/marker-justid.png';
import MarkerKnmi from '@/assets/images/elements/marker-knmi.png';
import MarkerLogius from '@/assets/images/elements/marker-logius.png';
import MarkerSscIct from '@/assets/images/elements/marker-ssc-ict.png';
import MarkerIvo from '@/assets/images/elements/marker-ivo.png';
import MarkerDuo from '@/assets/images/elements/marker-duo.png';
import MarkerRivm from '@/assets/images/elements/marker-rivm.png';
import MarkerJio from '@/assets/images/elements/marker-jio.png';
import MarkerDictu from '@/assets/images/elements/marker-dictu.png';
import MarkerRws from '@/assets/images/elements/marker-rws.png';
import Map from '@/assets/images/elements/map.png';
import OrganisationBg from '@/assets/images/elements/organisation-bg.png';
import EasterEggBg from '@/assets/images/elements/easter-egg-bg-2.png';
import WaveOne from '@/assets/images/elements/wave-1.png';
import WaveTwo from '@/assets/images/elements/wave-2.png';
import WaveThree from '@/assets/images/elements/wave-3.png';
import NextPage from '@/assets/images/elements/next-page.png';
import PrevPage from '@/assets/images/elements/prev-page.png';

export default [
	// Animations
	{ id: 'cow-animation', sprite: cowAnim },
	{ id: 'windmill-animation', sprite: windmillAnim },
	{ id: 'queeste-logo-animation', sprite: queesteLogoAnim },
	{ id: 'character-coffee', sprite: characterAnim },
	// { id: 'character-1-animation', sprite: characterOneAnim },
	// { id: 'character-2-animation', sprite: characterTwoAnim },
	// { id: 'character-3-animation', sprite: characterThreeAnim },
	// { id: 'character-4-animation', sprite: characterFourAnim },
	// { id: 'character-5-animation', sprite: characterFiveAnim },
	// { id: 'character-6-animation', sprite: characterSixAnim },
	{ id: 'character-7-animation', sprite: characterSevenAnim },
	{ id: 'character-8-animation', sprite: characterEightAnim },
	{ id: 'character-9-animation', sprite: characterNineAnim },
	{ id: 'character-10-animation', sprite: characterTenAnim },
	{ id: 'character-11-animation', sprite: characterElevenAnim },
	{ id: 'character-12-animation', sprite: characterTwelveAnim },
	{ id: 'cloud-thunder-animation', sprite: cloudThunderAnim },
	{ id: 'cloud-rain-animation', sprite: cloudRainAnim },
	{ id: 'farm-mill-animation', sprite: farmMillAnim },
	{ id: 'door-animation', sprite: doorAnim },
	{ id: 'arrow-in-text-cloud', sprite: arrowAnim },
	{ id: 'car-animation', sprite: carAnim },
	{ id: 'watercooler-animation', sprite: watercoolerAnim },
	{ id: 'coffee-machine-animation', sprite: cMachineAnim },

	// Images (Global)
	{ id: 'queeste-logo', img: QueesteLogo },
	{ id: 'rijksoverheid-logo', img: RijksoverheidLogo },
	{ id: 'windmill', img: Windmill },
	{ id: 'bench-with-tree', img: BenchWithTree },
	{ id: 'tree-with-bushes', img: TreeWithBushes },
	{ id: 'cow-left', img: CowLeft },
	{ id: 'cow-right', img: CowRight },
	{ id: 'start-game-btn', img: StartGameBtn },
	{ id: 'next-btn', img: NextBtn },
	{ id: 'play-now-btn', img: PlayNowBtn },
	{ id: 'vacancy-btn', img: VacancyBtn },
	{ id: 'meet-us-btn', img: MeetUsBtn },
	{ id: 'play-again-btn', img: PlayAgainBtn },
	{ id: 'no-thanks-btn', img: NoThanksBtn },
	{ id: 'compete-price-btn', img: CompetePriceBtn },
	{ id: 'choose-team-btn', img: ChooseTeamBtn },
	{ id: 'tree', img: Tree },
	{ id: 'bush', img: Bush },
	{ id: 'coffee-table', img: CoffeeTable },
	{ id: 'bike', img: Bike },
	{ id: 'door-brown', img: DoorBrown },
	{ id: 'door-grey', img: DoorGrey },
	{ id: 'cloud', img: Cloud },
	{ id: 'cloud-two', img: CloudTwo },
	{ id: 'cloud-rain', img: CloudRain },
	{ id: 'cloud-thunder', img: CloudThunder },
	{ id: 'controller', img: Controller },
	{ id: 'arrow-green', img: ArrowGreen },
	{ id: 'found-easter-egg', img: foundEasterEgg },
	{ id: 'terms-transparent-bg', img: termsTransparentBg },
	{ id: 'lamp-big', img: LampBig },
	{ id: 'terms-text', img: termsText },
	{ id: 'privacy-text', img: privacyText },
	{ id: 'contact-text', img: contactText },
	{ id: 'text-cloud', img: TextCloud },
	{ id: 'plan-board-today', img: PlanBoardToday },
	{ id: 'plan-board-tomorrow', img: PlanBoardTomorrow },

	{ id: 'text-cloud-reverse', img: TextCloudReverse },
	{ id: 'text-cloud-border-top-left', img: TextCloudBorderTopLeft },
	{ id: 'text-cloud-border-top-right', img: TextCloudBorderTopRight },
	{ id: 'text-cloud-border-bottom-left', img: TextCloudBorderBottomLeft },
	{ id: 'text-cloud-border-bottom-right', img: TextCloudBorderBottomRight },
	{ id: 'text-cloud-border-bottom-center', img: TextCloudBorderBottomCenter },

	{ id: 'text-cloud-border-top-left-brown', img: TextCloudBorderTopLeftBrown },
	{ id: 'text-cloud-border-top-right-brown', img: TextCloudBorderTopRightBrown },
	{ id: 'text-cloud-border-bottom-left-brown', img: TextCloudBorderBottomLeftBrown },
	{ id: 'text-cloud-border-bottom-right-brown', img: TextCloudBorderBottomRightBrown },
	{ id: 'text-cloud-border-bottom-center-brown', img: TextCloudBorderBottomCenterBrown },

	{ id: 'text-cloud-border-top-left-light-brown', img: TextCloudBorderTopLeftLightBrown },
	{ id: 'text-cloud-border-top-right-light-brown', img: TextCloudBorderTopRightLightBrown },
	{ id: 'text-cloud-border-bottom-left-light-brown', img: TextCloudBorderBottomLeftLightBrown },
	{ id: 'text-cloud-border-bottom-right-light-brown', img: TextCloudBorderBottomRightLightBrown },
	{ id: 'text-cloud-border-bottom-center-light-brown', img: TextCloudBorderBottomCenterLightBrown },

	{ id: 'text-cloud-border-top-left-green', img: TextCloudBorderTopLeftGreen },
	{ id: 'text-cloud-border-top-right-green', img: TextCloudBorderTopRightGreen },
	{ id: 'text-cloud-border-bottom-left-green', img: TextCloudBorderBottomLeftGreen },
	{ id: 'text-cloud-border-bottom-right-green', img: TextCloudBorderBottomRightGreen },
	{ id: 'text-cloud-border-bottom-center-green', img: TextCloudBorderBottomCenterGreen },

	{ id: 'arrow-in-text-cloud', img: ArrowInTextCloud },
	{ id: 'lamp', img: Lamp },
	{ id: 'coffeeMachine', img: CoffeMachine },
	{ id: 'waterCooler', img: WaterCooler },
	{ id: 'table', img: Table },
	{ id: 'laptop-big', img: LaptopBig },
	{ id: 'cactus', img: Cactus },
	{ id: 'clock', img: Clock },
	{ id: 'clock-5-to-8', img: Clock5To8 },
	{ id: 'clock-1-to-8', img: Clock1To8 },
	{ id: 'close-icon', img: CloseIcon },
	{ id: 'close-icon-brown', img: CloseIconBrown },
	{ id: 'floor-grass', img: FloorGrass },
	{ id: 'floor-rocks', img: FloorRocks },
	{ id: 'floor-stones', img: FloorStones },
	{ id: 'floor-wood', img: FloorWood },

	// Introduction
	{ id: 'map', img: Map },
	{ id: 'controller-big', img: ControllerBig },
	{ id: 'dot-controller-active', img: DotControllerActive },
	{ id: 'dot-controller-inactive', img: DotControllerInactive },
	{ id: 'dot-aivd', img: DotAivd },
	{ id: 'dot-knmi', img: DotKnmi },
	{ id: 'dot-logius', img: DotLogius },
	{ id: 'dot-rig', img: DotRig },
	{ id: 'dot-duo', img: DotDuo },
	{ id: 'dot-ivo', img: DotIvo },
	{ id: 'dot-justid', img: DotJustid },
	{ id: 'dot-rivm', img: DotRivm },
	{ id: 'dot-jio', img: DotJio },
	{ id: 'dot-dictu', img: DotDictu },
	{ id: 'dot-rws', img: DotRws },
	{ id: 'dot-ssc-ict', img: DotSscIct },
	{ id: 'marker-aivd', img: MarkerAivd },
	{ id: 'marker-rig', img: MarkerRig },
	{ id: 'marker-knmi', img: MarkerKnmi },
	{ id: 'marker-logius', img: MarkerLogius },
	{ id: 'marker-justid', img: MarkerJustid },
	{ id: 'marker-ssc-ict', img: MarkerSscIct },
	{ id: 'marker-duo', img: MarkerDuo },
	{ id: 'marker-ivo', img: MarkerIvo },
	{ id: 'marker-rivm', img: MarkerRivm },
	{ id: 'marker-jio', img: MarkerJio },
	{ id: 'marker-dictu', img: MarkerDictu },
	{ id: 'marker-rws', img: MarkerRws },
	{ id: 'wave-1', img: WaveOne },
	{ id: 'wave-2', img: WaveTwo },
	{ id: 'wave-3', img: WaveThree },
	{ id: 'next-page', img: NextPage },
	{ id: 'prev-page', img: PrevPage },
	{ id: 'logo-aivd', img: LogoAivd },
	{ id: 'logo-knmi', img: LogoKnmi },
	{ id: 'logo-logius', img: LogoLogius },
	{ id: 'logo-rig', img: LogoRig },
	{ id: 'logo-duo-ict', img: LogoDuoIct },
	{ id: 'logo-ssc-ict', img: LogoSscIct },
	{ id: 'logo-justid', img: LogoJustid },
	{ id: 'logo-rivm', img: LogoRivm },
	{ id: 'logo-jio', img: LogoJio },
	{ id: 'logo-dictu', img: LogoDictu },
	{ id: 'logo-rws', img: LogoRws },
	{ id: 'logo-ivo', img: LogoIvo },
	{ id: 'organisation-bg', img: OrganisationBg },
	{ id: 'easter-egg-bg', img: EasterEggBg }
];
