(() => {
  let i = 0;
  const MAX_COUNT = 10;
  const inputText = prompt('ChatGPTに渡す文字列を入力してください');
  const textAreaEl = document.querySelector('textarea');
  console.log('repeat start');
  console.log(textAreaEl);
  const intervalId = setInterval(() => {
    textAreaEl.value = inputText;
    console.log({ i });
    const btnEl = document.querySelector('button.absolute');
    btnEl.click();
    textAreaEl.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        keyCode: 13,
      })
    );
    if (i++ > MAX_COUNT) {
      clearInterval(intervalId);
    }
  }, 60 * 1000);
})();
