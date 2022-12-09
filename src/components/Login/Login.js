import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../App";
import "./Login.css"

const Login = () => {
  // const user = 'test@gmail.com';
  // const password = 123456;
  const {setIsLogin} = useContext(mainContext);

  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const submitForm = (e) =>{
    e.preventDefault();
    // console.log("user",e.target.username.value);
    setUser(e.target.username.value)
    setPassword(e.target.password.value)
  }

  useEffect(() =>{

    // console.log(user,password);
    if(user === 'test@gmail.com' && password === '123456'){
    // console.log(user,password);
      setIsLogin(true);
    }

  },[user,password])

  return (
    <div>
      <main id="" class="">
        <section class="  ">
          <div class="">
            <section class="   ">
              <div class="">
                <div class=" ">
                  {/* <div class="d-flex justify-content-center py-4">
                    <a href=" " class="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <span class="d-none d-lg-block">My House</span>
                    </a>
                  </div>

                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p class="text-center small">
                          Enter your username & password to login
                        </p>
                      </div>

                      <form class="row g-3 needs-validation" onSubmit={submitForm} novalidate>
                        <div class="col-12">
                          <div class="input-group has-validation">
                            <span
                              class="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span>
                            <input
                              type="text"
                              name="username"
                              placeholder="Email"
                              class="form-control"
                              id="yourUsername"
                              required
                            />
                            <div class="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            class="form-control"
                            id="yourPassword"
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                     
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">
                            Login
                          </button>
                        </div>
                        <div class="col-md-6">
                          <p class="small mb-0">
                            Don't have account?{" "}
                            <a href="pages-register.html">Create an account</a>
                          </p>
                        </div>
                        <div class="col-md-6">
                          <p class="small mb-0">
                            {" "}
                            <a href="pages-register.html">Forget Password</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div> */}

<div class="wrapper">
        <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            My House
        </div>
        <form class="p-3 mt-3 needs-validation" onSubmit={submitForm} novalidate>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text"   
                 name="username"
                 placeholder="Email"
                 class="form-control"
                 id="yourUsername"
                 required
                
                />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>








                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
