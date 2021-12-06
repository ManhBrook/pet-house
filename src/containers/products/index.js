import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../../components/container";
import Heading from "./Heading";
import Filter from "./Filter";
import Grid from "./Grid";
import Promo from "./Promo";
import imgCat from "../../assets/img-cat.png";
import imgCat1 from "../../assets/img-cat1.png";
import imgCat2 from "../../assets/img-cat2.png";
import imgCat3 from "../../assets/img-cat3.png";
import imgCat4 from "../../assets/img-cat4.png";
import imgCat5 from "../../assets/img-cat5.png";
import iconNone from "../../assets/icon-none.png";
import iconToy from "../../assets/icon-toy.png";
import iconToys from "../../assets/icon-toys.png";
import iconBed from "../../assets/icon-bed.png";
import iconHouse from "../../assets/icon-house.png";

const Flex = styled.div`
    & > div {
        display: flex;
        gap: 90px;
    }
`;

export default function Products() {
    let items = [
        {
            id: 1,
            img: imgCat,
            title: "Phòng 1",
            size: "90х70х180 см",
            area: "0,63 м2",
            price: 100000,
            equipment: [iconNone],
        },
        {
            id: 2,
            img: imgCat1,
            title: "Phòng 2",
            size: "90х100х180 см",
            area: "0,90 м2",
            price: 200000,
            equipment: [iconBed, iconToy],
        },
        {
            id: 3,
            img: imgCat2,
            title: "Phòng 3",
            size: "100х125х180 см",
            area: "1,13 м2",
            price: 250000,
            equipment: [iconBed, iconToy, iconToys],
        },
        {
            id: 4,
            img: imgCat3,
            title: "Phòng 4",
            size: "125х125х180 см",
            area: "1,56 м2",
            price: 350000,
            equipment: [iconBed, iconToy, iconToys],
        },
        {
            id: 5,
            img: imgCat4,
            title: "Phòng 5",
            size: "160х160х180 см",
            area: "2,56 м2",
            price: 400000,
            equipment: [iconBed, iconToy, iconToys, iconHouse],
        },
        {
            id: 6,
            img: imgCat5,
            title: "Phòng 6",
            size: "100х125х180 см см",
            area: "2,88 м2",
            price: 600000,
            equipment: [iconBed, iconToy, iconToys, iconHouse],
        },
    ];
    let defaultFilter = {
        price: {},
        equipment: [],
        area: [],
    };
    const [sort, setSort] = useState(true); // true: asc, false: desc
    const [filter, setFilter] = useState(defaultFilter);
    const [data, setData] = useState(items);
    const clearFilter = () => {
        setFilter(defaultFilter);
    };
    useEffect(() => {
        const sortByPrice = (a, b) => {
            if (sort) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        };
        setData(items.sort(sortByPrice));
    }, [sort]);
    useEffect(() => {
        let filterItem = [];

        for (let item of items) {
            let correctPrice = false;
            let correctArea = false;
            if (filter.price.min && filter.price.max) {
                if (
                    item.price >= filter.price.min &&
                    item.price <= filter.price.max
                )
                    correctPrice = true;
            } else {
                correctPrice = true;
            }
            if (filter.area.length > 0) {
                for (let area of filter.area) {
                    if (item.area.includes(area)) correctArea = true;
                }
            } else {
                correctArea = true;
            }

            if (correctArea && correctPrice) {
                filterItem.push(item);
            }
        }
        setData(filterItem);
    }, [filter]);
    return (
        <>
            <Heading handleSort={setSort} sort={sort} />
            <Flex>
                <Container>
                    <Filter
                        handleFilter={setFilter}
                        filter={filter}
                        clearFilter={clearFilter}
                    />
                    <Grid data={data} />
                </Container>
            </Flex>
            <Promo />
        </>
    );
}
