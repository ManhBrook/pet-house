import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Container from "../../components/container";
import IconQuote from "../../assets/icon-quote.png";
const Wrapper = styled.div`
    padding: 150px 0;
    color: #1a212f;
    h1 {
        font-weight: 800;
        font-size: 36px;
        line-height: 43px;
        text-align: center;
        margin-bottom: 60px;
    }
`;
const SliderItem = styled.div`
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(208, 208, 208, 0.25);
    border-radius: 8px;
    padding: 35px;
    display: flex !important;
    gap: 8px;
    width: 45%;
`;
const Content = styled.div`
    p {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 25px;
    }
`;
const Details = styled.div`
    display: flex;
    font-size: 14px;
    line-height: 17px;
    color: #848484;
    justify-content: space-between;
`;
export default function Review() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    return (
        <Wrapper>
            <Container>
                <h1>Nhận xét</h1>
                <Slider {...settings}>
                    <SliderItem>
                        <div>
                            <img src={IconQuote} alt="icon-quote" />
                        </div>
                        <Content>
                            <p>
                                Lần đầu tiên tôi phải rời xa con mèo của chúng
                                tôi ở khách sạn, rất lo lắng. Quản trị viên Pet
                                đã gửi cho chúng tôi một bức ảnh về thú cưng của
                                chúng tôi mỗi ngày, cho chúng tôi biết cảm giác
                                của nó. Cả chúng tôi và con mèo đều rất hài
                                lòng!
                            </p>
                            <Details>
                                <span>NguyenThuyLinh</span>
                                <span>15/10/2020</span>
                            </Details>
                        </Content>
                    </SliderItem>
                    <SliderItem>
                        <div>
                            <img src={IconQuote} alt="icon-quote" />
                        </div>
                        <Content>
                            <p>
                                Con mèo của tôi là một người thực sự kén chọn,
                                rất khó để làm hài lòng anh ta. Tôi có những yêu
                                cầu đặc biệt để chăm sóc anh ấy, và "Cat" đã
                                hoàn thành xuất sắc nhiệm vụ. Tôi thường xem thú
                                cưng từ điện thoại của tôi trong video, nó rất
                                tiện lợi.
                            </p>
                            <Details>
                                <span>ManhBrook</span>
                                <span>02/10/2020</span>
                            </Details>
                        </Content>
                    </SliderItem>
                    <SliderItem>
                        <div>
                            <img src={IconQuote} alt="icon-quote" />
                        </div>
                        <Content>
                            <p>
                                Một khách sạn dành cho vật nuôi đã được bạn bè
                                giới thiệu cho chúng tôi. Họ luôn để lại con mèo
                                của họ ở đây khi họ rời đi. Vật nuôi được chăm
                                sóc rất tốt ở "PetHouse", khách sạn rất sạch sẽ.
                                Tôi sẽ giới thiệu cho tất cả mọi người!
                            </p>
                            <Details>
                                <span>TranKhanhLy</span>
                                <span>29/09/2020</span>
                            </Details>
                        </Content>
                    </SliderItem>
                </Slider>
            </Container>
        </Wrapper>
    );
}
