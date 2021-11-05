selYear = document.querySelector("#yearSelect");
selMonth = document.querySelector("#monthSelect");
selDay = document.querySelector("#daySelect");
selComment = document.querySelector(".calreturn");
console.log(selComment);
let totaldate = "";
let getFirstDay = 0;
let dateToday = new Date();
// let yearIndex=0, monthIndex=0, dayIndex=0; //紀錄當日索引值
// console.log(dateToday.getDay());

//year 選單置入
let selYearCDF = document.createDocumentFragment();
for (let i = 2010; i <= 2025; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", i);
    if (i == dateToday.getFullYear()) {
        // yearIndex=y//紀錄今年索引值
        opt.setAttribute("selected", true);//設定當日為預設
    }//if
    let optTxt = document.createTextNode(i);
    opt.appendChild(optTxt);
    selYearCDF.appendChild(opt);

}//for
selYear.appendChild(selYearCDF);

//month 選單置入
let selMonCDF = document.createDocumentFragment();
for (let i = 1; i <= 12; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", i);
    if (i == dateToday.getMonth() + 1) {
        opt.setAttribute("selected", true);//設定當日為預設
    }//if
    let optTxt = document.createTextNode(i);
    opt.appendChild(optTxt);
    selMonCDF.appendChild(opt);
}
selMonth.appendChild(selMonCDF);
getSelValue(); //day選單載入


//Day表單置入
//selection add event
selYear.addEventListener("change", getSelValue)
selMonth.addEventListener("change", getSelValue)

function getSelValue() {
    // console.log(selYear.value);
    // console.log(selMonth.value);
    let seldate = new Date(selYear.value, selMonth.value, 0);
    console.log(seldate);
    console.log(seldate.getDate()) //取得該月份總天數
    console.log(seldate.getMonth() + 1)
    //input value day
    selDayInput(seldate.getDate());
    totaldate = seldate.getDate();

    //取得選擇月份第一天
    let selfirstday = new Date(selYear.value, selMonth.value - 1, 1);
    getFirstDay = selfirstday.getDay();

}

function selDayInput(daySelInput) {
    selDay.innerHTML = ""; //移除舊資料避免重複堆疊
    let selDayCDF = document.createDocumentFragment();
    for (let i = 1; i <= daySelInput; i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", i);
        if (i == dateToday.getDate()) {
            opt.setAttribute("selected", true);//設定當日為預設
        }//if
        let optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        selDayCDF.appendChild(opt);
    }
    selDay.appendChild(selDayCDF);
    
}


function calRefresh(){
//table form建立
document.querySelector(".calmain").innerHTML="";
let table = document.createElement("table");
table.setAttribute("class", "tablebody")
table.style.color = "white";
let trhead = document.createElement("trhead");
let trbody = document.createElement("trbody");
table.appendChild(trhead);
table.appendChild(trbody);
document.querySelector(".calmain").appendChild(table);
let trcreate = document.createElement("tr");
for (i = 0; i < 7; i++) {
    let td = document.createElement("td");
    td.innerHTML = day(i);
    td.setAttribute("class", "tdH")
    trcreate.appendChild(td);
}
trhead.appendChild(trcreate);


//日期依月份加入
    let k = 1;
    let firstFlag = true;
    // console.log(Math.ceil(totaldate / 7));
for (j = 0; j <= Math.ceil(totaldate / 7); j++) {
    trcreate = document.createElement("tr");
    for (i = 0; i < 7; i++) {
        let n = document.createElement("td");

            if ((i < getFirstDay && firstFlag == true) || k > totaldate) {
                n.innerHTML = "";
                n.setAttribute("class", "noDate")
            } else if(i >= getFirstDay && firstFlag == true ){
                firstFlag = false;
                n.innerHTML = k;
                if(k==selDay.value){
                    n.setAttribute("class", "selDate")
                    console.log(k);
                    k++;
                    selComment.innerHTML=`您選擇的是${selYear.value}年${selMonth.value}月${selDay.value}日`;
                }else{
                k++;
                n.setAttribute("class", "normalDate")}
            }
            else if(firstFlag == false){
                n.innerHTML = k;
                if(k==selDay.value){
                    n.setAttribute("class", "selDate")
                    console.log(k);
                    k++;
                    selComment.innerHTML=`您選擇的是${selYear.value}年${selMonth.value}月${selDay.value}日`;
                }else{
                k++;
                n.setAttribute("class", "normalDate")}
            }
            trcreate.appendChild(n);
            trbody.appendChild(trcreate);
    }//for
}//for
document.querySelector(".calmain").appendChild(table);
    console.log(document.querySelector(".calmain"));
}
//日期表刷新
calRefresh();
selYear.addEventListener("change", calRefresh)
selMonth.addEventListener("change", calRefresh)
selDay.addEventListener("change", calRefresh)
    //取得星期幾
    function day(day) {
        switch (day) {
            case 0:
                return "日";
            case 1:
                return "一";
            case 2:
                return "二";
            case 3:
                return "三";
            case 4:
                return "四";
            case 5:
                return "五";
            case 6:
                return "六";
        }
    }