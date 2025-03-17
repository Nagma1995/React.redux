import React, { useState } from "react";
import { delData, insData, upd, updData } from "./reduxcrud/UserAction";
import { useSelector, useDispatch } from "react-redux";

export const UserComponent = () => {
  const allData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const [id, setId] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      dispatch(updData(id, data));
    } else {
      dispatch(insData(data));
    }
    setData({
      name: "",
      age: "",
    });
    setId("");
  };
  const editData = (id) => {
    let res = allData.find((i, index) => {
      return index == id;
    });
    setData(res);
    setId(id);
  };

  return (
    <div>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <input
          type="text"
          name="name"
          id=""
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="text"
          name="age"
          id=""
          value={data.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <br />
        <br />
        <input type="submit" value="Save Data" />
      </form>
      <br />
      <br />
      <table border={"2"}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => dispatch(delData(index))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UserComponent;
