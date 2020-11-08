import React from 'react'
import { FaSignOutAlt, FaHistory, FaUser, FaLock } from "react-icons/fa"
import { auth } from "../../firebase/firebase.utils"
import { ProfileContainer, ProfileSection, ProfileSmall, ProfileLarge, DetailContainer, InitialContainer, ProfileMenu, ProfileItem, ProfileLink, ProfileInner, ProfileInput, FormContainer } from "./ChangePassword.style"


const bottomStyle = {
    minHeight: "100vh",
    height: "100%"
}


const ChangePassword = () => {
    return (
        <ProfileContainer>
            <div className="bottom" style={bottomStyle}>

                <ProfileSection>
                    <ProfileSmall>
                        <DetailContainer>
                            <InitialContainer>
                                <p>OS</p>
                            </InitialContainer>
                            <p>Olawale Shopeyin</p>
                        </DetailContainer>
                        <ProfileMenu>
                            <ProfileItem>
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
                            <ProfileItem style={{ borderLeft: "2px solid red" }}>
                                <FaLock size={25} style={{ fill: "#0e213b" }} />
                                <ProfileLink to="/change-password">
                                    Change Password
                                </ProfileLink>
                            </ProfileItem>
                            <ProfileItem>
                                <FaSignOutAlt size={25} style={{ fill: "#0e213b" }} />
                                <ProfileLink onClick={() => auth.signOut()}>
                                    Logout
                                </ProfileLink>
                            </ProfileItem>
                        </ProfileMenu>
                    </ProfileSmall>
                    <ProfileLarge>
                        <ProfileInner>
                            <h3 style={{ margin: "10px 0" }}>Change Password</h3>
                            <FormContainer action="">


                                <label htmlFor="">Current Password</label>
                                <br />
                                <ProfileInput type="password" name="password" id=""></ProfileInput>
                                <br />
                                <label htmlFor="">New Password</label>
                                <br />
                                <ProfileInput type="password" name="password" id=""></ProfileInput>
                                <br />
                                <label htmlFor="">Confirm New Password</label>
                                <br />
                                <ProfileInput type="password" name="password" id=""></ProfileInput>
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

export default ChangePassword
