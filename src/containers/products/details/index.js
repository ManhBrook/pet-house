import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../components/container";
import Button from "../../../components/button";
import Booking from "./Booking";
import Room from "../../home/Room";
import BackgroundDetails from "../../../assets/background-details.png";
import SideCat1 from "../../../assets/side-cat1.png";
import SideCat2 from "../../../assets/side-cat2.png";
import SideCat3 from "../../../assets/side-cat3.png";
import MainCat from "../../../assets/main-cat.png";
import iconToy from "../../../assets/icon-toy.png";
import iconToys from "../../../assets/icon-toys.png";
import iconBed from "../../../assets/icon-bed.png";
import iconHouse from "../../../assets/icon-house.png";
const Wrapper = styled.div`
    background-image: url(${BackgroundDetails});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
    padding: 65px 0;
`;
const DetailsContainer = styled.div`
    display: flex;
    margin-bottom: 135px;
`;
const Side = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const MainImg = styled.div`
    margin-left: 30px;
`;
const Content = styled.div`
    margin-left: 70px;
    h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        margin-bottom: 36px;
    }
    p {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 20px;
        span {
            font-weight: bold;
        }
    }
    ul {
        margin-bottom: 25px;
        li {
            img {
                margin-right: 10px;
            }
            font-size: 16px;
            line-height: 19px;
            margin-bottom: 10px;
        }
    }
`;
export default function Details(props) {
    const [showBooking, setShowBooking] = useState(false);
    return (
        <Wrapper>
            {showBooking && <Booking onClose={() => setShowBooking(false)} />}
            <Container>
                <DetailsContainer>
                    <Side>
                        <img src={SideCat1} alt="side-cat1" />
                        <img src={SideCat2} alt="side-cat2" />
                        <img src={SideCat3} alt="side-cat3" />
                    </Side>
                    <MainImg>
                        <img src={MainCat} alt="main-cat" />
                    </MainImg>
                    <Content>
                        <h1>Ph??ng 6</h1>
                        <p>K??ch th?????c (WxDxH) - 180x160x180 cm</p>
                        <p>Di???n t??ch - 2.88 m2</p>
                        <p>Thi???t b??? ph??ng</p>
                        <ul>
                            <li>
                                <img src={iconBed} alt="PetHouse" />
                                Gi?????ng t???m n???ng
                            </li>
                            <li>
                                <img src={iconHouse} alt="PetHouse" />
                                Nh?? nh???
                            </li>
                            <li>
                                <img src={iconToy} alt="PetHouse" />
                                ????? ch??i - 3 m??n
                            </li>
                            <li>
                                <img src={iconToys} alt="PetHouse" />
                                B??n c??o
                            </li>
                        </ul>
                        <p>
                            Gi?? theo ng??y: <span>600.000 VND</span>
                        </p>
                        <Button
                            variant="primary"
                            onClick={() => setShowBooking(true)}
                        >
                            ?????t ph??ng
                        </Button>
                    </Content>
                </DetailsContainer>
                <Room />
            </Container>
        </Wrapper>
    );
}
