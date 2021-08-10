let innerHeight = window.innerHeight; //浏览器可视区高度

//个人技能数据
let skillValues = [
    {
        "type":"HTML",
        "value":0.8,
    },
    {
        "type":"CSS",
        "value":0.8,
    },
    {
        "type":"JAVASCRIPT",
        "value":0.75,
    },
    {
        "type":"NODE.JS",
        "value": 0.60,
    },
    {
        "type":"BOOTSTRAPT",
        "value": 0.80,
    },
    {
        "type":"ELEMENTUI",
        "value": 0.80,
    },
    {
        "type":"LESS",
        "value":0.70,
    },
    {
        "type": "SASS",
        "value": 0.60,
    },
    {
        "type": "WEBPACK",
        "value": 0.50,
      
    },
    {
        "type":"GIT",
        "value": 0.50,
    },
    {
        "type": "VUE.JS",
        "value": 0.7,
      
    },
    {
        "type":"REACT",
        "value":  0.6,
    }
]


navbtnEvent(); //导航按钮点击展开导航栏

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //页面滑动距离
    navBg(scrollTop);
    skillboxAnimate(scrollTop);
    progressAnimate(scrollTop); //个人技能进度条
    projectAnimate(scrollTop);
    campusAnimate(scrollTop);
});

/**
 * 导航按钮点击展开导航栏
 */
function navbtnEvent(){
    let navbtn = document.querySelector("#navbtn");
    let header = document.querySelector("header");
    let nav =  document.querySelector("#nav");
    navbtn.addEventListener("click",function(){
        nav.classList.toggle("show");

        if(nav.classList.contains("show")){
            header.classList.add("active");
            this.classList.add("show");
            this.querySelector("span").innerText="\ue61e";
       }else{
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let info = document.querySelector("#info");
            if(scrollTop < (info.offsetHeight - 20)){
                header.classList.remove("active");
            }
            this.classList.remove("show");
            this.querySelector("span").innerText="\ue620";
        }
    })
}

/**
 * 导航栏改变背景颜色
 * @param {number} scrollTop 页面卷动的距离
 */
function navBg(scrollTop){
    let header = document.querySelector("header");
    let info = document.querySelector("#info");
    let nav =  document.querySelector("#nav");
    if(scrollTop > (info.offsetHeight - 20)){
        if(header.classList.contains("active")){
            return;
        }
        header.classList.add("active");
    }else{
        if(!header.classList.contains("active") || nav.classList.contains("show")){
            return;
        }
        header.classList.remove("active");
    }
}


/**
 * 个人技能内容盒子动画
 * @param {number} scrollTop 页面卷动的距离
 * @returns 
 */
function skillboxAnimate(scrollTop){
    let skills = document.querySelector(".skills");
    let itemTop = skills.offsetTop - scrollTop;   //个人技能栏目顶部距离浏览器可视区域顶部的位置
    let row = skills.querySelector(".row");

    if(itemTop < (innerHeight - 20)){
        if(row.classList.contains("active")){
            return;
        }
        row.classList.add("active");
    }else{
        if(!row.classList.contains("active")){
            return;
        }
        row.classList.remove("active");
    }
}

/**
 * 个人技能进度条加载动画
 * @param {number} scrollTop 页面卷动的距离
 * 判断元素与可视区顶部的距离进行判断是否播放动画
 * @returns 
 */
function progressAnimate(scrollTop) {

    let skills = document.querySelector(".skills");
    let progressbox = skills.querySelectorAll(".skill-item .progressbox");
    let percent =  skills.querySelectorAll(".skill-item h3 span");

    progressbox.forEach((el,k) => {
            let itemTop = el.offsetTop - scrollTop + el.offsetHeight;   //进度条底部距离浏览器可视区域顶部的位置
            let progress = el.querySelector(".progress"); //进度条
            console.log(itemTop)
            //判断进度条是否显示在页面，显示则给进度条加动画
            if (itemTop < (innerHeight - 20 )) {
                //防抖优化
                if (progress.getAttribute("animated") == 1) {
                    return;
                }
                //设置进度条数据
                progress.style = `width:${skillValues[k].value*100}%;`;
                percent[k].innerText = `${skillValues[k].value*100}%`;
                progress.setAttribute("animated", 1);
            } else {
                console.log("hhhh")
                //防抖优化
                if (progress.getAttribute("animated") == 0) {
                    return;
                }
                //移出页面时重置进度条
                progress.style = "width:0";
                progress.setAttribute("animated", 0);
            }
        }
    );
}

/**
 * 项目盒子进入效果
 */
function projectAnimate(scrollTop){
    let row = document.querySelector(".project .row");
    let itemTop = row.offsetTop - scrollTop;   //个人技能栏目顶部距离浏览器可视区域顶部的位置
  
    // console.log(itemTop);
    if(itemTop < (innerHeight - 20) && row.offsetHeight+itemTop > 0){
        if(row.classList.contains("in")){
            return;
        }
        row.classList.add("in");
    }else{
        if(!row.classList.contains("in")){
            return;
        }
        row.classList.remove("in");
    }
}

function campusAnimate(scrollTop) {

    let campus = document.querySelector(".campus");
    let item = campus.querySelectorAll(".item");

    item.forEach((el,k) => {
            let itemTop = el.offsetTop - scrollTop ;   
            // && el.offsetHeight+itemTop > 0
            if(itemTop < (innerHeight - 20) ){
                if(el.classList.contains("in")){
                    return;
                }
                el.classList.add("in");
            }else{
                if(!el.classList.contains("in")){
                    return;
                }
                el.classList.remove("in");
            }
           
        }
    );
}




