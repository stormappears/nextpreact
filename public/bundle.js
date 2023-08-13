


const onBtnEntertainment =()=>{


}
const gbdownnavbar = document.getElementById("downnavbar")

// maindwnbarhver
const downnavbar =  document.getElementById("downnavbar").onmouseover = function (){
    const downnavbar = document.getElementById("downnavbar")
    downnavbar.style.height = "300px"

}

const EntertainmentMenuIn =  document.getElementById("EntertainmentMenu").onmouseover = function (){
    gbdownnavbar.style.height = "300px"
}

const EntertainmentMenuLeave =  document.getElementById("EntertainmentMenu").onmouseout = function (){
    gbdownnavbar.style.height = "0px";
}






//Button Data changes

// Entertainment button In
const entbtnIn =  document.getElementById("entbtn").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(3px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "EntData1"
        document.getElementById("hig2").innerText = "EntData2"
        document.getElementById("hig3").innerText = "EntData3"
        document.getElementById("hig4").innerText = "EntData4 "
        //hlurl
        document.getElementById("hig1").href = '/home'
        document.getElementById("hig2").href = '/home'
        document.getElementById("hig3").href = '/home'
        document.getElementById("hig4").href = '/home'
        


        // categories
        document.getElementById("cat1").innerText = "EntCatData1 "
        document.getElementById("cat2").innerText = "EntCatData2 "
        document.getElementById("cat3").innerText = "EntCatData3 "
        document.getElementById("cat4").innerText = "EntCatData4 "
        
        //QuickLinks
        document.getElementById("quk1").innerText = "EntQukData1 "
        document.getElementById("quk2").innerText = "EntQukData2 "
        document.getElementById("quk3").innerText = "EntQukData3 "

        //data change done
        
        
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(3px)"
    }
};

// Entertainment button Out
const entbtnLeave =  document.getElementById("entbtn").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px"

};

// Started technlogy btn
const techbtnIn =  document.getElementById("techbtn").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Tech udates"

        //changed data
        // highlites
        document.getElementById("hig1").innerText = "TechData1"
        document.getElementById("hig2").innerText = "TechData2"
        document.getElementById("hig3").innerText = "TechData3"
        document.getElementById("hig4").innerText = "TechData4 "
        
        // categories
        document.getElementById("cat1").innerText = "TechCatData1 "
        document.getElementById("cat2").innerText = "TechCatData2 "
        document.getElementById("cat3").innerText = "TechCatData3 "
        document.getElementById("cat4").innerText = "TechCatData4 "
        
        //QuickLinks
        document.getElementById("quk1").innerText = "TechQukData1 "
        document.getElementById("quk2").innerText = "TechQukData2 "
        document.getElementById("quk3").innerText = "TechQukData3 "
        //data change dTech
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(3px)"
        document.getElementById("hig4").innerText = "ChangedText"
    }
};
// tech out
const techbtnLeave =  document.getElementById("techbtn").onmouseout = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    downnavbarid.style.height = "0px"

};



// Buisness button In
const busbtnIn =  document.getElementById("bus").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(3px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "Buisness-Data1"
        document.getElementById("hig2").innerText = "Buisness-Data2"
        document.getElementById("hig3").innerText = "Buisness-Data3"
        document.getElementById("hig4").innerText = "Buisness-Data4 "
        
        // categories
        document.getElementById("cat1").innerText = "Buisness-CatData1 "
        document.getElementById("cat2").innerText = "Buisness-CatData2 "
        document.getElementById("cat3").innerText = "Buisness-CatData3 "
        document.getElementById("cat4").innerText = "Buisness-CatData4 "
        
        //QuickLinks
        document.getElementById("quk1").innerText = "Buisness-QukData1 "
        document.getElementById("quk2").innerText = "Buisness-QukData2 "
        document.getElementById("quk3").innerText = "Buisness-QukData3 "
        //data change done
        
        
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(3px)"
    }
};

// Entertainment button Out
const busbtnLeave =  document.getElementById("bus").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px"
}







//Functions
onBtnEntertainment();

