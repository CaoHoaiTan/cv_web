
function Contact(){
    return(
<div className="contact">
                  <div className="profile">
                        <div className="avatar">
                            <img className="avatar__image" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/217405872_366463801517268_6686034839735714490_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=gA24h0MVPVIAX-yDIxv&_nc_ht=scontent.fdad2-1.fna&oh=00_AT85z2uOn7LWnjOMUFLv0ndZiWshW7KwiyDKNXFBKfUFYg&oe=6210DAFA"  alt="Avatar"/>
                            <h4 className="avatar__name">Cao Hoài Tấn</h4>   
                        </div>

                        <ul className="profile_list">
                            <li className="profile_item">
                                <i className="far fa-calendar-alt"></i>
                                <span className="birthday">Sep 02,2001</span>
                            </li>
                            <li className="profile_item">
                                <i className="far fa-envelope"></i>
                                <span className="email">caohoaitan@gmail.com</span>
                            </li>
                            <li className="profile_item">
                                <i className="fas fa-mobile-alt"></i>
                                <span className="phone-number">0788563369</span>
                            </li>
                            <li className="profile_item">
                                <i className="fas fa-home"></i>
                                <span className="address">Thu Duc, TP HCM</span>
                            </li>
                        </ul>

                  </div>

                  <div className="contact-network">
                    <a className="github" href="https://github.com/CaoHoaiTan">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/in/caohoaitan/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="facebook" href="https://www.facebook.com/hoaitan029/">
                        <i className="fab fa-facebook"></i>
                    </a>

                  </div>

              </div>
    )
}

export default Contact;