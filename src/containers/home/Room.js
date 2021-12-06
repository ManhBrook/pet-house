import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Container from "../../components/container";
import Button from "../../components/button";
import BackgroundFish from "../../assets/background-fish.png";
import ImgCat from "../../assets/img-cat.png";
import ImgCat1 from "../../assets/img-cat1.png";
import ImgCat2 from "../../assets/img-cat2.png";
import iconList from "../../assets/list.png";
const Wrapper = styled.div`
    color: #1a212f;
    background-image: url(${BackgroundFish});
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: top left;
    margin-bottom: 50px;
    h1 {
        font-weight: 800;
        font-size: 36px;
        line-height: 43px;
        text-align: center;
        margin-bottom: 70px;
    }
`;
const SliderContent = styled.div`
    position: relative;
`;
const Content = styled.div`
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(208, 208, 208, 0.25);
    border-radius: 8px;
    padding: 35px 100px;
    position: absolute;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    h2 {
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 25px;
    }
    ul {
        list-style: outside url(${iconList});
        li {
            font-size: 16px;
            line-height: 19px;
            margin-bottom: 17px;
            span {
                font-weight: 700;
            }
        }
    }
`;
export default function Room() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Wrapper>
            <Container>
                <h1>Phòng</h1>
                <Slider {...settings}>
                    <SliderContent>
                        <img src={ImgCat} alt="img-cat" />
                        <Content>
                            <h2>Phòng thú cưng</h2>
                            <ul>
                                <li>Diện tích - 0.90 m2</li>
                                <li>Kích thước (WxDxH) - 90x100x180 cm</li>
                                <li>
                                    Giá theo ngày: <span> 300.000 VND</span>
                                </li>
                            </ul>
                            <Button variant="primary"><Link to="/products/details">Đặt phòng ngay</Link></Button>
                        </Content>
                    </SliderContent>
                    <SliderContent>
                        <img src={ImgCat1} alt="img-cat" />
                        <Content>
                            <h2>Phòng 2</h2>
                            <ul>
                                <li>Diện tích - 1,13 м2</li>
                                <li>Kích thước - 100х125х180 см</li>
                                <li>
                                    Giá theo ngày: <span>250.000 VND</span>
                                </li>
                            </ul>
                            <Button variant="primary"><Link to="/products/details">Đặt phòng ngay</Link></Button>
                        </Content>
                    </SliderContent>
                    <SliderContent>
                        <img src={ImgCat2} alt="img-cat" />
                        <Content>
                            <h2>Phòng 3</h2>
                            <ul>
                                <li>Diện tích - 1,56 м2</li>
                                <li>Kích thước - 125х125х180 см</li>
                                <li>
                                    Giá theo ngày: <span>350.000 VND</span>
                                </li>
                            </ul>
                            <Button variant="primary"><Link to="/products/details">Đặt phòng ngay</Link></Button>
                        </Content>
                    </SliderContent>
                </Slider>
            </Container>
        </Wrapper>
    );
}
