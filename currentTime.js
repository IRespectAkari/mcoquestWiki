function currentTime() {
  // console.log("currentTime done");
  // 2000年1月1日(月) 00:00:00
  // 上記の形式で現在時刻をリアルタイムに表示する。
  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth() + 1;
  var day = now.getDate();
  var hour = ('00' + parseInt(now.getHours())).slice(-2);
  var min = ('00' + parseInt(now.getMinutes())).slice(-2);
  var sec = ('00' + parseInt(now.getSeconds())).slice(-2);
  const numToDayList = ["日", "月", "火", "水", "木", "金", "土"];
  const today = numToDayList[parseInt(now.getDay())];
  //出力用
  var DAY = year + "年" + mon + "月" + day + "日(" + today + ")";
  var TIME = hour + ":" + min + ":" + sec;
  // var TIME = hour + "時" + min + "分" + sec + "秒";
  var daySpan = document.getElementById("currentDay");
  var timeSpan = document.getElementById("currentTime");
  daySpan.innerHTML = DAY;
  timeSpan.innerHTML = TIME;

  return;
}

window.setInterval(currentTime, 200);
