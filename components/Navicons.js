import React, { Component } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

class NavIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com"
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://www.twitter.com"
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
        <style jsx>
          {`
            .icon {
              font-size: 1.3rem;
              cursor: pointer;
            }

            .facebook-icon {
              color: #fff;
            }
            .twitter-icon {
              color: #fff;
            }
            .instagram-icon {
              color: #fff;
            }

            .icon:hover {
              color: yellow;
            }
            display: flex;
            width: 10rem;
            justify-content: space-around;
          `}
        </style>
      </div>
    );
  }
}

export default NavIcons;
