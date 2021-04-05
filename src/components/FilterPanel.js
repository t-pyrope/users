import React from 'react';

const FilterPanel = ({people}) => {

    const makeVariantsHandler = (arr, property) => {
        let variants;
        if (typeof arr[0][property] === "string" || typeof arr[0][property] === "number"){
            variants = arr.reduce((acc, val) => {
                if(!acc.includes(val[property])){
                    acc.push(val[property])
                };
                return acc;
            }, []);
        } else {
            variants = arr.reduce((acc, val) => {
                let string = val[property];
                let city = string.city;
                if(!acc.includes(city)){
                    acc.push(city)
                };
                return acc;
            }, []);
        }

        return variants.map((v) => (
            <label key={v}><input type="checkbox" name="checkbox" value={v} />{v}</label>
        ))
    }

    return(
        <div>
            <h3>Filter</h3>
            <div>
                <h4>Gender</h4>
                <div>{makeVariantsHandler(people, "gender")}</div>
            </div>
            <div>
                <h4>Department</h4>
                <div>{makeVariantsHandler(people, "department")}</div>
            </div>
            <div>
                <h4>City</h4>
                <div>{makeVariantsHandler(people, "address")}</div>
            </div>
        </div>
    )
}

export default FilterPanel;