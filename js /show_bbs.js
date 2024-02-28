const link = "https://bbs1.sekkaku.net/bbs/milkchoco/";
const iframe = document.getElementById("game");
const button = document.getElementById("special");

button.addEventListener("click", ()=>{
  iframe.src = link;
}
);

iframe.addEventListener("load", console.log("iframe load!"));
// iframe.addEventListener("load", ()=>{
//   // URLの取得
//   let url = iframe.src;
//   console.log("url:" + url);
//   if (url != "https://milkchoko.sakura.ne.jp/quest/") {
//     // URLが https://milkchoko.sakura.ne.jp/quest/ の場合に実行する処理
//     button.classList.add("button_hide");
//     console.log("true");
//   } else {
//     button.classList.remove("button_hide");
//     console.log("else");
//   }
// }
// );
