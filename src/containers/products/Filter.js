import React, { useState } from "react";
import styled from "styled-components";
import iconCheck from "../../assets/icon-check.png";
import iconUncheck from "../../assets/icon-uncheck.png";
const Wrapper = styled.div`
    width: 210px;
    color: #1a212f;
    h2 {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 20px;
    }
`;

const Price = styled.div`
    display: flex;
    gap: 10px;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 35px;
    & > input {
        width: 100px;
        padding: 5px;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`;

const Button = styled.button`
    width: 185px;
    background: ${(props) =>
        props.variant === "primary" ? "#fac663" : "#FFFEFD"};
    border: 2px solid #fac663;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 12px 0;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin: 10px 0;
    cursor: pointer;
`;

const Checkbox = (props) => {
    return (
        <>
            {props.checked ? (
                <img
                    src={iconCheck}
                    onClick={() => {
                        props.onClick();
                    }}
                    alt="checked"
                />
            ) : (
                <img
                    src={iconUncheck}
                    alt="unchecked"
                    onClick={() => {
                        props.onClick();
                    }}
                />
            )}
        </>
    );
};

export default function Filter(props) {
    const [area, setArea] = useState([]);
    const [areaActive, setAreaActive] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const [equipmentActive, setEquipmentActive] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    const [price, setPrice] = useState({
        min: 100000,
        max: 600000,
    });
    const [equipment, setEquipment] = useState([]);
    const handleAreaChange = (input) => {
        let newArea = [...area];
        if (newArea.includes(input)) {
            newArea = newArea.filter((item) => item !== input);
        } else {
            newArea.push(input);
        }
        setArea(newArea);
    };
    const handleAreaActive = (input) => {
        let newAreaActive = [...areaActive];
        newAreaActive[input] = !newAreaActive[input];
        setAreaActive(newAreaActive);
    };
    const handleEquipmentActive = (input) => {
        let newEquipmentActive = [...equipmentActive];
        newEquipmentActive[input] = !newEquipmentActive[input];
        setEquipmentActive(newEquipmentActive);
    };
    const handleEquipmentChange = (input) => {
        let newEquipement = [...equipment];
        if (newEquipement.includes(input)) {
            newEquipement = newEquipement.filter((item) => item !== input);
        } else {
            newEquipement.push(input);
        }
        setEquipment(newEquipement);
    };

    return (
        <Wrapper>
            <h2>M???c ti???n</h2>
            <Price>
                <input
                    type="number"
                    placeholder="T??? 100.000"
                    value={price.min}
                    onChange={(e) => {
                        let newPrice = { ...price };
                        newPrice.min = e.target.value;
                        setPrice(newPrice);
                    }}
                />
                <input
                    type="number"
                    placeholder="?????n 600.000"
                    value={price.max}
                    onChange={(e) => {
                        let newPrice = { ...price };
                        newPrice.max = e.target.value;
                        setPrice(newPrice);
                    }}
                />
            </Price>
            <h2>Di???n t??ch</h2>
            <Item>
                <Checkbox
                    checked={areaActive[0]}
                    onClick={() => {
                        handleAreaChange("0,63 ??2");
                        handleAreaActive(0);
                    }}
                />
                <span>0,63 ??2</span>
            </Item>
            <Item>
                <Checkbox
                    checked={areaActive[1]}
                    onClick={() => {
                        handleAreaChange("0,90 ??2");
                        handleAreaActive(1);
                    }}
                />
                <span>0,90 ??2</span>
            </Item>
            <Item>
                <Checkbox
                    checked={areaActive[2]}
                    onClick={() => {
                        handleAreaChange("1,13 ??2");
                        handleAreaActive(2);
                    }}
                />
                <span>1,13 ??2</span>
            </Item>
            <Item>
                <Checkbox
                    checked={areaActive[3]}
                    onClick={() => {
                        handleAreaChange("1,56 ??2");
                        handleAreaActive(3);
                    }}
                />
                <span>1,56 ??2</span>
            </Item>
            <Item>
                <Checkbox
                    checked={areaActive[4]}
                    onClick={() => {
                        handleAreaChange("2,56 ??2");
                        handleAreaActive(4);
                    }}
                />
                <span>2,56 ??2</span>
            </Item>
            <Item>
                <Checkbox
                    checked={areaActive[5]}
                    onClick={() => {
                        handleAreaChange("2,88 ??2");
                        handleAreaActive(5);
                    }}
                />
                <span>2,88 ??2</span>
            </Item>
            <h2>Thi???t b??? ph??ng</h2>
            <Item>
                <Checkbox
                    checked={equipmentActive[0]}
                    onClick={() => {
                        handleEquipmentChange("toy");
                        handleEquipmentActive(0);
                    }}
                />
                <span>????? ch??i</span>
            </Item>
            <Item>
                <Checkbox
                    checked={equipmentActive[1]}
                    onClick={() => {
                        handleEquipmentChange("bed");
                        handleEquipmentActive(1);
                    }}
                />
                <span>Gi?????ng t???m n???ng</span>
            </Item>
            <Item>
                <Checkbox
                    checked={equipmentActive[2]}
                    onClick={() => {
                        handleEquipmentChange("toys");
                        handleEquipmentActive(2);
                    }}
                />
                <span>B??i c??o</span>
            </Item>
            <Item>
                <Checkbox
                    checked={equipmentActive[3]}
                    onClick={() => {
                        handleEquipmentChange("house");
                        handleEquipmentActive(3);
                    }}
                />
                <span>Tr?? ch??i ph???c t???p</span>
            </Item>
            <Item>
                <Checkbox
                    checked={equipmentActive[4]}
                    onClick={() => {
                        handleEquipmentChange("house");
                        handleEquipmentActive(4);
                    }}
                />
                <span>Nh?? nh???</span>
            </Item>
            <Button
                variant="primary"
                onClick={() => {
                    props.handleFilter({
                        price,
                        equipment,
                        area,
                    });
                }}
            >
                ??p d???ng
            </Button>
            <Button
                onClick={() => {
                    setArea([]);
                    setEquipment([]);
                    setPrice({
                        min: 100000,
                        max: 600000,
                    });
                    setAreaActive([false, false, false, false, false, false]);
                    setEquipmentActive([false, false, false, false, false]);
                    props.clearFilter();
                }}
            >
                ?????t l???i b??? l???c
            </Button>
        </Wrapper>
    );
}
