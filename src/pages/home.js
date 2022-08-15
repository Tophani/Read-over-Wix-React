import React from 'react'
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Top1 from './homee/top1';
import Top2 from './homee/top2';
import Top3 from './homee/top3';
import Top4 from './homee/top4';
import Top5 from './homee/top5';



function Home() {
    return(
        <div className='bg-light'>
            <Navbar />
            <Top1/>
            <Top2/>
            <Top3/>
            <br/>
            <br/>
            <Top4/>
            <Top5/>
            <Footer/>
            
        </div>
    );
}

export default Home;