import React, { useState, useEffect, useContext } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { Context } from "../store/appContext";
import loaderbox from "../../img/loaderbox.gif";

export const ChangePassword = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token") || localStorage.getItem('userToken');
  const [renderComp, setRenderComp] = useState("loader");
  const initialFormData = {
    password: "",
    email: email,
    confirmpassword: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmpassword) {
      setErrorMessage("PASSWORD IS REQUIRED");
      setShowAlert(true);
      return;
    }
    if (formData.password !== formData.confirmpassword) {
      setErrorMessage("Passwords do not match");
      setShowAlert(true);
      return;
    }
    try {
      const updatedFormData = {
        "email": email,
        "password": formData.password,
      };

      console.log(updatedFormData);
      await actions.changePassword(updatedFormData);
      setErrorMessage("");
      setShowAlert(true);
      await actions.logout();
      
      // Redirigir a la página de inicio
      
    } catch (error) {
      console.error("Error al actualizar el usuario: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await actions.decrypt(token);

          if (response && response.email) {
            // Set the extracted email in the Email state
            setEmail(response.email);
            setRenderComp("changePasswordComp");
          }
        } catch (error) {
          console.error("Error while decoding token:", error);
        }
      }
    };

    fetchData();
  }, [token, actions]);

  return (  <div className="container mt-5">
  {renderComp === "loader" && (
    <div className="d-flex justify-content-center ">
      <img src={loaderbox} alt="" />
    </div>
  )}

  {renderComp === "changePasswordComp" && (
    <div className="container">
      <div className="row mb-4">
        <div className="col-3">
          <Link to="/">
            <i className="fa-solid fa-chevron-left arrow-left"></i>
          </Link>
        </div>
      </div>
      <div className="row d-flex  justify-content-around mt-4">
        <div className="col-md-6 text-start">
            <h2 className="bigtext text-line">
              Change your Secret{" "}
              <span className="text-color-primary">password</span>
            </h2>
          
        </div>
        <div className="col-md-5">
          {showAlert && (
            <div
              className={`alert ${
                errorMessage ? "alert-danger" : "alert-success"
              } alert-dismissible fade show`}
              role="alert"
            >
              {errorMessage ? errorMessage : "User updated successfully!"}
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShowAlert(false);
                  setErrorMessage("");
                }}
              ></button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label me-md-3">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                style={{ maxWidth: "90%" }}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label me-md-3">
                New Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                style={{ maxWidth: "90%" }}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmpassword" className="form-label me-md-3">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                style={{ maxWidth: "90%" }}
                value={formData.confirmpassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmpassword: e.target.value })
                }
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-round-white  rounded-pill mt-4" >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Resto del código */}
    </div>
  )}
</div>);
};
