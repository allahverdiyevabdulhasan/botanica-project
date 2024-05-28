import React from 'react';
// import img1 from '../../.././../assets/images/blog-img1.webp';
// import img2 from '../../.././../assets/images/blog-img-2.webp';
// import img3 from '../../.././../assets/images/blog-img-3.webp';
// import { CiUser } from "react-icons/ci";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { BsArrowRight } from "react-icons/bs";
import BlogCard from '../../../../components/BlogCard';
import { blogData } from '../../../../api/blogData';

const LNews = () => {
    return (
        <div className='latest-news'>
            <div className="container">
                <div className="row row-gap-5">
                    <div className='lnews-head'>
                        <h6>Latest News</h6>
                        <h5>From Our Blog</h5>
                    </div>

                    {
                blogData.slice(0,3).map((item) => (

                  <BlogCard blogData={item} key={item.id} page="home"/>
                ))
              }
                    

                    {/* <div className="col-lg-4">
                        <div className="card">
                            <div className='card-img'>
                                <img src={img1} className="w-100 d-block mx-lg-auto img-fluid" alt="" />
                            </div>
                            <div className='card-content pt-4'>
                                <div className='d-flex justify-content-between align-items-center content-head'>
                                    <p className='d-flex align-items-center gap-2'><CiUser /> <span>BY ADMIN</span></p>
                                    <p className='d-flex align-items-center gap-2'><FaRegCalendarAlt /><span>02ND NOV 2018</span></p>
                                </div>
                                <div className='content-medium pt-3'>
                                    <h6>Preparation The Best of Vegetables and Starches</h6>
                                    <Link className='d-flex gap-2 align-items-center pt-3'>Read more <BsArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className='card-img'>
                                <img src={img2} className="w-100 d-block mx-lg-auto img-fluid" alt="" />
                            </div>
                            <div className='card-content pt-4'>
                                <div className='d-flex justify-content-between align-items-center content-head'>
                                    <p className='d-flex align-items-center gap-2'><CiUser /> <span>BY ADMIN</span></p>
                                    <p className='d-flex align-items-center gap-2'><FaRegCalendarAlt /><span>02ND NOV 2018</span></p>
                                </div>
                                <div className='content-medium pt-3'>
                                    <h6>Great bulk recipes to help use all your organic vegetables</h6>
                                    <Link className='d-flex gap-2 align-items-center pt-3'>Read more <BsArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className='card-img'>
                                <img src={img3} className="w-100 d-block mx-lg-auto img-fluid" alt="" />
                            </div>
                            <div className='card-content pt-4'>
                                <div className='d-flex justify-content-between align-items-center content-head'>
                                    <p className='d-flex align-items-center gap-2'><CiUser /> <span>BY ADMIN</span></p>
                                    <p className='d-flex align-items-center gap-2'><FaRegCalendarAlt /><span>02ND NOV 2018</span></p>
                                </div>
                                <div className='content-medium pt-3'>
                                    <h6>Great bulk recipes to help use all your organic vegetables</h6>
                                    <Link className='d-flex gap-2 align-items-center pt-3'>Read more <BsArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LNews