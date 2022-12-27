let dis = document.querySelectorAll(".menu")
let  st = document.getElementsByClassName("menu")
dis.onclick = function () {
    if (st.style.display === "none") {
        st.style.display = "block";
    } else {
        st.style.display = "none";
    }
}