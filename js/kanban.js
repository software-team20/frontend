window.name = 'Kanban';

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}
function createDIV(){
    var obj=document.getElementById("todo");
    var newDIV=document.createElement("div");
    newDIV.setAttribute("class","task");
    newDIV.setAttribute("draggable","true");
    newDIV.setAttribute("ondragstart","drag(event)");
    var p1=document.createElement("p");
    var str=document.createElement("strong");
    str.setAttribute("onclick","insidekanban()");
    str.innerText="두번째 회의";

    // 삭제버튼 생성
    var debtn=document.createElement("button");
    debtn.setAttribute("id","deletebtn");
    debtn.setAttribute("onclick","deleteTask()");
    debtn.setAttribute("style","display:none;");
    var img1=document.createElement("img");
    img1.setAttribute("src","./deletebutton.png");
    debtn.appendChild(img1);
    // 편집버튼 생성
    var pebtn=document.createElement("button");
    pebtn.setAttribute("id","pencilbtn");
    pebtn.setAttribute("onclick","editTask()");
    pebtn.setAttribute("style","display:none;");
    var img2=document.createElement("img");
    img2.setAttribute("src","./pencilbutton.png");
    pebtn.appendChild(img2);


    p1.appendChild(str);
    p1.appendChild(debtn);
    p1.appendChild(pebtn);
    var p2=document.createElement("p");
    p2.setAttribute("onclick","insidekanban()");

    var divm=document.createElement("div");
    divm.setAttribute("id","membericon");
    divm.innerHTML="김진선";
    var br=document.createElement("BR");

    var a2=document.createElement("a");
    a2.innerText="Due Date:";
    p2.appendChild(divm);
    p2.appendChild(br);
    p2.appendChild(a2);

    newDIV.appendChild(p1);
    newDIV.appendChild(p2);
    newDIV.addEventListener("mouseover",function(){
        debtn.style.display="block"
        pebtn.style.display="block"
    });
    newDIV.addEventListener("mouseout",function(){
        debtn.style.display="none"
        pebtn.style.display="none"
    });
    obj.appendChild(newDIV);
}
function createTask(){
    //창 크기 지정
    var width = 500;
    var height = 700;
    
    //pc화면기준 가운데 정렬
    var left = (window.screen.width / 2) - (width/2);
    var top = (window.screen.height / 4);
    
        //윈도우 속성 지정
    var windowStatus = 'width='+width+', height='+height+', left='+left+', top='+top+', scrollbars=yes, status=yes, resizable=yes, titlebar=yes';
    
    //연결하고싶은url
    const url = "./insidekanban.html";

    //등록된 url 및 window 속성 기준으로 팝업창을 연다.
    window.open(url, "edit", windowStatus);
}

function editTask(){
    //창 크기 지정
    var width = 518;
    var height = 692;
    
    //pc화면기준 가운데 정렬
    var left = (window.screen.width / 2) - (width/2);
    var top = (window.screen.height / 4);
    
    //윈도우 속성 지정
    var windowStatus = 'width='+width+', height='+height+', left='+left+', top='+top+', scrollbars=yes, status=yes, resizable=yes, titlebar=yes';
    
    //연결하고싶은url
    const url = "./insidekanban.html";

    //등록된 url 및 window 속성 기준으로 팝업창을 연다.
    window.open(url, "edit", windowStatus);
}
function deleteTask(){
    alert("삭제")
}
function insidekanban(){
    //창 크기 지정
    var width = 500;
    var height = 500;
    
    //pc화면기준 가운데 정렬
    var left = (window.screen.width / 2) - (width/2);
    var top = (window.screen.height / 4);
    
        //윈도우 속성 지정
    var windowStatus = 'width='+width+', height='+height+', left='+left+', top='+top+', scrollbars=yes, status=yes, resizable=yes, titlebar=yes';
    
    //연결하고싶은url
    const url = "./insidekanban.html";

    //등록된 url 및 window 속성 기준으로 팝업창을 연다.
    window.open(url, "edit", windowStatus);
}   