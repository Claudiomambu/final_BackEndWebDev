import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import Navbar from "../../molecules/Navbar";
import Axios from "axios";

const AddUser = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const data = {
      first_name: fname,
      last_name: lname,
      email: email,
      avatar: "https://source.unsplash.com/random",
    };
    Axios.post("http://localhost:3004/users", data);
  };

  return (
    <div>
      <Navbar />
      <div className="container-md mt-4">
        <h3> About </h3>
        <p> Membuat Aplikasi untuk Final project Back-End Web Development</p>
      </div>
    </div>
  );
};

export default AddUser;
