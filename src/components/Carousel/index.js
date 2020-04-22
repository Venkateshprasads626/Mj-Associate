import React, { Component } from 'react'
import './carousel.css';
import baner1 from '../../Images/baner1.svg'
import baner2 from '../../Images/banner2.jpg'
import banner5 from '../../Images/banner5.jpg'
import Mapimage1 from '../../Images/Mapimage1.png'


class Carousel extends Component{
    render() {
        return(
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={baner1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                       
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={baner2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                       
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={banner5} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={Mapimage1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                       
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
        </div>
        );
    }
}

export default  Carousel 