import user from "../../asset/img/avatar.jpg";
import user_1 from "../../asset/img/user_1.jpg";
import user_2 from "../../asset/img/user_2.jpg";
import user_3 from "../../asset/img/user_3.jpg";
import user_4 from "../../asset/img/user_4.jpg";
import user_5 from "../../asset/img/user_5.jpg";
import post from "../../asset/img/post.jpg";

import "./Body.css";

function Body() {
  return (
    <div className="body__follow">
      <div className="body__box">
        <a className="body__box-avatar">
          <img src={user} alt="" className="body__box-img" />
        </a>
        <p className="body__box-name">kyliejenner</p>
      </div>

      <div className="body__getting">
        <span className="body__getting-text">Getting Started</span>
      </div>

      <div className="body__photo">
        <div className="body__photo-icon">
          {/* <!-- <i className="fa-solid fa-camera"></i> --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="body__photo-text">
          <h3 className="body__photo-name">Add Profile Photo</h3>
          <p className="body__photo-description">
            Add a profile photo so your friends know it's you.
          </p>
        </div>

        <button className="body__photo-btn">Add Profile Photo</button>
      </div>

      <div className="body__post">
        <div className="body__post-header">
          <div className="body__post-infor">
            <div className="body__post-header-img">
              <img src={user} alt="" />
            </div>

            <div className="body__post-text">
              <a className="body__post-nickname" href="">
                kyliejenner
              </a>
              <span className="body__post-original">Original Audio</span>
            </div>
          </div>

          <div className="body__post-select">
            <svg
              aria-label="More options"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>

        <div className="body__post-img">
          <img src={post} alt="" />
        </div>

        <div className="body__post-actions">
          <div className="body__post-icons">
            <svg
              aria-label="Like"
              className="like"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
            <svg
              aria-label="Comment"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <svg
              aria-label="Share Post"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>

          <div className="body__post-award">
            <svg
              aria-label="Save"
              className="_ab6-"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>

        <a href="" className="body__post-rate">
          <span>1,781,353 likes</span>
        </a>

        <div className="body__post-description">
          <div className="body__post-description-text">
            <span className="body__post-description-name">
              <a href="" className="body__post-description-name-link">
                kyliejenner
              </a>
              our new #
              <a href="" className="body__post-description-contacts">
                GlossDrip
              </a>
              is selling out!!! i’m wearing “Match My Energy” here which is
              still available now on KylieCosmetics.com 💗 thanks for all the
              love on these new summer ready products
              <a href="" className="body__post-description-about">
                @kyliecosmetics
              </a>
            </span>
          </div>

          <div className="body__post-description-comment">
            <a href="" className="body__post-description-comment-link">
              View all 5,975 comments
            </a>
          </div>

          <div className="body__post-description-state">
            <div className="body__post-description-state-left">
              <a href="" className="body__post-description-state-name">
                yrispalmer
              </a>
              😍
            </div>

            <svg
              aria-label="Like"
              className="_ab6-"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
          </div>

          <div className="body__post-description-time">1 day ago</div>
        </div>

        <div className="body__post--react">
          <form action="POST" className="body__post--react-form">
            <div className="body__post--react-icon">
              <svg
                aria-label="Emoji"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
              </svg>
            </div>

            <textarea
              placeholder="Add a comment..."
              className="body__post--react-comment"
            ></textarea>
            <button className="body__post--react-btn">Post</button>
          </form>
        </div>
      </div>

      {/* <!--Category--> */}
      <div className="body__category">
        <div className="body__category-suggest">
          <span className="body__category-suggest-text">
            Suggestions For You
          </span>
          <a href="" className="body__category-suggest-link">
            See All
          </a>
        </div>

        <ul className="body__category-list">
          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_1} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Khloé Kardashian</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_2} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Kourtneykardash</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_3} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Krisjenner</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_4} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Haileybieber</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <div className="body__category--move__right"></div>
        </ul>
      </div>

      <div className="body__category">
        <div className="body__category-suggest">
          <span className="body__category-suggest-text">
            Suggestions For You
          </span>
          <a href="" className="body__category-suggest-link">
            See All
          </a>
        </div>

        <ul className="body__category-list">
          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_5} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Justinbieber</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_2} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Kourtneykardash</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_3} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Krisjenner</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <li className="body__category-item">
            <div className="body__category-btn--close">
              <span>&times;</span>
            </div>

            <a className="body__category-img">
              <img src={user_1} alt="" />
            </a>

            <div className="body__category-infor">
              <span className="body__category-name">Khloé Kardashian</span>
              <span className="body__category-tick" title="Verified">
                Verified
              </span>
            </div>

            <div className="body__category-original">
              <span>Popular</span>
            </div>

            <div className="body__category-follow">
              <button className="body__category-btn">Follow</button>
            </div>
          </li>

          <div className="body__category--move__right"></div>
        </ul>
      </div>
    </div>
  );
}

export default Body;
