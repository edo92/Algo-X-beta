import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './CSS/HomePage.css';

const HomePage = () => {
    return(
        <div className='col-12 p-0'>
            <Header/>
            <div className='col-12' style={{height:'620px'}}>
                <div className='col-12'>
                    <div className='col-12' style={{paddingTop:'12rem', paddingLeft:'12rem',}}>
                        <h3>LineUp Optimizer</h3>
                        <h4>MMA drafting platform with analytics</h4>
                        <div className='row col-12 p-0 pt-3 m-0'>
                            <button style={{ borderRadius:'17px' }} className='btn btn-primary mx-1 p-2 px-4'> Sign Up </button>
                            <button style={{border:'1px solid #e6e6e6c4', borderRadius:'17px'}} className='btn btn-light mx-1 px-3'> Learn More </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id='curve' className='col-12 p-0' style={{ transform: 'skewY(-6deg)',background:'-webkit-gradient(linear,left top,right top,from(#748df8),to(#6fa7f8))', height:'500px', zIndex:2}}>
                
            </div>
           
            <div id='curve2' className='col-12 bg-light' style={{ transform: 'skewY(-6deg)', height:'500px'}}>
                <div className='col-12'>
                    <h1 className='text-center' style={{ transform: 'skewY(6deg)', zIndex:2, padding:'2rem'}}>Check Out Accuracy</h1>
                </div>
                <div id='info-box' className='col-12 p-2'>
                    <ul className='row col-12 m-0 px-3 list-none'>
                        <li className='col-3 p-0 bg-light info-card' >
                            
                        </li>
                        <li className='col-4 p-0 bg-light info-card' >
                            
                        </li>
                        <li className='col-3 p-0 bg-light info-card' >
                            
                        </li>
                    </ul>
                </div>
            </div> 
           

            <div id='button-Cover' className='col-12 p-0 bg-light' style={{ height:'120px', marginTop:'-4rem'}}>

            </div>
            <Footer/>
        </div>
    )
};

export default HomePage;