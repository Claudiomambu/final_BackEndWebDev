import React, { useState, useEffect } from "react";
import Navbar from "../../molecules/Navbar";
import firebase from "../../config/Firebase";
import Cards from "../../molecules/Cards";

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");
  const [noKTP, setNoKTP] = useState("");

  const [costumer, setCostumer] = useState([]);

  const [button, setButton] = useState("simpan");

  const [pilihcos, setpilihCos] = useState({});

  const onUpdate = (item) => {
    setNama(item.nama);
    setUsia(item.usia);
    setNoKTP(item.noKTP);
    setButton("Update");
    setpilihCos(item);
  };

  const onDelete = (item) => {
    firebase.database().ref(`Costumer/${item.id}`).remove();
  };

  useEffect(() => {
    firebase
      .database()
      .ref("Costumer")
      .on("value", (res) => {
        if (res.val()) {
          // array
          const rawData = res.val();
          const costumerArray = [];
          Object.keys(rawData).map((item) => {
            costumerArray.push({
              id: item,
              ...rawData[item],
            });
          });
          setCostumer(costumerArray);
        }
      });
  }, []);

  const resetForm = () => {
    setNama("");
    setUsia("");
    setNoKTP("");
    setButton("simpan");
    setpilihCos({});
  };

  const onSubmit = () => {
    const Data = {
      nama: nama,
      usia: usia,
      noKTP: noKTP,
    };
    if (button == "simpan") {
      firebase.database().ref("Costumer").push(Data);
    } else {
      //update isi dari input data
      firebase.database().ref(`Costumer/${pilihcos.id}`).set(Data);
    }
    resetForm();
  };

  return (
    <div>
      <Navbar />
      <div className="container-md mt-3">
        <h3>Input Data </h3>
        <p>Nama </p>
        <input
          className="form-control"
          placeholder="Masukan Nama Costumer"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <p>Usia</p>
        <input
          className="form-control"
          placeholder="Masukan Usia Costumer"
          value={usia}
          onChange={(e) => setUsia(e.target.value)}
        />

        <p>No. Ktp</p>
        <input
          className="form-control"
          placeholder="Masukan nomor KTP Costumer"
          value={noKTP}
          onChange={(e) => setNoKTP(e.target.value)}
        />
        <br />
        <button className="form-control warna" onClick={onSubmit}>
          {button}
        </button>
        {button === "Update" && (
          <button className="form-control color" onClick={resetForm}>
            Batal
          </button>
        )}
      </div>

      <div className="container-md mt-3">
        <hr />
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Usia</th>
              <th>No. KTP</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {costumer.map((item) => (
              <tr key={item.id}>
                <td>{item.nama}</td>
                <td>{item.usia}</td>
                <td>{item.noKTP}</td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => onUpdate(item)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => onDelete(item)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
