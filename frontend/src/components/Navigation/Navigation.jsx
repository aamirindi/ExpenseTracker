import avatar from "../../img/aamir.jpg";
import styled from "styled-components";
import { menuItems } from "../../utils/MenuItems";
import { signout } from "../../utils/Icons";

const Navigation = ({ active, setActive }) => {
  return (
    <NavStyled>
      <div className="user-container">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Mike</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>{signout} Sign Out</li>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: var(--bg-color);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-container {
    height: 100px;
    display: flex;
    align-content: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background-color: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: var(--primart-color4);
    }
    p {
      color: var(--primart-color2);
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: var(--primart-color2);
      padding-left: 1rem;
      position: relative;
      i {
        color: var(--primart-color2);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
    .active {
      color: var(--primart-color4);
      i {
        color: var(--primart-color4);
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: var(--primary-color);
        border-radius: 0 10px 10px 0;
      }
    }
  }
`;

export default Navigation;
