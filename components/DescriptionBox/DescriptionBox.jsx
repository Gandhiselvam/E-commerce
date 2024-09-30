import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-Commerce or Electronic Commerce means buying and selling of goods,
          products, or services over the internet. E-commerce is also known as
          electronic commerce or internet commerce. These services provided
          online over the internet network. Transaction of money, funds, and
          data are also considered as E-commerce.
        </p>
        <p>
          E-commerce (e-commerce) is the exchange of goods and services and the
          transmission of funds and data over the internet. E-commerce relies on
          technology and digital platforms, including websites, mobile apps and
          social media to make buying and selling possible.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox