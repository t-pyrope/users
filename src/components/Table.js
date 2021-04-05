const Table = ({people, setPeople}) => {

    const showTableData = (person) => {
        return(
            <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.gender}</td>
                <td>{person.department}</td>
                <td>{person.address.city}, {person.address.street}</td>
            </tr>
        )
    }

    const sortHandler = (property, direction) => {
        const sortedPeople = [...people];
        switch(property){
            case "age":
                if(direction === "asc"){
                    sortedPeople.sort((a, b) => { return a.age - b.age});
                };
                if(direction === "desc"){
                    sortedPeople.sort((a, b) => { return b.age - a.age});
                };
                break;
            case "name":
                if(direction === "asc"){
                    sortedPeople.sort((a,b) => (a.name > b.name) ? 1 : -1);
                };
                if(direction === "desc"){
                    sortedPeople.sort((a,b) => (b.name > a.name) ? 1 : -1);
                };
                break;
            case "gender":
                if(direction === "asc"){
                    sortedPeople.sort((a,b) => (a.gender > b.gender) ? 1 : -1);
                };
                if(direction === "desc"){
                    sortedPeople.sort((a,b) => (b.gender > a.gender) ? 1 : -1);
                };
                break;
            case "department":
                if(direction === "asc"){
                    sortedPeople.sort((a,b) => (a.department > b.department) ? 1 : -1);
                };
                if(direction === "desc"){
                    sortedPeople.sort((a,b) => (b.department > a.department) ? 1 : -1);
                };
                break;
            case "address":
                if(direction === "asc"){
                    sortedPeople.sort((a,b) => (`${a.address.city}${a.address.street}` > `${b.address.city}${b.address.street}`) ? 1 : -1);
                };
                if(direction === "desc"){
                    sortedPeople.sort((a,b) => (`${b.address.city}${b.address.street}` > `${a.address.city}${a.address.street}`) ? 1 : -1);
                };
                break;
            default:
                return [...sortedPeople];
        }
        
        setPeople(sortedPeople);
    }

    return(
        <table>
            <thead>
            <tr>
                <th>Name
                    <button onClick={() => sortHandler("name", "asc")}>a</button>
                    <button onClick={() => sortHandler("name", "desc")}>d</button>
                </th>
                <th>
                    Age
                    <button onClick={() => sortHandler("age", "asc")}>a</button>
                    <button onClick={() => sortHandler("age", "desc")}>d</button>
                </th>
                <th>
                    Gender
                    <button onClick={() => sortHandler("gender", "asc")}>a</button>
                    <button onClick={() => sortHandler("gender", "desc")}>d</button>
                </th>
                <th>
                    Department
                    <button onClick={() => sortHandler("department", "asc")}>a</button>
                    <button onClick={() => sortHandler("department", "desc")}>d</button>
                </th>
                <th>
                    Address
                    <button onClick={() => sortHandler("address", "asc")}>a</button>
                    <button onClick={() => sortHandler("address", "desc")}>d</button>
                </th>
            </tr>
            </thead>
            <tbody>
            {people.map((person) => 
                showTableData(person)
            )}
            </tbody>
        </table>
    )
}

export default Table;