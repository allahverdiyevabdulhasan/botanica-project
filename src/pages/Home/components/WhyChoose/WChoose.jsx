import React from 'react';
import icon1 from '../../../../assets/images/icon-choose1.webp'
import icon2 from '../../../../assets/images/icon-choose2.png'
import icon3 from '../../../../assets/images/icon-choose3.webp'
// // motion
import { motion } from 'framer-motion';

const WChoose = () => {
    return (
        <div className='home_choose pt-5'>
            <div className="container">
                <div className='text-center choose_head'>
                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">Why Choose Us</p>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5>Why Choose Our Products</h5>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: '-10%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-10%' }}
                    transition={{ duration: 1.2 }}
                    className="row row-gap-5 pt-5">
                    <div className="col-lg-4">
                        <div className='choose_card'>
                            <div className="content_widget">
                                <div className='content-top'>
                                    <div className="image_box_top">
                                        <figure>
                                            <img src={icon1} alt="" />
                                        </figure>
                                        <h3>All-Natural and
                                            Organic Honey</h3>
                                    </div>
                                </div>
                                <div className='content-decs'>
                                    <p>The use of natural honey as a nutraceutical agent is associated with nutritional benefits and therapeutic promises.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className='choose_card'>
                            <div className="content_widget">
                                <div className='content-top'>
                                    <div className="image_box_top">
                                        <figure>
                                            <img src={icon2} alt="" />
                                        </figure>
                                        <h3>All-Natural and
                                            Organic Honey</h3>
                                    </div>
                                </div>
                                <div className='content-decs'>
                                    <p>The use of natural honey as a nutraceutical agent is associated with nutritional benefits and therapeutic promises.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className='choose_card'>
                            <div className="content_widget">
                                <div className='content-top'>
                                    <div className="image_box_top">
                                        <figure>
                                            <img src={icon3} alt="" />
                                        </figure>
                                        <h3>All-Natural and
                                            Organic Honey</h3>
                                    </div>
                                </div>
                                <div className='content-decs'>
                                    <p>The use of natural honey as a nutraceutical agent is associated with nutritional benefits and therapeutic promises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WChoose