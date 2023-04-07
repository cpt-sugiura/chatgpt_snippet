(() => {
  // html2mdのためのライブラリを読み込む
  if (!window.TurndownService) {
    const scriptEl = document.createElement('script');
    // ハッシュの検証でCDN先の乗っ取り対策
    scriptEl.integrity =
      'sha512-vs+sfpOrzS4lF58OlkJP4vJSeUPKQFbhEeVA4wycLrlwThE+oKkbIWxi40ADv3UdmLLrRnfgTL3mGDLT+nih6Q==';
    scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/turndown/7.1.2/turndown.js';
    scriptEl.crossOrigin = 'anonymous';
    scriptEl.referrerPolicy = 'no-referrer';
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

    downloadTextFile(markdown, 'chatgpt.md');

    function downloadTextFile(text, filename) {
      // Blobオブジェクトを作成
      const blob = new Blob([text], {type: 'text/plain'});

      // 一時的なURLを作成
      const url = URL.createObjectURL(blob);

      // ダウンロードリンクを作成
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;

      // リンクをクリックしてダウンロードを開始
      document.body.appendChild(link);
      link.click();

      // 一時的なURLを解放
      URL.revokeObjectURL(url);

      // ダウンロードリンクを削除
      document.body.removeChild(link);
    }
    }, 100);
})();
