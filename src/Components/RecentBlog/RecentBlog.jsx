import React from 'react'
import img1 from "../../assets/images/image_1.jpg"
import img2 from "../../assets/images/image_2.jpg"
// import img3 from "../../assets/images/image_3.jpg"
// import img4 from "../../assets/images/image_4.jpg"
import { FaMessage } from 'react-icons/fa6'
const RecentBlog = () => {
    return (
        <>
            <div className="container tw-mt-10">
                <h1 className='tw-text-center tw-mb-9 tw-font-extrabold'>Recent Blog</h1>
                <div className="tw-flex tw-me-3  ">
                    <div className="tw-me-3">
                        <div className="tw-mb-3">
                            <a href="" className='tw-no-underline tw-text-black hover:tw-text-my-red tw-cursor-pointer tw-text-xl tw-font-bold '>Amplify your blockchain <br /> team</a>
                        </div>
                        <div className="tw-mb-2 ">
                            <a href=""><img src={img1} alt="" className='tw-w-64' /></a>
                        </div>
                        <div className="tw-mb-5 tw-ml-3">
                            <a href="" className='tw-no-underline tw-text-my-gray'>June 01, 2020 Admin <FaMessage /> 3</a>
                        </div>
                        <div className="">
                            <p className='tw-text-my-gray'>Far far away, behind the word mou, <br /> far from the countries Vokalia and <br /> Consonantia.</p></div>
                    </div>
                    <div className="tw-me-3">
                        <div className="tw-mb-3">
                            <a href="" className='tw-no-underline tw-text-black hover:tw-text-my-red tw-cursor-pointer tw-text-xl tw-font-bold '>Amplify your blockchain <br /> team</a>
                        </div>
                        <div className="tw-mb-2 ">
                            <a href=""><img src={img2} alt="" className='tw-w-64' /></a>
                        </div>
                        <div className="tw-mb-5 tw-ml-3">
                            <a href="" className='tw-no-underline tw-text-my-gray'>June 01, 2020 Admin <FaMessage /> 3</a>
                        </div>
                        <div className="tw-me-3">
                            <p className='tw-text-my-gray'>Far far away, behind the word  <br /> far from the countries Vokalia and <br /> Consonantia.</p></div>
                    </div>
                    <div className="tw-me-3">
                        <div className="tw-mb-3">
                            <a href="" className='tw-no-underline tw-text-black hover:tw-text-my-red tw-cursor-pointer tw-text-xl tw-font-bold '>Amplify your blockchain <br /> team</a>
                        </div>
                        <div className="tw-mb-2 ">
                            <a href=""><img src={img1} alt="" className='tw-w-64' /></a>
                        </div>
                        <div className="tw-mb-5 tw-ml-3">
                            <a href="" className='tw-no-underline tw-text-my-gray'>June 01, 2020 Admin <FaMessage /> 3</a>
                        </div>
                        <div className="">
                            <p className='tw-text-my-gray'>Far far away, behind the word mou, <br /> far from the countries Vokalia and <br /> Consonantia.</p></div>
                    </div>
                    <div className="tw-me-3">
                        <div className="tw-mb-3">
                            <a href="" className='tw-no-underline tw-text-black hover:tw-text-my-red tw-cursor-pointer tw-text-xl tw-font-bold '>Amplify your blockchain <br /> team</a>
                        </div>
                        <div className="tw-mb-2 ">
                            <a href=""><img src={img2} alt="" className='tw-w-64' /></a>
                        </div>
                        <div className="tw-mb-5 tw-ml-3">
                            <a href="" className='tw-no-underline tw-text-my-gray'>June 01, 2020 Admin <FaMessage /> 3</a>
                        </div>
                        <div className="">
                            <p className='tw-text-my-gray'>Far far away, behind the word mou, <br /> far from the countries Vokalia and <br /> Consonantia.</p></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RecentBlog