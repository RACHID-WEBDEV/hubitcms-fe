import React from "react";
// import { useCallback } from "react";
import "./Publisher.scss";

const CreatePublisher = () => {
     // const handleDrop = useCallback(
     //      (acceptedFiles) => {
     //           const file = acceptedFiles[0];
     //           if (file) {
     //                setFieldValue("avatarUrl", {
     //                     ...file,
     //                     preview: URL.createObjectURL(file),
     //                });
     //           }
     //      },
     //      [setFieldValue]
     // );
     return (
          <div className="main">
               <div className="titletext">
                    <h1 className="titletext__h1">Create a New Publisher </h1>
                    <p className="titletext__p">
                         Add, edit and manage publishers here.
                    </p>
               </div>
               <div className="formContainer">
                    <div className="formItem item1">
                         <form className="form">
                              <div className="formInput grid-2">
                                   <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                   />
                                   <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                   />
                              </div>
                              <div className="formInput grid-2">
                                   <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Phone"
                                   />
                                   <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Company"
                                   />
                              </div>
                              <div className="formInput grid-2">
                                   <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Address"
                                   />
                                   <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Website Url"
                                   />
                              </div>
                              <div className="formInput grid-2">
                                   <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Site title"
                                   />
                                   <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Description"
                                   />
                              </div>
                              <div className="formInput grid-2">
                                   <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Type "
                                   />

                                   <select>
                                        <option selected disabled>
                                             Status
                                        </option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                        <option>Other</option>
                                   </select>
                              </div>
                              <div className="formbutton">
                                   <button className="btn">
                                        Create Publisher
                                   </button>
                              </div>
                         </form>
                    </div>
                    <div className="formItem item2">
                         <div className="formupload">
                              <div className="css-10ib5jr">
                                   <div className="css-1wpwbv3">
                                        <div className="css-soonpg">
                                             <input
                                                  accept="image/*"
                                                  type="file"
                                                  // file={values.avatarUrl}
                                                  maxSize={3145728}
                                                  // onDrop={handleDrop}
                                                  autoComplete="off"
                                             />
                                             <div className="placeholder css-7zlern">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       xmlnsXlink="http://www.w3.org/1999/xlink"
                                                       aria-hidden="true"
                                                       role="img"
                                                       className="css-v73erd iconify iconify--ic"
                                                       sx="[object Object]"
                                                       width="1em"
                                                       height="1em"
                                                       preserveAspectRatio="xMidYMid meet"
                                                       viewBox="0 0 24 24"
                                                  >
                                                       <path
                                                            d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z"
                                                            fill="currentColor"
                                                       />
                                                       <circle
                                                            cx={13}
                                                            cy={14}
                                                            r={3}
                                                            fill="currentColor"
                                                       />
                                                       <path
                                                            d="M21 6h-3.17l-1.24-1.35A1.99 1.99 0 0 0 15.12 4h-6.4c.17.3.28.63.28 1c0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2c-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"
                                                            fill="currentColor"
                                                       />
                                                  </svg>
                                                  <span className="css-176slt">
                                                       Upload photo
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                                   <span className="MuiTypography-root MuiTypography-caption css-3mdpyg">
                                        Supports *.jpg, *.jpeg, *.png
                                   </span>

                                   <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementStart css-1ahyjy">
                                        <span className="MuiSwitch-root MuiSwitch-sizeMedium css-1ew5r76">
                                             <label className="switch">
                                                  <input
                                                       type="checkbox"
                                                       defaultChecked
                                                  />
                                                  <span className="slider round" />
                                             </label>

                                             <span className="MuiSwitch-track css-n981zc" />
                                        </span>
                                        <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-k36ljx">
                                             <h3 className="MuiTypography-root MuiTypography-subtitle2 css-1fzyuai">
                                                  Publish
                                             </h3>
                                             <p className="MuiTypography-root MuiTypography-body2 css-11r9ii4">
                                                  Disabling this will
                                                  automatically send the user a
                                                  verification email
                                             </p>
                                        </span>
                                   </label>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CreatePublisher;
