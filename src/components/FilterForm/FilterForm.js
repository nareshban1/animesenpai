import React from "react";
import { genres } from "../../data/genreList";
import { Body, Subtitle } from "../Styled/Commons";
import Select from "react-select";
import { order, ratings, sort, statuses, types } from "../../data/filterData";
import { BottomGrid, Button, FilterFormContainer, Input, SelectInput, TopGrid } from "./FilterFormStyles";


const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "#0e0e0e",
        // match with the menu
        borderRadius: "5px",
        // Overwrittes the different states of border
        // Removes weird border around container
        borderColor: "#0e0e0e",
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#5EAA7A" : "#5EAA7A"
        }
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        padding: 0
    })
};

const MySelect = (props) => {
    const handleChange = (value) => {
        console.log(value);

        props.onChange(`${props.name}`, value);
    };

    return (
        <Select
            options={props.options}
            isMulti={props.multi}
            onChange={handleChange}
            value={props.value}
            placeholder={props.placeholder}
            styles={customStyles}
        />
    );
};

const FilterForm = ({ formik }) => {
    return (
        <FilterFormContainer onSubmit={formik.handleSubmit}>
            <Subtitle color="white">Filter Anime</Subtitle>
            <TopGrid>
                <Input
                    type="text"
                    name="query"
                    value={formik.values.query}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="query"
                    placeholder="Anime Name"
                />

                <MySelect
                    value={formik.values.genre}
                    onChange={formik.setFieldValue}
                    options={genres}
                    name={"genre"}
                    multi={true}
                    placeholder="Genres"
                />
                <MySelect
                    value={formik.values.status}
                    onChange={formik.setFieldValue}
                    options={statuses}
                    name={"status"}
                    multi={true}
                    placeholder="Status"
                />
                <MySelect
                    value={formik.values.rating}
                    onChange={formik.setFieldValue}
                    options={ratings}
                    name={"rating"}
                    multi={false}
                    placeholder="Age Rating"
                />
            </TopGrid>
            <BottomGrid>

                <MySelect
                    value={formik.values.type}
                    onChange={formik.setFieldValue}
                    options={types}
                    name={"type"}
                    multi={true}
                    placeholder="Type"
                />
                <MySelect
                    value={formik.values.orderBy}
                    onChange={formik.setFieldValue}
                    options={order}
                    name={"orderBy"}
                    multi={false}
                    placeholder="Order By"
                />

                <MySelect
                    value={formik.values.sort}
                    onChange={formik.setFieldValue}
                    options={sort}
                    name={"sort"}
                    multi={false}
                    placeholder="Sort"
                />

                <Button type="submit">Filter</Button>
            </BottomGrid>
        </FilterFormContainer>
    );
};

export default FilterForm;
