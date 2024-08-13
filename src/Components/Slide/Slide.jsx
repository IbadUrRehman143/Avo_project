import React from 'react'
import image1 from "../../assets/images/bg_2.jpg"
import image2 from "../../assets/images/bg_1.jpg"

const Slide = () => {
  return (
    <>
    <div className="tw-bg-cover tw-bg-no-repeat tw-bg-center ">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active  tw-bg-cover tw-bg-center">
              <img src={image1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item tw-bg-cover tw-bg-center">
              <img src={image2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </>
  )
}

export default Slide