import React, { useState, useEffect } from "react";
import Select from "react-select";
interface ISelectType {
    options: any;
    handleInputChange: any;
    className?: string;
};
const SelectOption = (props: ISelectType) => {
    return (

        <Select
            className={`${props.className}`}
            options={props.options}
            onInputChange={props.handleInputChange}
        />
    );
};

export default SelectOption;

