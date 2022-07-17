import "./Sidebar.css";
import user_1 from "../../asset/img/user_1.jpg";
import user_2 from "../../asset/img/user_2.jpg";
import user_3 from "../../asset/img/user_3.jpg";
import user_4 from "../../asset/img/user_4.jpg";
import user_5 from "../../asset/img/user_5.jpg";

function Sidebar() {
  return (
    <div className="body__infors">
      <div className="body__infors-myuser">
        <div className="body__infors-left">
          <div className="body__infors-avatar">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="body__infors-text">
            <h5 className="body__infors-nickname">luandinh2003</h5>
            <p className="body__infors-name">Luận Đinh</p>
          </div>
        </div>
        <a href="" className="body__infors-link">
          Switch
        </a>
      </div>

      <div className="body__infors-suggest">
        <span className="body__infors-suggest-text">Suggestions For You</span>
        <a href="" className="body__infors-suggest-link">
          See All
        </a>
      </div>

      <ul className="body__users-list">
        <li className="body__user-item">
          <div className="body__users-left">
            <div className="body__users-avatar">
              <img src={user_1} alt="" className="body__users-img" />
            </div>
            <div className="body__users-text">
              <h5 className="body__users-nickname">khloekardashian</h5>
              <p className="body__users-name">popular</p>
            </div>
          </div>
          <a href="" className="body__users-link">
            Follow
          </a>
        </li>
        <li className="body__user-item">
          <div className="body__users-left">
            <div className="body__users-avatar">
              <img src={user_2} alt="" className="body__users-img" />
            </div>
            <div className="body__users-text">
              <h5 className="body__users-nickname">kourtneykardash</h5>
              <p className="body__users-name">popular</p>
            </div>
          </div>
          <a href="" className="body__users-link">
            Follow
          </a>
        </li>
        <li className="body__user-item">
          <div className="body__users-left">
            <div className="body__users-avatar">
              <img src={user_3} alt="" className="body__users-img" />
            </div>
            <div className="body__users-text">
              <h5 className="body__users-nickname">krisjenner</h5>
              <p className="body__users-name">popular</p>
            </div>
          </div>
          <a href="" className="body__users-link">
            Follow
          </a>
        </li>
        <li className="body__user-item">
          <div className="body__users-left">
            <div className="body__users-avatar">
              <img src={user_4} alt="" className="body__users-img" />
            </div>
            <div className="body__users-text">
              <h5 className="body__users-nickname">haileybieber</h5>
              <p className="body__users-name">popular</p>
            </div>
          </div>
          <a href="" className="body__users-link">
            Follow
          </a>
        </li>

        <li className="body__user-item">
          <div className="body__users-left">
            <div className="body__users-avatar">
              <img src={user_5} alt="" className="body__users-img" />
            </div>
            <div className="body__users-text">
              <h5 className="body__users-nickname">justinbieber</h5>
              <p className="body__users-name">popular</p>
            </div>
          </div>
          <a href="" className="body__users-link">
            Follow
          </a>
        </li>
      </ul>

      <ul className="body__contact-list">
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            About
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Help
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Press
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Api
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Jobs
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Privacy
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Terms
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Locations
          </a>
        </li>
        <li className="body__contact-item">
          <a href="" className="body__contact-link">
            Language
          </a>
        </li>
      </ul>

      <p className="body__original">© 2022 INSTAGRAM FROM META</p>
    </div>
  );
}

export default Sidebar;
