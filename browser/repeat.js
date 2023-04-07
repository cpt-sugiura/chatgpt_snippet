(() => {
  let i = 0;
  const MAX_COUNT = 10;
  const inputText = prompt('ChatGPTに渡す文字列を入力してください');
  const element = document.querySelector('textarea');
  console.log('repeat start');
  console.log(element);
  const intervalId = setInterval(() => {
    element.value = inputText;
    console.log({ i });
    const textAreaEl = document.querySelector('textarea');
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
