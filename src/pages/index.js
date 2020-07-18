import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
              <a href="" className="button primary">
                Download CV
              </a>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            About Me
          </h2>
          <p>
          Hello! I am Raghav Saboo and I am a third year undergraduate student at IIIT Hyderabad.
            <br />
            Since the beginning, I have been a coding enthusiast. Moreover, I love doing competitive coding. I have given various coding round and have achieved good ranks in some of them.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Software Developer Intern 
            </h2>
            <h4>
              Milkie way Inc.
              </h4>
          <p>

          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
        <h2>
            Software Developer Intern 
            </h2>
            <h4>
              Mayukh.ai
              </h4>
          <p>

          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
        </header>
        <ul className="features">
          <li className="icon solid fa-laptop">
            <h3>Web Application in MERN stack</h3>
            <p>
            It was an application where the seller could host,sell and dispatch products as soon as it had received enough orders
            </p>
            <p>
            Buyers could buy stuff on this app and get proper notification when the product they have ordered had been dispatched
            </p>

          </li>
          <li className="icon solid fa-code">
            <h3>Linux Shell</h3>
            <p>
            A Bash like shell in C using Linux system calls, includes user-defined commands, piping, redirection and signal handling.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section id="four" className="wrapper style6 special">
        <h2>
            Education
          </h2>
    <div class="timeline">

  <div class="container left">
    <div class="content1">
      <h3>2018 - till date</h3>
      <p>International Institute of Informationa Technology , Hyderabad</p>
    </div>
  </div>
  <div class="container right">
    <div class="content1">
      <h3>2008-2018</h3>
      <p>Maheshwari Public School , Jaipur</p>
    </div>
  </div>
</div>
</section>


  </Layout>
);

export default IndexPage;
