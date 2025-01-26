export default (node, settings, withSplit) => {
  const content = node.textContent;
  node.textContent = ``;

  const lines = withSplit ? content.split(` `) : [content];

  // Применяем глобальную задержку ко всему узлу перед началом анимации
  setTimeout(() => {
    lines.forEach((line, lineIndex) => {
      const newLine = document.createElement(`span`);
      newLine.classList.add(`line`);
      node.appendChild(newLine);

      // Задержка для текущего слова/строки (линии)
      const wordDelay = lineIndex * (settings.duration + 0.1);

      line.split(``).forEach((char, charIndex) => {
        const newChar = document.createElement(`span`);

        // Проверяем, что символ не является ни буквой (латиница и кириллица), ни цифрой
        const isNotLetterOrDigit = !/[a-zA-Zа-яА-ЯёЁ0-9]/.test(char);

        newChar.textContent = char;
        newChar.style.display = `inline-block`;
        newChar.style.verticalAlign = `middle`; // Добавляем вертикальное выравнивание
        newChar.style.lineHeight = `1`; // Делаем line-height равным 100% от высоты шрифта

        // Разные задержки для первой, второй и третьей буквы
        let charDelay;
        if (charIndex % 3 === 0) {
          charDelay = 0.1;
        } else if (charIndex % 3 === 1) {
          charDelay = 0.15;
        } else {
          charDelay = 0;
        }

        // Итоговая задержка: задержка для слова + индивидуальная задержка символа
        const finalDelay = wordDelay + settings.delay * charDelay;

        newChar.style.animation = `${settings.name} ${settings.duration}s ${isNotLetterOrDigit ? wordDelay : finalDelay}s ${settings.timingFunction} backwards`;
        newLine.appendChild(newChar);
      });

      if (withSplit) {
        node.appendChild(document.createElement(`br`));
      }
    });
  }, settings.delay * 1000); // Применяем глобальную задержку ко всему узлу
};
