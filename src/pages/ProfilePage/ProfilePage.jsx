import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { FaSignOutAlt, FaHistory, FaUser, FaLock } from "react-icons/fa"
import { ProfileContainer, ProfileSection, ProfileSmall, ProfileLarge, DetailContainer, InitialContainer, ProfileMenu, ProfileItem, ProfileLink, ProfileInner, ProfileInput, FormContainer } from "./ProfilePage.style"
import { auth } from "../../firebase/firebase.utils"
import { Link } from "react-router-dom"

const bottomStyle = {
    minHeight: "100vh",
    height: "100%"
}


const ProfilePage = ({ currentUser }) => {
    return (
        <ProfileContainer>
            <div className="bottom" style={bottomStyle}>

                <ProfileSection>
                    <ProfileSmall>
                        <DetailContainer>
                            <InitialContainer>
                                <p>OS</p>
                            </InitialContainer>
                            <p>{`${currentUser.firstName} ${currentUser.lastName} `}</p>
                        </DetailContainer>
                        <ProfileMenu>
                            <ProfileItem style={{ borderLeft: "2px solid red" }}>
                                <FaUser size={25} style={{ fill: "#0e213b" }} />
                                <ProfileLink to="/profile">
                                    Personal Details
                                </ProfileLink>
                            </ProfileItem>
                            <ProfileItem>
                                <FaHistory size={25} style={{ fill: "#0e213b" }} />
                                <ProfileLink>
                                    Orders
                                </ProfileLink>
                            </ProfileItem>
                            <ProfileItem>
                                <FaLock size={25} style={{ fill: "#0e213b" }} />
                                <ProfileLink to="/change-password">
                                    Change Password
                                </ProfileLink>
                            </ProfileItem>
                            <ProfileItem>
                                <FaSignOutAlt size={25} style={{ fill: "#0e213b" }} />
                                <ProfileLink>
                                    <Link onClick={() => auth.signOut()}>Logout</Link>
                                </ProfileLink>
                            </ProfileItem>
                        </ProfileMenu>
                    </ProfileSmall>
                    <ProfileLarge>
                        <ProfileInner>
                            <h3 style={{ margin: "10px 0" }}>Personal Details</h3>
                            <FormContainer action="">

                                <label htmlFor="">First Name</label>
                                <br />
                                <ProfileInput type="text" name="text" id="" placeholder={`${currentUser.firstName}`}></ProfileInput>
                                <br />
                                <br />
                                <label htmlFor="">Last Name</label>
                                <br />
                                <ProfileInput type="text" name="text" id="" placeholder={`${currentUser.lastName}`}></ProfileInput>
                                <br />
                                <br />
                                <label htmlFor="">Email</label>
                                <br />
                                <ProfileInput type="email" name="email" id="" placeholder={`${currentUser.email}`} disabled></ProfileInput>
                                <br />
                                <br />
                                <label htmlFor="">Phone Number</label>
                                <br />
                                <ProfileInput type="number" name="number" id="" placeholder={`${currentUser.phoneNumber}`} disabled></ProfileInput>
                                <br />
                                <br />
                                <input type="submit" value="Save Changes" style={{
                                    margin: "0 auto", display: "block", width: "100%",
                                    height: "40px", backgroundColor: "red", color: "#fff", outline: "none", border: "none", cursor: "pointer"
                                }} />
                            </FormContainer>
                        </ProfileInner>
                    </ProfileLarge>
                </ProfileSection>

            </div>
        </ProfileContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});


export default connect(mapStateToProps)(ProfilePage)
