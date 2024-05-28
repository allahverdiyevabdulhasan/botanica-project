import React, { useCallback, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { shopData } from '../api/shopData';
import { Link, useParams } from 'react-router-dom';
import slugify from 'react-slugify';
import { IoHeartSharp } from 'react-icons/io5';
import Zoom from 'react-medium-image-zoom'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReactImageMagnify from 'react-image-magnify';

const ShopDetail = () => {
    const { slug } = useParams();
    const shopDetails = shopData.find(p => slugify(p.title) === slug);

    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: shopDetails.title, link: `/shop/${slug}` },
    ];

    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])
    return (
        <div className='shop_detail'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="banner" >
                <div>
                    <BreadCrumb items={breadcrumbItems} />
                </div>
            </motion.div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='img_card'>
                            {/* <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img src={shopDetails.front_img} className="w-100 d-block mx-lg-auto img-fluid" alt="" />
                            </ControlledZoom> */}
                            {/* <Zoom>
                                <img src={shopDetails.front_img} className="w-100 d-block mx-lg-auto img-fluid" alt="" />
                            </Zoom> */}

                            <div className='imageMagnifyer'>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: shopDetails.front_img
                                    },
                                    largeImage: {
                                        src: shopDetails.front_img,
                                        width: 1129,
                                        height: 750
                                    }
                                }} />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 detail_content">
                        <div className='head'>
                            <h4>{shopDetails.title}</h4>
                            <div className='d-flex justify-content-end wishlist'>
                                <Link to={'/wishlist'}><IoHeartSharp className='' /></Link>
                            </div>
                        </div>
                        <span className='price'>${shopDetails.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopDetail