const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const sun2 = document.querySelector(".sun2");
const moon2 = document.querySelector(".moon2");
const sun3 = document.querySelector(".sun3");
const moon3 = document.querySelector(".moon3");
const questionOne = document.querySelector(".questionOne");
const answerOne = document.querySelector(".answerOne");
const plusOne = document.querySelector(".plusOne");
const mineseOne = document.querySelector(".mineseOne");
const onHover = document.querySelector(".onHover");
const questionTwo = document.querySelector(".questionTwo");
const answerTwo = document.querySelector(".answerTwo");
const plusTwo = document.querySelector(".plusTwo");
const mineseTwo = document.querySelector(".mineseTwo");
const onHoverTwo = document.querySelector(".onHoverTwo");
const questionThree = document.querySelector(".questionThree");
const answerThree = document.querySelector(".answerThree");
const plusThree = document.querySelector(".plusThree");
const mineseThree = document.querySelector(".mineseThree");
const onHoverThree = document.querySelector(".onHoverThree");
const questionFour = document.querySelector(".questionFour");
const answerFour = document.querySelector(".answerFour");
const plusFour = document.querySelector(".plusFour");
const mineseFour = document.querySelector(".mineseFour");
const onHoverFour = document.querySelector(".onHoverFour");
const questionFive = document.querySelector(".questionFive");
const answerFive = document.querySelector(".answerFive");
const plusFive = document.querySelector(".plusFive");
const mineseFive = document.querySelector(".mineseFive");
const onHoverFive = document.querySelector(".onHoverFive");
const questionSix = document.querySelector(".questionSix");
const answerSix = document.querySelector(".answerSix");
const plusSix = document.querySelector(".plusSix");
const mineseSix = document.querySelector(".mineseSix");
const onHoverSix = document.querySelector(".onHoverSix");
const mobile = document.querySelector(".mobile");
const iPhone = document.querySelector(".iPhone");
const desktop = document.querySelector(".desktop");
const mobileButton = document.querySelector(".mobileButton");
const iPhoneButton = document.querySelector(".iPhoneButton");
const desktopButton = document.querySelector(".desktopButton");
const mobileOutLine = document.querySelector(".mobileOutLine");
const iPhoneOutLine = document.querySelector(".iPhoneOutLine");
const desktopOutLine = document.querySelector(".desktopOutLine");
const fColOne = document.querySelector(".fColOne");
const fColOneAns = document.querySelector(".fColOneAns");
const fPluse = document.querySelector(".fPluse");
const fMinse = document.querySelector(".fMinse");
const fColOne2 = document.querySelector(".fColOne2");
const fColOneAns2 = document.querySelector(".fColOneAns2");
const fPluse2 = document.querySelector(".fPluse2");
const fMinse2 = document.querySelector(".fMinse2");
const fColOne3 = document.querySelector(".fColOne3");
const fColOneAns3 = document.querySelector(".fColOneAns3");
const fPluse3 = document.querySelector(".fPluse3");
const fMinse3 = document.querySelector(".fMinse3");
const fColOne4 = document.querySelector(".fColOne4");
const fColOneAns4 = document.querySelector(".fColOneAns4");
const fPluse4 = document.querySelector(".fPluse4");
const fMinse4 = document.querySelector(".fMinse4");
const fColOne5 = document.querySelector(".fColOne5");
const fColOneAns5 = document.querySelector(".fColOneAns5");
const fPluse5 = document.querySelector(".fPluse5");
const fMinse5 = document.querySelector(".fMinse5");
const fColOne6 = document.querySelector(".fColOne6");
const fColOneAns6 = document.querySelector(".fColOneAns6");
const fPluse6 = document.querySelector(".fPluse6");
const fMinse6 = document.querySelector(".fMinse6");
const mainBody = document.querySelector(".mainBody");
const threeDot = document.querySelector(".threeDot");
const closeResult = document.querySelector(".closeResult");
const close = document.querySelector(".close");
const totalUser = document.querySelector(".user");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(perfers-color-scheme: dard)").matches;

const iconToggle = () => {
    moon.classList.toggle("display-none");
    sun.classList.toggle("display-none");
}

const iconBGTglmoon = () => {
    sun2.classList.add("bg-[#c9d2dd]");
    moon2.classList.remove("bg-[#333b47]");
    moon2.classList.remove("bg-[#333b47]");

    sun3.classList.add("bg-[#c9d2dd]");
    moon3.classList.remove("bg-[#333b47]");
    moon3.classList.remove("bg-[#333b47]");
}

const iconBGTglsun = () => {
    moon2.classList.add("bg-[#333b47]");
    sun2.classList.remove("bg-[#c9d2dd]");
    sun2.classList.remove("bg-[#333b47]");

    moon3.classList.add("bg-[#333b47]");
    sun3.classList.remove("bg-[#c9d2dd]");
    sun3.classList.remove("bg-[#333b47]");
}

const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moon.classList.add("display-none");
        mobileButton.classList.add("text-white");
        moon2.classList.add("bg-[#333b47]");
        moon3.classList.add("bg-[#333b47]");
        return;
    }
    sun.classList.add("display-none");
    mobileButton.classList.add("text-[#181A20]");
    sun2.classList.add("bg-[#333b47]");
    sun3.classList.add("bg-[#333b47]");
}

const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme" , "light");
        iconToggle();
        iconBGTglmoon();
       // buttonCheckLight();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme" , "dark");
    iconToggle();
    iconBGTglsun();
    // buttonCheckDark();
}

sun.addEventListener("click",()=>{
    themeSwitch();
});
moon.addEventListener("click",()=>{
    themeSwitch();
});

sun2.addEventListener("click" , ()=>{
    themeSwitch();
});

moon2.addEventListener("click" , ()=>{
    themeSwitch();
});

sun3.addEventListener("click" , ()=>{
    themeSwitch();
});

moon3.addEventListener("click" , ()=>{
    themeSwitch();
});

themeCheck();


questionOne.addEventListener("click", () => {
    answerOne.classList.contains("hidden")
        ? answerOne.classList.remove("hidden") &
        mineseOne.classList.remove("hidden") &
        plusOne.classList.add("hidden")
        : answerOne.classList.add("hidden") &
        mineseOne.classList.add("hidden") &
        plusOne.classList.remove("hidden");
});
onHover.addEventListener("mouseover", () => {
    plusOne.classList.add("text-[#2B3139]");
});
onHover.addEventListener("mouseout", () => {
    plusOne.classList.remove("text-[#2B3139]");
});


questionTwo.addEventListener("click", () => {
    answerTwo.classList.contains("hidden")
        ? answerTwo.classList.remove("hidden") &
        mineseTwo.classList.remove("hidden") &
        plusTwo.classList.add("hidden")
        : answerTwo.classList.add("hidden") &
        mineseTwo.classList.add("hidden") &
        plusTwo.classList.remove("hidden");
});
onHoverTwo.addEventListener("mouseover", () => {
    plusTwo.classList.add("text-[#2B3139]");
});
onHoverTwo.addEventListener("mouseout", () => {
    plusTwo.classList.remove("text-[#2B3139]");
});


questionThree.addEventListener("click", () => {
    answerThree.classList.contains("hidden")
        ? answerThree.classList.remove("hidden") &
        mineseThree.classList.remove("hidden") &
        plusThree.classList.add("hidden")
        : answerThree.classList.add("hidden") &
        mineseThree.classList.add("hidden") &
        plusThree.classList.remove("hidden");
});
onHoverThree.addEventListener("mouseover", () => {
    plusThree.classList.add("text-[#2B3139]");
});
onHoverThree.addEventListener("mouseout", () => {
    plusThree.classList.remove("text-[#2B3139]");
});


questionFour.addEventListener("click", () => {
    answerFour.classList.contains("hidden")
        ? answerFour.classList.remove("hidden") &
        mineseFour.classList.remove("hidden") &
        plusFour.classList.add("hidden")
        : answerFour.classList.add("hidden") &
        mineseFour.classList.add("hidden") &
        plusFour.classList.remove("hidden");
});
onHoverFour.addEventListener("mouseover", () => {
    plusFour.classList.add("text-[#2B3139]");
});
onHoverFour.addEventListener("mouseout", () => {
    plusFour.classList.remove("text-[#2B3139]");
});


questionFive.addEventListener("click", () => {
    answerFive.classList.contains("hidden")
        ? answerFive.classList.remove("hidden") &
        mineseFive.classList.remove("hidden") &
        plusFive.classList.add("hidden")
        : answerFive.classList.add("hidden") &
        mineseFive.classList.add("hidden") &
        plusFive.classList.remove("hidden");
});
onHoverFive.addEventListener("mouseover", () => {
    plusFive.classList.add("text-[#2B3139]");
});
onHoverFive.addEventListener("mouseout", () => {
    plusFive.classList.remove("text-[#2B3139]");
});


questionSix.addEventListener("click", () => {
    answerSix.classList.contains("hidden")
        ? answerSix.classList.remove("hidden") &
        mineseSix.classList.remove("hidden") &
        plusSix.classList.add("hidden")
        : answerSix.classList.add("hidden") &
        mineseSix.classList.add("hidden") &
        plusSix.classList.remove("hidden");
});
onHoverSix.addEventListener("mouseover", () => {
    plusSix.classList.add("text-[#2B3139]");
});
onHoverSix.addEventListener("mouseout", () => {
    plusSix.classList.remove("text-[#2B3139]");
});


mobileButton.addEventListener("click", () => {
    mobile.classList.remove("hidden");
    desktop.classList.add("hidden");
    iPhone.classList.add("hidden");
    mobileOutLine.classList.remove("hidden");
    desktopOutLine.classList.add("hidden");
    iPhoneOutLine.classList.add("hidden");
    if(userTheme === "dark" || (!userTheme && systemTheme))
    {
        mobileButton.classList.add("text-white");
        desktopButton.classList.remove("text-white");
        iPhoneButton.classList.remove("text-white");
    }
    else{
        mobileButton.classList.add("text-[#181A20]");
        desktopButton.classList.remove("text-[#181A20]");
        iPhoneButton.classList.remove("text-[#181A20]");
    }
});
desktopButton.addEventListener("click", () => {
    desktop.classList.remove("hidden");
    mobile.classList.add("hidden");
    iPhone.classList.add("hidden");
    desktopOutLine.classList.remove("hidden");
    mobileOutLine.classList.add("hidden");
    iPhoneOutLine.classList.add("hidden");
    if(userTheme === "dark" || (!userTheme && systemTheme))
        {
            desktopButton.classList.add("text-white");
            mobileButton.classList.remove("text-white");
            iPhoneButton.classList.remove("text-white");
        }
        else{
            desktopButton.classList.add("text-[#181A20]");
            mobileButton.classList.remove("text-[#181A20]");
            iPhoneButton.classList.remove("text-[#181A20]");
        }
});
iPhoneButton.addEventListener("click", () => {
    iPhone.classList.remove("hidden");
    desktop.classList.add("hidden");
    mobile.classList.add("hidden");
    iPhoneOutLine.classList.remove("hidden");
    desktopOutLine.classList.add("hidden");
    mobileOutLine.classList.add("hidden");
    if(userTheme === "dark" || (!userTheme && systemTheme))
        {
            iPhoneButton.classList.add("text-white");
            desktopButton.classList.remove("text-white");
            mobileButton.classList.remove("text-white");
        }
        else{
            iPhoneButton.classList.add("text-[#181A20]");
            desktopButton.classList.remove("text-[#181A20]");
            mobileButton.classList.remove("text-[#181A20]");
        }
});

// const buttonCheckLight = () => {
//     if(mobileButton.classList.contains("text-white")){
//         mobileButton.classList.remove("text-white");
//         mobileButton.classList.add("text-[#181A20]");
//     } else if(desktopButton.classList.contains("text-white")){
//         desktopButton.classList.remove("text-white");
//         desktopButton.classList.add("text-[#181A20]");
//     } else if(iPhoneButton.classList.contains("text-white")){
//         iPhoneButton.classList.remove("text-white");
//         iPhoneButton.classList.add("text-[#181A20]");
//     }
// }
// const buttonCheckDark = () => {
//     if(mobileButton.classList.contains("text-[#181A20]")){
//         mobileButton.classList.remove("text-[#181A20]");
//         mobileButton.classList.add("text-white");
//     } else if(desktopButton.classList.contains("text-[#181A20]")){
//         desktopButton.classList.remove("text-[#181A20]");
//         desktopButton.classList.add("text-white");
//     } else if(iPhoneButton.classList.contains("text-[#181A20]")){
//         iPhoneButton.classList.remove("text-[#181A20]");
//         iPhoneButton.classList.add("text-white");
//     }
// }

fColOne.addEventListener("click", () => {
    fColOneAns.classList.contains("hidden")
        ? fColOneAns.classList.remove("hidden") &
        fMinse.classList.remove("hidden") &
        fPluse.classList.add("hidden")
        : fColOneAns.classList.add("hidden") &
        fMinse.classList.add("hidden") &
        fPluse.classList.remove("hidden");
});

fColOne2.addEventListener("click", () => {
    fColOneAns2.classList.contains("hidden")
        ? fColOneAns2.classList.remove("hidden") &
        fMinse2.classList.remove("hidden") &
        fPluse2.classList.add("hidden")
        : fColOneAns2.classList.add("hidden") &
        fMinse2.classList.add("hidden") &
        fPluse2.classList.remove("hidden");
});

fColOne3.addEventListener("click", () => {
    fColOneAns3.classList.contains("hidden")
        ? fColOneAns3.classList.remove("hidden") &
        fMinse3.classList.remove("hidden") &
        fPluse3.classList.add("hidden")
        : fColOneAns3.classList.add("hidden") &
        fMinse3.classList.add("hidden") &
        fPluse3.classList.remove("hidden");
});

fColOne4.addEventListener("click", () => {
    fColOneAns4.classList.contains("hidden")
        ? fColOneAns4.classList.remove("hidden") &
        fMinse4.classList.remove("hidden") &
        fPluse4.classList.add("hidden")
        : fColOneAns4.classList.add("hidden") &
        fMinse4.classList.add("hidden") &
        fPluse4.classList.remove("hidden");
});

fColOne5.addEventListener("click", () => {
    fColOneAns5.classList.contains("hidden")
        ? fColOneAns5.classList.remove("hidden") &
        fMinse5.classList.remove("hidden") &
        fPluse5.classList.add("hidden")
        : fColOneAns5.classList.add("hidden") &
        fMinse5.classList.add("hidden") &
        fPluse5.classList.remove("hidden");
});

fColOne6.addEventListener("click", () => {
    fColOneAns6.classList.contains("hidden")
        ? fColOneAns6.classList.remove("hidden") &
        fMinse6.classList.remove("hidden") &
        fPluse6.classList.add("hidden")
        : fColOneAns6.classList.add("hidden") &
        fMinse6.classList.add("hidden") &
        fPluse6.classList.remove("hidden");
});

threeDot.addEventListener("click", () => {
    mainBody.classList.add("hidden") &
        closeResult.classList.remove("hidden");
});

close.addEventListener("click", () => {
    closeResult.classList.add("hidden") &
        mainBody.classList.remove("hidden");
});

setInterval(() => {
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },200);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },400);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },600);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },800);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },1000);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },1200);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },1400);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },1600);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },1800);
    setTimeout(() => {
        totalUser.innerText = parseInt(totalUser.innerText) + 2;
    },2000);
},5000);