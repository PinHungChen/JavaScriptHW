
    //user verify
            document.querySelector("#usernameInput").addEventListener("blur", function () {
        let usernameInput = document.querySelector("#usernameInput").value;
                let uINPattern = new RegExp(".{2,}"); //是否大於2字元
                let uICPattern = new RegExp("[^\u4e00-\u9fff]"); //字元是否含中文以外
                let flag1 = false, flag2 = false, flag3 = false;
                //console.log(uINPattern.test(usernameInput));
                //console.log(uICPattern.test(usernameInput));

                if (usernameInput !== "") {
                    //非空字串
                    if (uINPattern.test(usernameInput)) {
                        //字元2以上
                        if (!uICPattern.test(usernameInput)) {
        //字元不 含中文以外
    } else {
        flag3 = true;
                        }
                    }
                    else {
        flag2 = true;
                        flag3 = true;
                    }
                } else {
        flag1 = true;
                    flag2 = true;
                    flag3 = true;
                }
                if (flag1 || flag2 || flag3) {
        document.querySelector(".usernameVerify").innerHTML = "<span class='incorrect'>格式錯誤</span>";
                } else {
        document.querySelector(".usernameVerify").innerHTML = "<span class='correct'></span>";
                }
                if (flag1 == true) {document.querySelector(".usernameInput .flag1").style.color = "red"; } else {
        document.querySelector(".usernameInput .flag1").style.color = "DimGrey";
                }
                if (flag2 == true) {document.querySelector(".usernameInput .flag2").style.color = "red"; } else {
        document.querySelector(".usernameInput .flag2").style.color = "DimGrey";
                }
                if (flag3 == true) {
        document.querySelector(".usernameInput .flag3").style.color = "red";
                } else {
        document.querySelector(".usernameInput .flag3").style.color = "DimGrey";
                }
            })

            //password verify
            document.querySelector("#passwordInput").addEventListener("blur", function () {
        let passwordInput = document.querySelector("#passwordInput").value;
                let pINPattern = new RegExp(".{6,}"); //是否大等於6字元
                let pICpattern = new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[!@#\$%\^&\*])");//是否含(數字)(字母)(特殊符號)
                let flag1 = false, flag2 = false, flag3 = false;
                //console.log(passwordInput);
                console.log(passwordInput.value);
                //console.log(pICpattern.test(passwordInput));
                if (passwordInput !== "") {
                    //非空字串
                    if (pINPattern.test(passwordInput)) {
                        //字元2以上
                        if (pICpattern.test(passwordInput)) {
        //字元含數字 字母 特殊符號
    } else {
        flag3 = true;
                        }
                    }
                    else {
        flag2 = true;
                        flag3 = true;
                    }
                } else {
        flag1 = true;
                    flag2 = true;
                    flag3 = true;
                }

                if (flag1 || flag2 || flag3) {
        document.querySelector(".passwordVerify").innerHTML = "<span class='incorrect'>格式錯誤</span>";
                } else {
        document.querySelector(".passwordVerify").innerHTML = "<span class='correct'></span>";
                }
                if (flag1 == true) {document.querySelector(".passwordInput .flag1").style.color = "red"; } else {
        document.querySelector(".passwordInput .flag1").style.color = "DimGrey";
                }
                if (flag2 == true) {document.querySelector(".passwordInput .flag2").style.color = "red"; } else {
        document.querySelector(".passwordInput .flag2").style.color = "DimGrey";
                }
                if (flag3 == true) {
        document.querySelector(".passwordInput .flag3").style.color = "red";
                } else {
        document.querySelector(".passwordInput .flag3").style.color = "DimGrey";
                }

            })

            //date verify
            document.querySelector("#datedInput").addEventListener("blur", function () {
        let datedInput = document.querySelector("#datedInput").value;
                let dINPatten = RegExp("[0-9]{4}/[0-1][0-9]/[0-3][0-9]");
                //console.log(datedInput);
                //console.log(dINPatten.test(datedInput));
                let flag1 = false, flag2 = false, flag3=false;
                if (datedInput !== "") {
                    //非空字串
                    if (dINPatten.test(datedInput)) {
        //日期格式正確
        let x = new Date(datedInput);
                        let y = `${x.getFullYear()}/${(x.getMonth() + 1).toString().padStart(2, "0")}/${x.getDate().toString().padStart(2, "0")}`;
                        //console.log(datedInput);
                        //console.log(y);
                        //console.log(y == datedInput);
                        if (y == datedInput) {
        //有效日期
    } else {
        flag3 = true;
                        }
                    }
                    else {
        flag2 = true;
                        flag3 = true;
                    }
                } else {
        flag1 = true;
                    flag2 = true;
                    flag3 = true;
                }

                if (flag1 || flag2 || flag3) {
        document.querySelector(".dateVerify").innerHTML = "<span class='incorrect'>格式錯誤</span>";
                } else {
        document.querySelector(".dateVerify").innerHTML = "<span class='correct'></span>";
                }
                if (flag1 == true) {document.querySelector(".datedInput .flag1").style.color = "red"; } else {
        document.querySelector(".datedInput .flag1").style.color = "DimGrey";
                }
                if (flag2 == true) {document.querySelector(".datedInput .flag2").style.color = "red"; } else {
        document.querySelector(".datedInput .flag2").style.color = "DimGrey";
                }
                if (flag3 == true) {document.querySelector(".datedInput .flag3").style.color = "red"; } else {
        document.querySelector(".datedInput .flag3").style.color = "DimGrey";
                }

            })

