import { useState } from "react";
import { axiosClient } from "../../config/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import './signUpForm.css';

export const SignUpForm = () => {

  const [ data, setData ] = useState({
    name: '',
    lastname: '',
    email: '',
    password: ''
  });

  // Alert
  const signUpSwal = withReactContent(Swal.mixin({
    customClass: {
      confirmButton: 'btn swal-btn'
    },
    buttonsStyling: false
  }));

  // When the user is filling the form
  const onChangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  // When the user submits the form
  const onSubmitData = (event) => {
    event.preventDefault();
    signUpUser(data);
  }

  // Function to sign a user up
  const signUpUser = async (dataForm) => {

    try {
      const response = await axiosClient.post('/users', dataForm);
      console.log(response);
      signUpSwal.fire({
        icon: 'success',
        titleText: `${response.data.message}`
      }).then((result) => {
        // When user clicks on "ok", redirect to log in page
        if (result.isConfirmed) {
          navigate('/login');
        }
      });

    } catch (error) {
      signUpSwal.fire({
        icon: 'error',
        titleText: `${error.response.data.message}`
      });
      console.error(error);
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">

          <h2 className="text-center mb-3">Registrarse</h2>

          <div className="col d-flex justify-content-center align-items-center">

            <div className="signup-form-container">
              <form className="mb-5 justify-content-center" onSubmit={(e) => { onSubmitData(e) }}>

                <div>
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div>
                  <label htmlFor="lastname" className="form-label">Apellidos</label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    className="form-control"
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="nombre@ejemplo.com"
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div>
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="container d-flex justify-content-center mt-4">
                  <div className="row w-100">
                    <button className="custom-btn fs-5" type="submit">Crear cuenta</button>
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
