'use client';
import { AiOutlineSearch } from 'react-icons/ai';

const search = () =>{
const navList = document.getElementById("navcontent")
const searchInput = document.getElementById("searchInput")

if (navList.style.visibility="visible"){
    navList.style.visibility="hidden"
    navList.style.backgroundColor="red"
    searchInput.style.visibility="visible"

}else{
    searchInput.style.visibility="hidden"
    navList.style.visibility="visible"
}

}


function Navbar (){
    return(
        <>
        {/* <Script src="/bundle.js" strategy="worker" /> */}
        <div className='navbar'>
        <div id='navcontent'>
        <a href='/' id ='home'>Home</a>
        <a href='/home' id='entbtn'>Entertainment</a>
        <a href='/tech' id='techbtn'>Technology</a>
        <a href='/home'  id='bus'>Buisness</a>
        <a href='/home' id='lif'>Lifestyle</a>
        <a href='/home' id='som'>social Media</a>
        <a href='/home' id='sci'>Science</a>
        <a href='/home' id='pol'>Politics</a>
        <a href='/home' id='hlt'>Health</a>
        <a >< AiOutlineSearch  onClick={search} color='rgb(211, 207, 207)' size='18'/></a> 
        </div>
        </div>
        <div className='bar1'>
        <input type="text" id="searchInput" placeholder="Search..." class="form-control"></input>
            Welcome To The Stage : Your Daily Hustle
        </div>
        <div className='downnavbar' id="downnavbar">
            <div className='EntertainmentMenu' id='EntertainmentMenu'>
            <div className='navhoverdiv1 textalignleft'>
                <ul  id="navllistul" className='textalignleft'>
                    <li id="toptiitle_navslider" className='smallmenu margindown20 textalignleft'> Entertainment Highlights</li>
                    <li id="" className='textalignleft'><a id="hig1" href='/' className='bigBoldmenu margintopbot5px' > Hollywood </a></li>
                    <li id="" className='textalignleft'><a id="hig2" href='/' className='bigBoldmenu margintopbot5px' > Bollywood </a></li>
                    <li id="" className='textalignleft'><a id="hig3" href='/' className='bigBoldmenu margintopbot5px' > Social Media </a></li>
                    <li id="" className='textalignleft'><a id="hig4" href='/' className='bigBoldmenu margintopbot5px' > Updates </a></li>
                </ul>
            </div>
            <div className='navhoverdiv2'>
            <ul>
                    <li id="" className='smallmenu margindown20 textalignleft'> Categories </li>
                    <li id="" className=' textalignleft'><a id="cat1" href='/' className='textalignleft smallmenuhighlight margintopbot2px' >Latest Updates From Elon Musk</a></li>
                    <li id="" className=' textalignleft'><a id="cat2" href='/' className='smallmenuhighlight margintopbot2px' >Latest Updates m Elon Musk</a></li>
                    <li id="" className=' textalignleft'><a id="cat3" href='/' className='smallmenuhighlight margintopbot2px' >Latest Updates From Elon Musk</a></li>
                    <li id="" className=' textalignleft'><a id="cat4" href='/' className='smallmenuhighlight margintopbot2px' >Latest Updates</a></li>
                
                </ul>
            </div>
            
            <div className='navhoverdiv3'>
            <ul>
                    <li id="" className='smallmenu margindown20 ' >QuickLinks</li>
                    <li id="" className=' textalignleft'><a id="quk1" href='/' className='smallmenuhighlight margintopbot2px' >Latest Updates</a></li>
                    <li id="" className=' textalignleft'><a id="quk2" href='/' className='smallmenuhighlight margintopbot2px' >Latest Updates</a></li>
                    <li id="" className=' textalignleft'><a id="quk3" href='/' className='smallmenuhighlight margintopbot2px' >Latest Updates</a></li>
                </ul>
            </div>
        </div>
    </div>
            
        </>
    )

}



export default Navbar
