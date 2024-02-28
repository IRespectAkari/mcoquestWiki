// 常時表示されるボタンへのイベント登録
const game_iframe = document.getElementById("game");
const wiki_iframe = document.getElementById("wiki");

const k_button = document.getElementById("threadIndex");
const g_button = document.getElementById("gamexn");

k_button.addEventListener("click", ()=>{
  game_iframe.src = "https://bbs1.sekkaku.net/bbs/milkchoco/"
  // console.log("threadIndexボタン : " + game_iframe);
}
);
g_button.addEventListener("click", ()=>{
  game_iframe.src = "https://milkchoko.sakura.ne.jp/quest/"
  // console.log("gamexnボタン : " + game_iframe);
}
);

// リンクのデータオブジェクト
const linkList = [{
  siteJPName: "mcoquestスレ",
  siteName: "keijibaxn",
  siteURL: "https://bbs1.sekkaku.net/bbs/milkchoco/mode=res&log=2167&submitlog=2167"
}, {
  siteJPName: "図書館",
  siteName: "tosyokaxn",
  siteURL: "https://bbs1.sekkaku.net/bbs/milkchoco/mode=res&log=2158&submitlog=2158"
}, {
  siteJPName: "パーティ募集",
  siteName: "patelibosyuu",
  siteURL: "https://bbs1.sekkaku.net/bbs/milkchoco/mode=res&log=2150&submitlog=2150"
}, {
  siteJPName: "妄想スレ",
  siteName: "mousou",
  siteURL: "https://bbs1.sekkaku.net/bbs/milkchoco/mode=res&log=2154&submitlog=2154"
}, {
  siteJPName: "雑談スレ",
  siteName: "zatudaxn",
  siteURL: "https://bbs1.sekkaku.net/bbs/milkchoco/mode=res&log=2160&submitlog=2160"
}, {
  siteJPName: "書き込みテストスレ",
  siteName: "kakikomitesuto",
  siteURL: "https://bbs1.sekkaku.net/bbs/milkchoco/mode=res&log=2089&submitlog=2089"
}];

// console.log(linkList);

// idからURLを返す
const getURLById = (id)=>{
  // console.log("getURL 実行");

  for (let e of linkList) {
    if (e.siteName === id) {
      return e.siteURL;
    }
  }
}

// ボタンの生成・追加・イベント登録
const createButtons = ()=>{
  // console.log("createButtons 実行");

  for (let e of linkList) {
    const button = document.createElement("button");
    button.innerHTML = e.siteJPName;
    button.id = e.siteName;
    button.addEventListener("click", iframeURLsetter);

    const parent = document.getElementById("anotherLinks");
    parent.appendChild(button);
  }
  return;
}

// 左iframe（id名gameのフレーム）のsrcを変更
const iframeURLsetter = (event)=>{
  // console.log("iframeURLsetter 実行");

  game_iframe.src = getURLById(event.target.id);

  return;
}

// window読み込み完了時にcreateButtonsを実行
window.addEventListener("load", createButtons);
