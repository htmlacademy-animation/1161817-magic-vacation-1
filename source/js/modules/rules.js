import animateText from "../utils/animateText";

export default () => {
  const prizesTitleElement = document.querySelector(`.rules__title`);

  const titleAnimationSettings = {
    name: `fadeInIntro`,
    duration: 0.4,
    delay: 0.4,
    timingFunction: `ease`
  };

  animateText(prizesTitleElement, titleAnimationSettings);
};
