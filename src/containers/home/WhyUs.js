import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import BackgroundPaw from "../../assets/background-paw.png";
import ImgTemps from "../../assets/img-temps.png";
import ImgCamera from "../../assets/img-camera.png";
import ImgTaxi from "../../assets/img-taxi.png";
import ImgMeal from "../../assets/img-meal.png";
import ImgWalk from "../../assets/img-walk.png";
import ImgDoc from "../../assets/img-doc.png";
const Wrapper = styled.div`
    padding-bottom: 130px;
    background: url(${BackgroundPaw}), #fffefd;
    background-size: 300px;
    background-repeat: no-repeat;
    background-position: top right;
    color: #1a212f;
    h1 {
        text-align: center;
        font-weight: 800;
        font-size: 36px;
        line-height: 43px;
        margin-bottom: 60px;
    }
`;
const Grid = styled.div`
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    gap: 20px 30px;
`;
const GridItem = styled.div`
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(208, 208, 208, 0.25);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 8px;
    padding: 30px;
    img {
        margin-bottom: 35px;
    }
    h2 {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 22px;
        line-height: 140%;
    }
    p {
        font-size: 16px;
        line-height: 140%;
    }
    &:hover {
        border: 2px solid #f5ac3c;
        filter: drop-shadow(0px 0px 10px #f5ac3c);
    }
`;
export default function WhyUs() {
    return (
        <Wrapper>
            <Container>
                <h1>Tại sao là chúng tôi?</h1>
                <Grid>
                    <GridItem>
                        <img src={ImgTemps} alt="img-temps" />
                        <h2>Nhiệt độ thoải mái</h2>
                        <p>
                            Tất cả các phòng đều duy trì nhiệt độ dễ chịu trong
                            23 - 25 độ. Trong mỗi phòng, bạn có thể điều chỉnh
                            nhiệt độ bổ sung.
                        </p>
                    </GridItem>
                    <GridItem>
                        <img src={ImgCamera} alt="img-temps" />
                        <h2>Video theo dõi</h2>
                        <p>
                            Chúng tôi cung cấp quyền truy cập vào hệ thống của
                            chúng tôi. Bạn sẽ có thể theo dõi thú cưng của bạn
                            từ xa
                        </p>
                    </GridItem>
                    <GridItem>
                        <img src={ImgTaxi} alt="img-temps" />
                        <h2>Dịch vụ Zootaxi</h2>
                        <p>
                            Chúng tôi sẽ đến đón thú cưng của bạn ở bất kỳ khu
                            vực nào trên địa bàn Hà Nội.
                        </p>
                    </GridItem>
                    <GridItem>
                        <img src={ImgMeal} alt="img-temps" />
                        <h2>Chế độ ăn uống cân bằng</h2>
                        <p>
                            Bạn có thể mang theo thức ăn của mình hoặc giao cho
                            chế độ ăn uống của bạn thú cưng cho các chuyên gia
                            của chúng tôi.
                        </p>
                    </GridItem>
                    <GridItem>
                        <img src={ImgWalk} alt="img-temps" />
                        <h2>Đi bộ hàng ngày</h2>
                        <p>
                            Theo yêu cầu của bạn, chúng tôi đưa thú cưng của bạn
                            đi dạo hai lần một ngày trong một khu vực chuyên
                            biệt khép kín.
                        </p>
                    </GridItem>
                    <GridItem>
                        <img src={ImgDoc} alt="img-temps" />
                        <h2>Bác sĩ thú y hàng đầu</h2>
                        <p>
                            Bác sĩ thú y túc trực 24/24 tại khách sạn, người sẽ
                            hỗ trợ nếu cần thiết.
                        </p>
                    </GridItem>
                </Grid>
            </Container>
        </Wrapper>
    );
}
