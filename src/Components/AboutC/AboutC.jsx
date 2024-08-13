import React from 'react'
import { FiPenTool   } from "react-icons/fi";
import img11 from "../../assets/images/about.jpg"
import { BiWindowAlt } from "react-icons/bi";
import { TbStack2    } from "react-icons/tb";
import { ImMobile    } from "react-icons/im";
import { IoSearch    } from "react-icons/io5";
const AboutC = () => {
  return (
    <>
    <div className="container tw-mt-8">
        <h1 className=' tw-text-center tw-font-bold tw-mb-5 '>ABOUT US</h1>
        <div className=' tw-flex tw-justify-between tw-flex-col md:tw-flex-row '>
            <div className=" tw-flex tw-items-center tw-flex-col  ">
                <span className='tw-text-5xl tw-mb-4'><FiPenTool/></span>
                <h6 >UI/UX Design</h6>
            </div>
            <div className="tw-flex tw-items-center tw-flex-col">
                <span className='tw-text-5xl tw-mb-4'><BiWindowAlt/></span>
                <h6 >Web Development</h6>
            </div>
            <div className="tw-flex tw-items-center tw-flex-col">
                <span  className='tw-text-5xl tw-mb-4'><TbStack2/></span>
                <h6 >Product Design</h6>
            </div>
            <div className="tw-flex tw-items-center tw-flex-col">
                <span  className='tw-text-5xl tw-mb-4'><ImMobile/></span>
                <h6 >Mobile Apps</h6>
            </div>
            <div className="tw-flex tw-items-center tw-flex-col">
                <span  className='tw-text-5xl tw-mb-4'><IoSearch/></span>
                <h6>SEO</h6>
            </div>
        </div>
        <div className='row tw-mt-20'>
            <div className=' col-lg-4'>
                <h2 className='tw-mb-6 tw-font-bold tw-text-gray-600'>Welcome to AVO A Personal Porfolio Web Agency</h2>
                <p className='tw-text-xl tw-w-72'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river
                     named Duden flows by their place and supplies it with the necessary regelialia. It is a 
                    paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className='col-lg-4 tw-bg-cover' style={{backgroundImage:"url('src/assets/images/about.jpg')"}}>
                <img src={img11} className='tw-invisible img-fluid'/>
            </div>
            <div className='col-lg-4'>
                <p className='tw-text-xl tw-w-72'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <button className='btn btn-danger'>View all Projects</button>
            </div>
        </div>
        <div className=" tw-flex tw-mt-10 ">
            <div className=" tw-flex tw-gap-5">
                <div className=""><h1 className='tw-text-red-500 tw-font-semibold tw-text-6xl border-bottom'>01</h1></div>
                <div className="tw-mt-4">
                    <h5 className='tw-uppercase '>Search Engine Optimization</h5>
                    <p className='tw-text-my-gray'>Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className=" tw-flex tw-gap-5">
                <div className=""><h1 className='tw-text-red-500 tw-font-semibold tw-text-6xl border-bottom'>02</h1></div>
                <div className="tw-mt-4">
                    <h5 className='tw-uppercase '>Search Engine Optimization</h5>
                    <p className='tw-text-my-gray'>Far far away, behind the word mountains</p>
                </div>
            </div>
            <div className=" tw-flex tw-gap-5">
                <div className=""><h1 className='tw-text-red-500 tw-font-semibold tw-text-6xl border-bottom'>03</h1></div>
                <div className="tw-mt-4">
                    <h5 className='tw-uppercase '>Search Engine Optimization</h5>
                    <p className='tw-text-my-gray'>Far far away, behind the word mountains</p>
                </div>
            </div>
            
        </div>
    </div>

    </>
  )
}

export default AboutC