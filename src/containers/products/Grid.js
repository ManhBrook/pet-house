import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../../components/button";
const Wrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 30px;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
`;

const GridItem = styled(NavLink)`
    background: #ffffff;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(208, 208, 208, 0.25);
    border-radius: 6px;
    cursor: pointer;
`;
const ImgContainer = styled.div`
    width: 100%;
    img {
        max-width: 100%;
    }
`;
const Content = styled.div`
    padding: 20px;
    h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 15px;
    }
    p {
        font-size: 14px;
        line-height: 25px;
        img {
            margin-left: 10px;
        }
    }
    button {
        margin-top: 20px;
        width: 100%;
    }
`;

export default function Grid(props) {
    return (
        <Wrapper>
            {props.data.map((item) => (
                <GridItem to="products/details" key={item.id}>
                    <ImgContainer>
                        <img src={item.img} alt="img" />
                    </ImgContainer>
                    <Content>
                        <h3>{item.title}</h3>
                        <p>
                            Kích thước - {item.size} <br />
                            Diện tích - {item.area} <br />
                            Thiết bị phòng{" "}
                            {item.equipment.map((img, i) => (
                                <img src={img} alt="img" key={i} />
                            ))}{" "}
                            <br />
                            Giá: {item.price.toLocaleString()} VND
                        </p>
                        <Button
                            variant="primary"
                            onClick={() => props.showBooking()}
                        >
                            Đặt phòng
                        </Button>
                    </Content>
                </GridItem>
            ))}
        </Wrapper>
    );
}
