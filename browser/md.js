(() => {
  // html2mdのためのライブラリを読み込む
  if (!window.TurndownService) {
    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://unpkg.com/turndown/dist/turndown.js';
    document.body.appendChild(scriptEl);
  }
  // ライブラリが読み込まれるまで待つ
  const intervalId = window.setInterval(() => {
    if (!window.TurndownService) {
      console.log('waiting...');
      return;
    }
    window.clearInterval(intervalId);
    // html2mdの実行
    const turndownService = new window.TurndownService();
    let userHasTurn = true;
    const markdown = turndownService
      .turndown(document.querySelector('main').innerHTML)
      // ユーザーの発言とChatGPTの発言を区別する
      .replaceAll(/^\d+ \/ \d+$/gm, () => {
        const ret = userHasTurn ? '---USER---' : '---ChatGPT---';
        userHasTurn = !userHasTurn;
        return ret;
      })
      // 不要な行や文字列を削除する
      .replace(/Model: Default \(GPT-[\d.]+\)$/gm, '')
      .replace(/^!\[\]\(data.*/gm, '')
      .replace(/^Regenerate response$/gm, '')
      .replace(/^\[ChatGPT.*$/gm, '')
      .replace(/^\s*[\r\n]+(?=\S)/m, '');

    // markdownをクリップボードにコピーする
    navigator.clipboard.writeText(markdown);
  }, 100);
})();
