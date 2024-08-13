import React from 'react'
// import img1 from "../../assets/images/work-3.jpg"
// import img1 from "../../assets/images/work-3.jpg"
// import img1 from "../../assets/images/work-3.jpg"
// import img1 from "../../assets/images/work-3.jpg"
import img1 from "../../assets/images/work-3.jpg"
import img1_1 from "../../assets/images/person_1.jpg"
import img1_2 from "../../assets/images/person_2.jpg"
import img1_3 from "../../assets/images/person_3.jpg"

const CardWork = () => {
    return (
        <div className='container'>
            <h1 className='tw-text-center tw-font-bold '>OUR WORKS</h1>
            <div className="row tw-items-center tw-mt-16 tw-gap-y-8">
                <div className="col-md-5  tw-bg-center tw-bg-cover" style={{ backgroundImage: `url('src/assets/images/work-1.jpg')` }}>
                    <img src={img1} alt="" className='tw-invisible img-fluid' />
                </div>
                <div className="col-md-7 md:tw-pl-20">
                    <p className='tw-ml-4 tw-font-thin'>Web Design  </p>
                    <h3 className='tw-ml-5'>Cassette tape</h3>
                    <p className='tw-ml-4 tw-text-my-gray'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="tw-flex">
                        <img src={img1_1} alt="" className='tw-w-16 tw-h-16 rounded-circle' />
                        <div className=''>
                            <p className='tw-mb-0 tw-mt-4 tw-ml-3'>Jamie Jonson</p>
                            <p className='tw-ml-4 tw-text-my-gray' >avo.com</p>
                        </div>
                    </div>
                    <button className='btn btn-white tw-bg-transparent border tw-mt-5 tw-ml-16'>View Portfolio</button>
                </div>
            </div>
            <div className="row tw-items-center  tw-gap-y-8 -tw-mt-10">
                <div className="col-md-7 md:tw-pl-20 md:tw-text-right" >
                    <p className='md:tw-mr-20 tw-font-thin'>Application  </p>
                    <h3 className='md:tw-mr-20'>Miniwall Clock</h3>
                    <p className='md:tw-mr-20 tw-text-my-gray'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="tw-flex tw-justify-end ">
                        <img src={img1_2} alt="" className='tw-w-16 tw-h-16 rounded-circle' />
                        <div className=''>
                            <p className='tw-mb-0 tw-mt-4 md:tw-ml-3 md:tw-mr-20'>Jamie Jonson</p>
                            <p className=' tw-text-my-gray md:tw-mr-20' >avo.com</p>
                        </div>
                    </div>
                    <button className='btn btn-white tw-bg-transparent border tw-mt-5 md:tw-mr-20'>View Portfolio</button>
                </div>
                <div className="col-md-5  tw-bg-center tw-bg-cover" style={{ backgroundImage: `url('src/assets/images/work-2.jpg')` }}>
                    <img src={img1} alt="" className='tw-invisible img-fluid' />
                </div>
            </div>
            <div className="row tw-items-center -tw-mt-10 tw-gap-y-8">
                <div className="col-md-5  tw-bg-center tw-bg-cover" style={{ backgroundImage: `url('src/assets/images/work-3.jpg')` }}>
                    <img src={img1} alt="" className='tw-invisible img-fluid' />
                </div>
                <div className="col-md-7 md:tw-pl-20">
                    <p className='tw-ml-4 tw-font-thin'>UI/UX Design </p>
                    <h3 className='tw-ml-5'>Avo Portfolio Agency</h3>
                    <p className='tw-ml-4 tw-text-my-gray'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="tw-flex">
                        <img src={img1_3} alt="" className='tw-w-16 tw-h-16 rounded-circle' />
                        <div className=''>
                            <p className='tw-mb-0 tw-mt-4 tw-ml-3'>Jamie Jonson</p>
                            <p className='tw-ml-4 tw-text-my-gray' >avo.com</p>
                        </div>
                    </div>
                    <button className='btn btn-white tw-bg-transparent border tw-mt-5 tw-ml-16'>View Portfolio</button>
                </div>
            </div>
            <div className="row tw-items-center -tw-mt-10 tw-gap-y-8">
                <div className="col-md-7 md:tw-pl-20 md:tw-text-right">
                    <p className='md:tw-mr-20 tw-font-thin'>Web Development  </p>
                    <h3 className='md:tw-mr-20'>Hand Writing</h3>
                    <p className='md:tw-mr-20 tw-text-my-gray'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="tw-flex tw-justify-end">
                        <img src={img1_1} alt="" className='tw-w-16 tw-h-16 rounded-circle' />
                        <div className=''>
                            <p className='tw-mb-0 tw-mt-4 tw-ml-3 md:tw-mr-20'>Jamie Jonson</p>
                            <p className='tw-ml-4 tw-text-my-gray md:tw-mr-20' >avo.com</p>
                        </div>
                    </div>
                    <button className='btn btn-white tw-bg-transparent border tw-mt-5 md:tw-mr-20'>View Portfolio</button>
                </div>
                <div className="col-md-5  tw-bg-center tw-bg-cover" style={{ backgroundImage: `url('src/assets/images/work-4.jpg')` }}>
                    <img src={img1} alt="" className='tw-invisible img-fluid' />
                </div>
            </div>
            <div className="row tw-items-center -tw-mt-10 tw-gap-y-8">
                <div className="col-md-5  tw-bg-center tw-bg-cover" style={{ backgroundImage: `url('src/assets/images/work-5.jpg')` }}>
                    <img src={img1} alt="" className='tw-invisible img-fluid' />
                </div>
                <div className="col-md-7 md:tw-pl-20">
                    <p className='tw-ml-4 tw-font-thin'>Illustration  </p>
                    <h3 className='tw-ml-5'>keyboard</h3>
                    <p className='tw-ml-4 tw-text-my-gray'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="tw-flex">
                        <img src={img1_2} alt="" className='tw-w-16 tw-h-16 rounded-circle' />
                        <div className=''>
                            <p className='tw-mb-0 tw-mt-4 tw-ml-3'>Jamie Jonson</p>
                            <p className='tw-ml-4 tw-text-my-gray' >avo.com</p>
                        </div>
                    </div>
                    <button className='btn btn-white tw-bg-transparent border tw-mt-5 tw-ml-16'>View Portfolio</button>
                </div>
            </div>
            <div className="row tw-items-center -tw-mt-10 tw-gap-y-8">
                <div className="col-md-7 md:tw-pl-20 md:tw-text-right">
                    <p className='md:tw-mr-20 tw-font-thin'>Web Developemnt </p>
                    <h3 className='md:tw-mr-20'>Spiral</h3>
                    <p className='md:tw-mr-20 tw-text-my-gray'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="tw-flex tw-justify-end">
                        <img src={img1_3} alt="" className='tw-w-16 tw-h-16 rounded-circle' />
                        <div className=''>
                            <p className='tw-mb-0 tw-mt-4  md:tw-mr-20'>Jamie Jonson</p>
                            <p className='tw-ml-4 tw-text-my-gray md:tw-mr-20' >avo.com</p>
                        </div>
                    </div>
                    <button className='btn btn-white tw-bg-transparent border tw-mt-5 md:tw-mr-20'>View Portfolio</button>
                </div>
                <div className="col-md-5  tw-bg-center tw-bg-cover" style={{ backgroundImage: `url('src/assets/images/work-6.jpg')` }}>
                    <img src={img1} alt="" className='tw-invisible img-fluid' />
                </div>
            </div>

        </div>
    )
}

export default CardWork