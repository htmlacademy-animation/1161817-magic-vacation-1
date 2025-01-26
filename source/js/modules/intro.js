import animateText from "../utils/animateText";

export default () => {
  const introTitleElement = document.querySelector(`.intro__title`);
  const introDateElement = document.querySelector(`.intro__date`);

  const titleAnimationSettings = {
    name: `fadeInIntro`,
    duration: 0.4,
    delay: 0.4,
    timingFunction: `ease`
  };
  const dateAnimationSettings = {
    name: `fadeInIntro`,
    duration: 0.4,
    delay: 1.4,
    timingFunction: `ease`
  };

  animateText(introTitleElement, titleAnimationSettings, true);
  animateText(introDateElement, dateAnimationSettings);
};
