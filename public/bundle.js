



const wrapper =  document.getElementById("wrapper")

const gbdownnavbar = document.getElementById("downnavbar")
// maindwnbarhver
const downnavbar =  document.getElementById("downnavbar").onmouseover = function (){
    const downnavbar = document.getElementById("downnavbar")
    downnavbar.style.height = "300px"
}

const EntertainmentMenuIn =  document.getElementById("EntertainmentMenu").onmouseover = function (){
    gbdownnavbar.style.height = "300px"
    wrapper.style.filter = "blur(2px)"
}
const EntertainmentMenuLeave =  document.getElementById("EntertainmentMenu").onmouseout = function (){
    gbdownnavbar.style.height = "0px";
    wrapper.style.filter = "blur(0px)"
}


//Button Data changes

// Entertainment button Start
const entbtnIn =  document.getElementById("entbtn").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "EntData1"
        document.getElementById("hig2").innerText = "EntData2"
        document.getElementById("hig3").innerText = "EntData3"
        document.getElementById("hig4").innerText = "EntData4 "
        // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home';
        
        // categories
        document.getElementById("cat1").innerText = "EntCatData1 "
        document.getElementById("cat2").innerText = "EntCatData2 "
        document.getElementById("cat3").innerText = "EntCatData3 "
        document.getElementById("cat4").innerText = "EntCatData4 "
        //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home';
        
        //QuickLinks
        document.getElementById("quk1").innerText = "EntQukData1 "
        document.getElementById("quk2").innerText = "EntQukData2 "
        document.getElementById("quk3").innerText = "EntQukData3 "
        //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';

    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
    }
};

// Entertainment button Out
const entbtnLeave =  document.getElementById("entbtn").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px"
        wrapper.style.filter = "blur(0px)"

};

// Entertainment btn End

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
        // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home'
        
        // categories
        document.getElementById("cat1").innerText = "TechCatData1 "
        document.getElementById("cat2").innerText = "TechCatData2 "
        document.getElementById("cat3").innerText = "TechCatData3 "
        document.getElementById("cat4").innerText = "TechCatData4 "
        //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home';
        
        //QuickLinks
        document.getElementById("quk1").innerText = "TechQukData1 "
        document.getElementById("quk2").innerText = "TechQukData2 "
        document.getElementById("quk3").innerText = "TechQukData3 "
        //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
        document.getElementById("hig4").innerText = "ChangedText"
    }
};
// tech out
const techbtnLeave =  document.getElementById("techbtn").onmouseout = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    downnavbarid.style.height = "0px"
    wrapper.style.filter = "blur(0px)"

};
// tech btn End



// Buisness button In
const busbtnIn =  document.getElementById("bus").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "Buisness-Data1"
        document.getElementById("hig2").innerText = "Buisness-Data2"
        document.getElementById("hig3").innerText = "Buisness-Data3"
        document.getElementById("hig4").innerText = "Buisness-Data4 "
          // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home'
        
        // categories
        document.getElementById("cat1").innerText = "Buisness-CatData1 "
        document.getElementById("cat2").innerText = "Buisness-CatData2 "
        document.getElementById("cat3").innerText = "Buisness-CatData3 "
        document.getElementById("cat4").innerText = "Buisness-CatData4 "
         //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home';
        
        //QuickLinks
        document.getElementById("quk1").innerText = "Buisness-QukData1 "
        document.getElementById("quk2").innerText = "Buisness-QukData2 "
        document.getElementById("quk3").innerText = "Buisness-QukData3 "
          //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';
        //data change done
        
        
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
    }
};

// buisness button Out
const busbtnLeave =  document.getElementById("bus").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px"
        wrapper.style.filter = "blur(0px)"
}
// buisness btn End






// lifestyle button In
const lifestyleIn =  document.getElementById("lif").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "lifestyle-Data1"
        document.getElementById("hig2").innerText = "lifestyle-Data2"
        document.getElementById("hig3").innerText = "lifestyle-Data3"
        document.getElementById("hig4").innerText = "lifestyle-Data4 "
        // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home'
        
        // categories
        document.getElementById("cat1").innerText = "lifestyle-CatData1 "
        document.getElementById("cat2").innerText = "lifestyle-CatData2 "
        document.getElementById("cat3").innerText = "lifestyle-CatData3 "
        document.getElementById("cat4").innerText = "lifestyle-CatData4 "
        //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home'
        
        //QuickLinks
        document.getElementById("quk1").innerText = "lifestyle-QukData1 "
        document.getElementById("quk2").innerText = "lifestyle-QukData2 "
        document.getElementById("quk3").innerText = "lifestyle-QukData3 "
         //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';
        //data change done
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
    }
};

// lifestyle button Out
const lifestyleLeave =  document.getElementById("lif").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px";
        wrapper.style.filter = "blur(0px)"
}
// lifestyle btn End





// social Media button In
const socialMediaIn =  document.getElementById("som").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "lifestyle-Data1"
        document.getElementById("hig2").innerText = "lifestyle-Data2"
        document.getElementById("hig3").innerText = "lifestyle-Data3"
        document.getElementById("hig4").innerText = "lifestyle-Data4 "
        // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home'
        
        // categories
        document.getElementById("cat1").innerText = "lifestyle-CatData1 "
        document.getElementById("cat2").innerText = "lifestyle-CatData2 "
        document.getElementById("cat3").innerText = "lifestyle-CatData3 "
        document.getElementById("cat4").innerText = "lifestyle-CatData4 "
        //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home'
        
        //QuickLinks
        document.getElementById("quk1").innerText = "lifestyle-QukData1 "
        document.getElementById("quk2").innerText = "lifestyle-QukData2 "
        document.getElementById("quk3").innerText = "lifestyle-QukData3 "
         //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';
        //data change done
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
    }
};

// social Media Out
const socialMediaOut =  document.getElementById("som").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px";
        wrapper.style.filter = "blur(0px)"
}
// Social btn End







// Science button In
const ScienceMediaIn =  document.getElementById("sci").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "lifestyle-Data1"
        document.getElementById("hig2").innerText = "lifestyle-Data2"
        document.getElementById("hig3").innerText = "lifestyle-Data3"
        document.getElementById("hig4").innerText = "lifestyle-Data4 "
        // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home'
        
        // categories
        document.getElementById("cat1").innerText = "lifestyle-CatData1 "
        document.getElementById("cat2").innerText = "lifestyle-CatData2 "
        document.getElementById("cat3").innerText = "lifestyle-CatData3 "
        document.getElementById("cat4").innerText = "lifestyle-CatData4 "
        //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home'
        
        //QuickLinks
        document.getElementById("quk1").innerText = "sci-QukData1 "
        document.getElementById("quk2").innerText = "lifestyle-QukData2 "
        document.getElementById("quk3").innerText = "lifestyle-QukData3 "
         //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';
        //data change done
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
    }
};

// social Media Out
const ScienceMediaOut =  document.getElementById("sci").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px";
        wrapper.style.filter = "blur(0px)"
}
// Science btn End




// Politics button In
const PoliticsMediaIn =  document.getElementById("pol").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "lifestylePolitics-Data1"
        document.getElementById("hig2").innerText = "lifestylePolitics-Data2"
        document.getElementById("hig3").innerText = "lifestylePolitics-Data3"
        document.getElementById("hig4").innerText = "lifestylePolitics-Data4 "
        // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home'
        
        // categories
        document.getElementById("cat1").innerText = "lifestylePolitics-CatData1 "
        document.getElementById("cat2").innerText = "lifestylePolitics-CatData2 "
        document.getElementById("cat3").innerText = "lifestylePolitics-CatData3 "
        document.getElementById("cat4").innerText = "lifestylPoliticse-CatData4 "
        //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home'
        
        //QuickLinks
        document.getElementById("quk1").innerText = "sci-QukData1 "
        document.getElementById("quk2").innerText = "lifestylePolitics-QukData2 "
        document.getElementById("quk3").innerText = "lifestylePolitics-QukData3 "
         //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';
        //data change done
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
    }
};

// social Media Out
const PoliticsMediaOut =  document.getElementById("pol").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px";
        wrapper.style.filter = "blur(0px)"
}
// politics btn End


// Health button In
const HealthMediaIn =  document.getElementById("hlt").onmouseover = function() {
    const downnavbarid =  document.getElementById("downnavbar")
    const wrapper =  document.getElementById("wrapper")
    
    if(downnavbarid.style.height = "300px"){
        const toptiitle_navslider =  document.getElementById("toptiitle_navslider")
        toptiitle_navslider.innerText ="Entertainmaint Updates"
        downnavbarid.style.height = "300px";
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"


        //changed data
        // highlites
        document.getElementById("hig1").innerText = "lifestylePolitics-Data1"
        document.getElementById("hig2").innerText = "lifestylePolitics-Data2"
        document.getElementById("hig3").innerText = "lifestylePolitics-Data3"
        document.getElementById("hig4").innerText = "lifestylePolitics-Data4 "
        // highlites-urls
        document.getElementById("hig1").href = '/home';
        document.getElementById("hig2").href = '/home';
        document.getElementById("hig3").href = '/home';
        document.getElementById("hig4").href = '/home'
        
        // categories
        document.getElementById("cat1").innerText = "lifestylePolitics-CatData1 "
        document.getElementById("cat2").innerText = "lifestylePolitics-CatData2 "
        document.getElementById("cat3").innerText = "lifestylePolitics-CatData3 "
        document.getElementById("cat4").innerText = "lifestylPoliticse-CatData4 "
        //categories-urls
        document.getElementById("cat1").href = '/home';
        document.getElementById("cat2").href = '/home';
        document.getElementById("cat3").href = '/home';
        document.getElementById("cat4").href = '/home'
        
        //QuickLinks
        document.getElementById("quk1").innerText = "sci-QukData1 "
        document.getElementById("quk2").innerText = "lifestylePolitics-QukData2 "
        document.getElementById("quk3").innerText = "lifestylePolitics-QukData3 "
         //QuickLinks-urls
        document.getElementById("quk1").href = '/home';
        document.getElementById("quk2").href = '/home';
        document.getElementById("quk3").href = '/home';
        //data change done
    }
    else{
        downnavbarid.style.height = "300px"
        downnavbarid.style.top = "60px"
        wrapper.style.filter = "blur(2px)"
    }
};

// social Media Out
const HealthMediaOut =  document.getElementById("hlt").onmouseout = function() {
        const downnavbarid =  document.getElementById("downnavbar")
        downnavbarid.style.height = "0px";
        wrapper.style.filter = "blur(0px)"
}
// Health btn End









//change data test





