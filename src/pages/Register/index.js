import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import firebase from "../../config/Firebase";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const onSubmit = () => {
    const data = {
      email: email,
      username: username,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // simpan ke realtime database
        const userId = userCredential.user.uid;
        firebase
          .database()
          .ref("users/" + userId)
          .set(data);
        setUsername("");
        setEmail("");
        setPassword("");
        // redirect ke halaman login

        history.push("/login");
        //console.log(userCredential.user.uid);
        // // Signed in
        // var user = userCredential.user;
        // // ...
      })
      .catch((error) => {
        console.log(error);
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // ..
      });
  };

  return (
    <div className="container-md mt-4">
      <h2>Register Admin MoTeL.com</h2>

      <Input
        className="form-control"
        placeholder="masukan username anda"
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="masukan email anda"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="masukan password anda"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button onSubmit={onSubmit} text="Register" />
    </div>
  );
};

export default Register;
