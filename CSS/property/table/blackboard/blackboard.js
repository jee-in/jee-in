
function init() {
    let tbody = `
    <tbody>
    <tr>
        <td>음료</td>
        <td>가격</td>
        <td>개수</td>
    </tr>
    <tr>
        <td>사과 케일</td>
        <td>3000원</td>
        <td>1개</td>
    </tr>
    <tr>
        <td>딸기 오렌지</td>
        <td>4000원</td>
        <td>2개</td>
    </tr>
    <tr>
        <td>호두 바나나</td>
        <td>5000원</td>
        <td>3개</td>
    </tr>
    </tbody>
    `
    
    document.getElementById("table").innerHTML = tbody;
}

addEventListener("load", function() {
    init();

    let btn_default = document.querySelector(".btn_default");
    let btn_table_padding = document.querySelector(".btn_table_padding");
    let table = document.getElementById("table");
    let table_td = document.querySelectorAll("#table td");
    let btn_table_background = document.querySelector(".btn_table_background");
    let btn_td_background = document.querySelector(".btn_td_background");
    let btn_td_padding = document.querySelector(".btn_td_padding");
    let btn_table_border = document.querySelector(".btn_table_border");
    let toggle_switch = document.querySelector(".switch");
    let btn_borderSpacing = document.querySelector(".btn_borderSpacing");
    let btn_td_border = document.querySelector(".btn_td_border");
    
    toggle_switch.addEventListener("click", function() {
        table.style.borderCollapse = "collapse";
    });

    btn_default.addEventListener("click", function() {
        table.removeAttribute("style");
        for (let i = 0; i < table_td.length; i++) {
            table_td[i].removeAttribute("style");
        };
        console.log("btn_default");
    });

    btn_table_background.addEventListener("click", function() {
        table.style.backgroundColor = "darkgreen";
    });
    
    btn_table_border.addEventListener("click", function() {
        table.style.border = "medium solid black";
    });

    btn_table_padding.addEventListener("click", function() {
        table.style.padding = 20 + "px";
    });

    btn_borderSpacing.addEventListener("click", function() {
        table.style.borderSpacing = 20 + "px";
    });

    btn_td_background.addEventListener("click", function() {
        for (let i = 0; i < table_td.length; i++) {
            table_td[i].style.background = "darkgreen";
        };
    });

    btn_td_border.addEventListener("click", function() {
        for (let i = 0; i < table_td.length; i++) {
            table_td[i].style.border = "3px solid black";
        };
        
    });
    
    btn_td_padding.addEventListener("click", function() {

        for (let i = 0; i < table_td.length; i++) {
            table_td[i].style.padding = 20 + "px";
        };
    });
})