md
```javascript
javascript:(()=>{if(!window.TurndownService){let e=document.createElement("script");e.integrity="sha512-vs+sfpOrzS4lF58OlkJP4vJSeUPKQFbhEeVA4wycLrlwThE+oKkbIWxi40ADv3UdmLLrRnfgTL3mGDLT+nih6Q==",e.src="https://cdnjs.cloudflare.com/ajax/libs/turndown/7.1.2/turndown.js",e.crossOrigin="anonymous",e.referrerPolicy="no-referrer",document.body.appendChild(e)}let r=window.setInterval(()=>{if(!window.TurndownService){console.log("waiting...");return}window.clearInterval(r);let e=new window.TurndownService,n=!0,l=e.turndown(document.querySelector("main").innerHTML).replaceAll(/^\d+ \/ \d+$/gm,()=>{let e=n?"---USER---":"---ChatGPT---";return n=!n,e}).replace(/Model: Default \(GPT-[\d.]+\)$/gm,"").replace(/^!\[\]\(data.*/gm,"").replace(/^Regenerate response$/gm,"").replace(/^\[ChatGPT.*$/gm,"").replace(/^\s*[\r\n]+(?=\S)/m,"");navigator.clipboard.writeText(l)},100)})();
```

repeat
```javascript
javascript:(()=>{let e=0,t=prompt("ChatGPTに渡す文字列を入力してください"),a=document.querySelector("textarea");console.log("repeat start"),console.log(a);let l=setInterval(()=>{a.value=t,console.log({i:e});let r=document.querySelector("textarea");r.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",keyCode:13})),e++>10&&clearInterval(l)},6e4)})();
```
screenshot
```javascript
javascript:(()=>{try{let e="div[class^=react-scroll-to-bottom--css-] > div:nth-child(1)",t=document.querySelectorAll(e)[document.querySelectorAll(e).length-1];if(!window.marked){let r=document.createElement("script");r.integrity="sha512-zAs8dHhwlTbfcVGRX1x0EZAH/L99NjAFzX6muwOcOJc7dbGFNaW4O7b9QOyCMRYBNjO+E0Kx6yLDsiPQhhWm7g==",r.src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js",r.crossOrigin="anonymous",r.referrerPolicy="no-referrer",document.body.appendChild(r)}let c=setInterval(()=>{window.marked&&(clearInterval(c),window.marked(t).then(function(e){let t=e.toDataURL(),r=URL.createObjectURL(function e(t){let r=t.split(";base64,"),c=r[0].split(":")[1],l=atob(r[1]),a=[];for(let n=0;n<l.length;n++)a.push(l.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:c})}(t)),c=document.createElement("a");c.href=r,c.download="ChatGPT-screenshot.png",c.click(),URL.revokeObjectURL(r)}).catch(e=>{alert(e)}))},100)}catch(l){alert(l)}})();
```
save
```javascript
javascript:(()=>{if(!window.TurndownService){let e=document.createElement("script");e.integrity="sha512-vs+sfpOrzS4lF58OlkJP4vJSeUPKQFbhEeVA4wycLrlwThE+oKkbIWxi40ADv3UdmLLrRnfgTL3mGDLT+nih6Q==",e.src="https://cdnjs.cloudflare.com/ajax/libs/turndown/7.1.2/turndown.js",e.crossOrigin="anonymous",e.referrerPolicy="no-referrer",document.body.appendChild(e)}let r=window.setInterval(()=>{if(!window.TurndownService){console.log("waiting...");return}window.clearInterval(r);let e=new window.TurndownService,n=!0,t=e.turndown(document.querySelector("main").innerHTML).replaceAll(/^\d+ \/ \d+$/gm,()=>{let e=n?"---USER---":"---ChatGPT---";return n=!n,e}).replace(/Model: Default \(GPT-[\d.]+\)$/gm,"").replace(/^!\[\]\(data.*/gm,"").replace(/^Regenerate response$/gm,"").replace(/^\[ChatGPT.*$/gm,"").replace(/^\s*[\r\n]+(?=\S)/m,"");function l(e,r){let n=new Blob([e],{type:"text/plain"}),t=URL.createObjectURL(n),l=document.createElement("a");l.href=t,l.download=r,document.body.appendChild(l),l.click(),URL.revokeObjectURL(t),document.body.removeChild(l)}l(t,"chatgpt.md")},100)})();
```
