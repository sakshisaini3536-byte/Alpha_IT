import axios from "axios";

function AxiosCrud() {
  const BASE_URL = "http://localhost:5000/api/user";

//  GET
  function getUser() {
    console.log("AXIOS GET started");

    axios.get(BASE_URL)
      .then(res => {
        console.log("✅ GET response:", res.data);
      })
      .catch(err => {
        console.log("❌ GET error:", err.message);
      });
  }

//  POST
  function createUser() {
    console.log(" AXIOS POST started");

    axios.post(BASE_URL, {
      name: "Akash",
      age: 24,
      role: "Designer",
    })
    .then(res => {
      console.log(" POST response:", res.data);
    })
    .catch(err => {
      console.log(" POST error:", err.message);
    });
  }


    // PUT
 
  function replaceUser() {
    console.log(" AXIOS PUT started");

    axios.put(BASE_URL, {
      id: 1,
      name: "Manish Rai",
      age: 20,
      role: "Architect",
    })
    .then(res => {
      console.log(" PUT response:", res.data);
    })
    .catch(err => {
      console.log(" PUT error:", err.message);
    });
  }

  // PATCH
  function updateUser() {
    console.log(" AXIOS PATCH started");

    axios.patch(BASE_URL, {
      role: "Senior Developer",
    })
    .then(res => {
      console.log(" PATCH response:", res.data);
    })
    .catch(err => {
      console.log(" PATCH error:", err.message);
    });
  }

  // DELETE
  function deleteUser() {
    console.log(" AXIOS DELETE started");

    axios.delete(BASE_URL)
      .then(res => {
        console.log(" DELETE response:", res.data);
      })
      .catch(err => {
        console.log(" DELETE error:", err.message);
      });
  }

  return (
    <div >
      <h2>Axios CRUD Example</h2>

      <button onClick={getUser}>GET User</button><br /><br />
      <button onClick={createUser}>POST User</button><br /><br />
      <button onClick={replaceUser}>PUT User</button><br /><br />
      <button onClick={updateUser}>PATCH User</button><br /><br />
      <button onClick={deleteUser}>DELETE User</button>
    </div>
  );
}

export default AxiosCrud;
