import animateText from "../utils/animateText";

export default () => {
  const gameTitleElement = document.querySelector(`.game__title`);

  const titleAnimationSettings = {
    name: `fadeInIntro`,
    duration: 0.4,
    delay: 0.4,
    timingFunction: `ease`
  };

  animateText(gameTitleElement, titleAnimationSettings);
};