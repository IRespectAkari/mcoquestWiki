function tableCreator() {
  // console.log("tableCreator done");

  const data = [{
    youbi: "月",
    datas: [["-", "砥石", "山賊"], ["金属探知機", "毒鉱石", "山賊"]]
  }, {
    youbi: "火",
    datas: [["-", "魔石", "ウィル・オ・ウィスプ"],
            ["金属探知機", "錆び付いた短剣", "ウィル・オ・ウィスプ"],
            ["ランタン", "光の粉", "ウィル・オ・ウィスプ"], 
            ["毒鉱石", "毒素の塊", "ウィル・オ・ウィスプ"]]
  }, {
    youbi: "水",
    datas: [["-", "不思議な卵", "岩トカゲ"]]
  }, {
    youbi: "木",
    datas: [["-", "？？？", "コボルト、メイジコボルト、コボルトエリート"], 
            ["-", "不思議な糸", "コボルト、メイジコボルト、コボルトエリート"],
            ["-", "砥石", "コボルト、メイジコボルト、コボルトエリート"], 
            ["-", "強化石", "コボルト、メイジコボルト、コボルトエリート"],
            ["金属探知機", "錆び付いた短剣", "コボルト、メイジコボルト、コボルトエリート"]]
  }, {
    youbi: "金",
    datas: [["-", "魔石", "マッドマン、マッドゴーレム"], 
            ["-", "鉄鉱石", "マッドマン、マッドゴーレム"], 
            ["-", "砥石", "マッドマン、マッドゴーレム"], 
            ["-", "強化石", "マッドマン、マッドゴーレム"],
            ["金属探知機", "錆び付いた短剣", "マッドマン、マッドゴーレム"]]
  }, {
    youbi: "土",
    datas: [["-", "魔石", "マッドマン、マッドゴーレム"], 
            ["-", "砥石", "マッドマン、マッドゴーレム"],
            ["-", "強化石", "マッドマン、マッドゴーレム"],
            ["金属探知機", "錆び付いた短剣", "マッドマン、マッドゴーレム"]]
  }, {
    youbi: "日",
    datas: [["-", "不思議な糸", "おばけきのこ、おばけきのこの群れ"]]
  }];

  // console.log(data);

  // 表生成関数
  const createTable = (addData, capText)=>{
    const midasi = ["持ち物", "報酬", "敵"];
    const classes = ["motimono", "housyuu", "teki"];

    var table = document.createElement("table");
    // 表のキャプション（見出し）追加
    var cap = document.createElement("caption");
    cap.innerHTML = `${capText} (${addData.youbi})`;
    table.appendChild(cap);

    var tr = document.createElement("tr");

    // 見出しセルの書き込み
    for (let i = 0; i < 3; i++) {
      var th = document.createElement("th");
      th.innerHTML = midasi[i];
      th.classList.add(classes[i]);
      tr.appendChild(th);
    }
    table.appendChild(tr);

    // 情報の書き込み
    for (let e of addData.datas) {
      var tr = document.createElement("tr");
      for (let i = 0; i < 3; i++) {
        var td = document.createElement("td");
        td.innerHTML = e[i];
        if (e[i] === "-") {
          td.style.fontWeight = "bold";
        }
        td.classList.add(classes[i]);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    return table;
  }

  // 表の更新時にバグらない為に前回の表を削除する関数
  const cloneAndRenew = (old,table)=>{
    //ガワだけ複製して…
    var clone = old.cloneNode(false);
    //すげ替え。
    old.parentNode.replaceChild(clone, old);

    clone.appendChild(table);

    return;
  }

  const numToDayList = ["日", "月", "火", "水", "木", "金", "土"];
  const todayCap = "本日のほら穴";
  const nextCap = "明日のほら穴";

  var now = new Date();
  var i = parseInt(now.getDay());
  const todayInJP = numToDayList[i];
  const nextInJP = numToDayList[(i + 1) % 7];

  const todayData = data.find(({youbi})=>youbi == todayInJP);
  const nextData = data.find(({youbi})=>youbi == nextInJP);

  var todayTable = createTable(todayData, todayCap);
  var nextTable = createTable(nextData, nextCap);

  var oldToday = document.getElementById("todaysHoraanaTable");
  var oldNext = document.getElementById("nextHoraanaTable");

  cloneAndRenew(oldToday, todayTable);
  cloneAndRenew(oldNext, nextTable);

  return;
}

// ページ読み込み時にtableCreator()を実行する
addEventListener("load", tableCreator);

// 日付変更時に実行
const d = new Date();
const nextDay = d.setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
const nowTime = new Date();
const tommorowFromNow = ()=>nextDay - nowTime.getTime();

setTimeout(tableCreator(), tommorowFromNow);
