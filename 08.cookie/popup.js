        //쿠키확인 생성
        function getCookie(name){
            //쿠키를 얻는다
            var cookies = document.cookie.split("; ");

            for(var i in cookies){
                if(cookies[i].search(name) != -1){ //쿠키를 찾은 경우
                    return true; //찾은 의미로 true를 반환
                }
            }
        }

        function createCookie(name,value){
            //쿠키유지기간
            var date = new Date();
            date.setDate(date.getDate() + 1);
            
            //쿠키생성
            var cookie = "";
            cookie += name+"="+value+";";
            cookie += "expires=" + date.toUTCString();
            console.log(cookie);
            document.cookie = cookie;
        }




