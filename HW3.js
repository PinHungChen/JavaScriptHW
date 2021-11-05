let img = document.querySelectorAll("img.imgstar");
        let gradeInsert = document.querySelector(".descGrade .grade");
        console.log(img);

        //Event add
        addEventStar();

        //add event
        function addEventStar() {
            for (var imgs of img) {
                imgs.addEventListener("mouseover", mouseover);
                imgs.addEventListener("mouseout", mouseOut);
                imgs.addEventListener("click", click);
            }
        }

        //mouse in change
        function mouseover() {
            /*console.log(this.id);*/
            for (var i = 0; i < this.id; i++) {
                /*console.log(img[i]);*/
                img[i].src = `GradeImg/star${img[i].id}.png`;
            }
            gradeInsert.innerHTML = this.id;
        }

        //mouse out 恢復
        function mouseOut() {
            for (var i = 0; i < this.id; i++) {
                /*console.log(img[i]);*/
                img[i].src = "GradeImg/star0.png";
            }
            gradeInsert.innerHTML = 0;
        }

        //remove EventListener
        function click() {
            /*console.log(this.id);*/
            for (var imgs of img) {
                imgs.removeEventListener("mouseover", mouseover);
                imgs.removeEventListener("mouseout", mouseOut);
            } 

        }

        //double click to recover all event
        document.addEventListener("dblclick", dblClick);
        function dblClick() {
            addEventStar();
            for (var imgs of img) {
                imgs.src = "GradeImg/star0.png";
            }
            gradeInsert.innerHTML = 0;
        }