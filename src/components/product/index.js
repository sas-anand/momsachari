import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import Rating from "@mui/material/Rating";
import allPickles from "../../assets/images/allpickles.png";
import singlePickle from "../../assets/images/singlepickle.png";
import { Button } from "@mui/material";

import { useUser } from "../../context/userContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import { MyContext } from "../../App";

const Product = (props) => {
  const [productData, setProductData] = useState();
  const [isAdded, setIsadded] = useState(false);
  const {userData, dispatchUserData } = useUser();
  const { cart } = userData;
  const navigate = useNavigate();
  const context = useContext(MyContext);
  // console.log("singel product page", props)
  useEffect(() => {
    setProductData(props.item);
  }, [props.item]);

  const setProductCat = () => {
    sessionStorage.setItem("parentCat", productData.parentCatName);
    sessionStorage.setItem("subCatName", productData.subCatName);
  };
  
  const addToCart = (item) => {
    item = {...item , selectedPrice : item.priceDistribution[0] , selectedWt : item.weight[0]}
    let flag = 0;
 
    cart.length !=0 && cart.forEach(el => {
      if(el.id === item.id && el.selectedWt == item.selectedWt){
        flag =1;
        dispatchUserData({ type: "INCREMENT_QUANTITY", payload : item });
      }      
    })
  
    if(!flag){
      dispatchUserData({ type: "ADD_TO_CART", payload: item });}
    setIsadded(true);
  };

  return (
    <div className="productThumb" onClick={setProductCat}>
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}

      {productData !== undefined && (
        <>
          <Link to={`/product/${productData.id}`} className="cursor-pointer">
            <div className="imgWrapper">
              <div className="p-4 wrapper mb-3">
                <img src={productData?.catImg+'?im=Resize=(420,420)'} className='w-100 max=h-full' />
                {/* <img
                  src={"https://dl.dropboxusercontent.com/scl/fi/28pbtxir9dkzs0r8k0q9y/amla_muraba.jpeg?rlkey=z6p8iuhic65td41oxkcyvx3df&st=ff2jq82e&dl=0" + "?im=Resize=(420,420)"}
                  className="w-100 max-h-full"
                /> */}
              </div>

              {/* <div className='overlay transition'>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <a className='cursor' tooltip="Add to Wishlist">
                                            <FavoriteBorderOutlinedIcon />
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className='cursor' tooltip="Compare">
                                            <CompareArrowsOutlinedIcon />
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className='cursor' tooltip="Quick View">
                                            <RemoveRedEyeOutlinedIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
            </div>
          </Link>

          <div className="info">
            <span className="d-block catName">{productData.brand}</span>
            <h4 className="title text-teal-950">
              <Link>{productData.productName.substr(0, 50) + "..."}</Link>
            </h4>
            <div className="d-flex align-items-center justify-between">
            <Rating
              name="half-rating-read"
              value={parseFloat(productData.rating)}
              precision={0.5}
              readOnly
            />
            <div>
              <span className="text-teal-900 font-weight-bold">{productData?.weight[0]} grams</span>
            </div>
            </div>
            
            {/* <span className="brand d-block text-g">
              <Link className="text-g">{productData.brand}</Link>
            </span> */}

            <div className="d-flex align-items-center mt-3">
              <div className="d-flex align-items-center w-100">
                <span className="price text-g font-weight-bold">
                  Rs {productData?.priceDistribution[0]}
                </span>{" "}
                {/* <span className="ml-auto">
                  {productData.defaultWeight}
                </span> */}
              </div>
            </div>

            {/* <Button className='w-100 transition mt-3 bg-teal-950' onClick={()=>addToCart(productData)}><ShoppingCartOutlinedIcon /> 
                            {
                                isAdded===true ? 'Added' : 'Add To Cart'
                            }
                        </Button> */}
            <button
              className="w-100 transition bg-teal-900 px-1.5 py-1.5 text-white rounded mt-1 hover:bg-teal-950"
              onClick={() => addToCart(productData)}
            >
              <ShoppingCartOutlinedIcon />
              {isAdded === true ? "Added" : "Add To Cart"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
