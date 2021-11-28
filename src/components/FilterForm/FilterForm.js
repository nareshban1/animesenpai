import React from "react";
import { genres } from "../../data/genreList";
import { Body } from "../Styled/Commons";
import Select from "react-select";
import { order, ratings, statuses, types } from "../../data/filterData";

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
        />
    );
};

const FilterForm = ({ formik }) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            <Body>Filter Anime</Body>
            <input
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
                placeholder="Sort By"
            />

            <button type="submit">Filter</button>
        </form>
    );
};

export default FilterForm;
