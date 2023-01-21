
function ulc (){
    const navm = document.getElementById("main-menu");
    const nav1s = navm.querySelectorAll("a.a1");
    const nav2s = navm.getElementsByClassName("menu");
    const len = nav1s.length;
    //下面是一级菜单展开，单一菜单展开后其他菜单NONE
/*    for(let i = 0; i<len; i++){
        nav1s[i].onclick=(function(i){
            return function(){
                for(let j=0; j<len; j++){
                    nav2s[j].style.display="none";
                }
                nav2s[i].style.display="block";
            }
        })(i)
    }
}*/
    for (let i = 0;i<len;i++){
        nav1s[i].onclick = function () {
            if (nav2s[i].style.display === "block"){
                nav2s[i].style.display = "none";
            }else {
                nav2s[i].style.display = "block";
            }

        }
    }
}
ulc();