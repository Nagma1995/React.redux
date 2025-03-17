import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, del, upd } from "./RtkCrud/RtkReducer";

export const RtkComponent = () => {
  const data = useSelector((state) => state.userCrud.data);
  const dispatch = useDispatch();
  const [userinfo, setUserinfo] = useState({
    name: "",
    age: "",
  });
  const [id, setId] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      dispatch(upd({ id, userinfo }));
    } else {
      dispatch(add(userinfo));
    }
    setUserinfo({
      name: "",
      age: "",
    });
    setId("");
  };
  const editData = (id) => {
    let res = data.find((i, index) => {
      return index == id;
    });
    setUserinfo(res);
    setId(id);
  };
  return (
    <div>
      <h1>Toolkit CrudExample</h1>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userinfo.name}
          onChange={handleChange}
        />
        <br /> <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={userinfo.age}
          onChange={handleChange}
        />
        <br /> <br />
        <input type="submit" value="saveData" />
      </form>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => {
            return (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => dispatch(del(index))}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
