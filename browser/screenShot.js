(() => {
  try {
    const chatGptSelector = 'div[class^=react-scroll-to-bottom--css-] > div:nth-child(1)';
    // キャプチャしたい要素を指定する。↑のセレクタは ChatGPT のデザインが変わると変更する必要が出てくる場合があります
    const targetDiv = document.querySelectorAll(chatGptSelector)[document.querySelectorAll(chatGptSelector).length - 1];
    // markedを使用できるようにする
    if (!window.marked) {
      const scriptEl = document.createElement('script');
      // ハッシュの検証でCDN先の乗っ取り対策
      scriptEl.integrity =
        'sha512-zAs8dHhwlTbfcVGRX1x0EZAH/L99NjAFzX6muwOcOJc7dbGFNaW4O7b9QOyCMRYBNjO+E0Kx6yLDsiPQhhWm7g==';
      scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js';
      scriptEl.crossOrigin = 'anonymous';
      scriptEl.referrerPolicy = 'no-referrer';
      document.body.appendChild(scriptEl);
    }

    // markedを使用できるようになるまで待ち、使用できる様になったら待ちを解除する
    const intervalId = setInterval(() => {
      if (!window.marked) {
        return;
      }
      clearInterval(intervalId);
      // markedを使用して、要素をキャプチャする
      window
        .marked(targetDiv)
        .then(function (canvas) {
          // 画像のURLを取得する
          const imgURL = canvas.toDataURL();

          // URLオブジェクトを作成する
          const url = URL.createObjectURL(dataURLtoBlob(imgURL));

          // a要素を作成して、href属性とdownload属性を設定する
          const a = document.createElement('a');
          a.href = url;
          a.download = 'ChatGPT-screenshot.png';

          // a要素をクリックして、画像をダウンロードする
          a.click();

          // URLオブジェクトを解放する
          URL.revokeObjectURL(url);

          // dataURLをBlobに変換する関数
          function dataURLtoBlob(dataURL) {
            const parts = dataURL.split(';base64,');
            const contentType = parts[0].split(':')[1];
            const byteCharacters = atob(parts[1]);
            const byteArrays = [];
            for (let i = 0; i < byteCharacters.length; i++) {
              byteArrays.push(byteCharacters.charCodeAt(i));
            }
            return new Blob([new Uint8Array(byteArrays)], { type: contentType });
          }
        })
        .catch((e) => {
          alert(e);
        });
    }, 100);
  } catch (e) {
    alert(e);
  }
})();
