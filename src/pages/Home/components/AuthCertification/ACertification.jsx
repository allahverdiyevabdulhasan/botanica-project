import React from 'react';
// import './style.scss';
import img from '../../../../assets/images/bn4-1.webp';
import brand1 from '../../../../assets/images/brand-1.webp'
import brand2 from '../../../../assets/images/brand-2.webp'
import brand3 from '../../../../assets/images/brand-3.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Pagination,
    A11y,
    Autoplay,
} from "swiper/modules";
import 'swiper/css';
import { motion } from 'framer-motion';

const ACertification = () => {
    return (
        <div className='auth_certification pt-5'>
            <div className="container">
                <div className="row flex-lg-row-reverse">

                    <motion.div
                        initial={{ opacity: 0, x: '10%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '10%' }}
                        transition={{ duration: 1.2 }}
                        className="col-lg-6 pt-lg-5">
                        <div>
                            <h6>True Source Certified</h6>
                            <h3>Authenticity Certification</h3>
                            <p>True Source Honey certification confirms that honey was sourced in a transparent manner and tested for authenticity. When consumers buy honey or honey containing products bearing the True Source.</p>

                            <div>
                                <Swiper
                                    grabCursor={true}
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 1000 }}
                                    speed={2000}
                                    loop={true}
                                >

                                    <SwiperSlide>
                                        <div className="item-cards">
                                            <div className='card'>
                                                <img src={brand1} className=" mx-lg-auto img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-cards">
                                            <div className='card'>
                                                <img src={brand2} className=" mx-lg-auto img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-cards">

                                            <div className='card'>
                                                <img src={brand3} className="mx-lg-auto img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-cards">

                                            <div className='card'>
                                                <img src={brand1} className="mx-lg-auto img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-cards">

                                            <div className='card'>
                                                <img src={brand2} className="mx-lg-auto img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item-cards">

                                            <div className='card'>
                                                <img src={brand3} className="mx-lg-auto img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: '-10%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className="col-lg-6">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 1.2 }}
                            src={img} className="d-block mx-lg-auto img-fluid" width="700" height="500" alt="img" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ACertification