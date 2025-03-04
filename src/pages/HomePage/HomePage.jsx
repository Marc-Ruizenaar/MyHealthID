import React from 'react';
import './HomePage.css';
import { FaUser, FaPlus } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import Header from '../../componants/MyHealthID/Header';
import LeafsOverlay from '../../componants/general/LeafsOverlay';
import ShowAtLogin from '../../componants/homepage/ShowAtLogin';


const HomePage = () => {
  return (
    <>

      <Header />

      <LeafsOverlay>

        <h1 className="homePageTitle">Who Are You Managing Care For?</h1>

        <div className="homePage">

          <div className='userCard'>
            <h2 className="sectionTitle">My Self</h2>

            <div className="cardContainer">
              <div className="card">
                <BsFillPersonFill className="userIcon" />
                <div className="userInfo">
                  <h3 className="userName">Odai Dahi</h3>
                  <p className="userAge">28 Years</p>
                </div>
              </div>
            </div>

            <div className='showAtLoginDesk'>
              <ShowAtLogin />
            </div>

          </div>

          <div className='userCard'>

            <h2 className="sectionTitle">My Child</h2>
            <div className="cardContainer">
              <div className="card">
                <BsFillPersonFill className="userIcon" />
                <div className="userInfo">
                  <h3>Jack Dahi</h3>
                  <p>7 Years</p>
                </div>
              </div>

              <div className="addCard">
                <FaPlus className="plusIcon" />
                <h3 className="addText">Add Child</h3>
              </div>
            </div>

            <p className="legalGuardianText">
              As A Legal Guardian Of A Child Under 13, You Can Manage Healthcare Matters On Their Behalf. When The Child Turns 13, They Will Be Removed From Your List.
            </p>

            <div className='showAtLoginMob'>
              <ShowAtLogin />
            </div>
          </div>
        </div>

      </LeafsOverlay>
    </>
  );
};

export default HomePage;
