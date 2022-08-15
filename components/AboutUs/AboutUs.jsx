import React, { useEffect, Component, useRef } from "react";
import styles from "./AboutUs.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from "react-countup";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ltrwn16",
        "template_uigmfng",
        form.current,
        "N9-yjO28VSgymSKue"
      )
      .then(
        (result) => {
          e.target.reset();
        },
        (error) => {
        }
      );
  };

  return (
    <div className={styles.about}>
      <div data-aos="fade-up" className={styles.photo}></div>
      <div data-aos="fade-up" className={styles.stats}>
        Our team stats
      </div>
      <div data-aos="fade-up" className={styles.despite}>
        Despite well over $1 billion in combined sales, however, the team
        strives to maintain an air of humility and discretion
      </div>

      <div className={styles.counts}>
        <div data-aos="fade-right" className={styles.count}>
          <CountUp
            start={-3635.039}
            end={52000.0}
            duration={21.75}
            separator=" "
            decimals={4}
            decimal=","
            prefix="$ "
            suffix=" -M"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div data-aos="fade-down" className={styles.count}>
          <CountUp
            start={-3835.039}
            end={52000.0}
            duration={21.75}
            separator=" "
            decimals={4}
            decimal=","
            prefix="$ "
            suffix=" -M"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div data-aos="fade-left" className={styles.count}>
          <CountUp
            start={-8399.039}
            end={4850.0}
            duration={21.75}
            separator=" "
            decimals={4}
            decimal=","
            prefix="$ "
            suffix=" -B"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      </div>
      <div className={styles.textCount}>
        <p>Current Listing Volume</p>
        <p>Total Sold 2020 - 2022</p>
        <p>Lifetime Sales Volume</p>
      </div>
      <div data-aos="fade-up" className={styles.header}>
        About our company
      </div>
      <p />
      <span className={styles.textHeader}>
        Utilizing our exceptional experience and knowledge of the luxury
        waterfront markets,we serve an extensive and elite worldwide client
        base.
      </span>
      <div className={styles.textInfo}>
        <div className={styles.firstText}>
          <div className={styles.textP}>
            <span data-aos="fade-up" className={styles.black}>
              {" "}
              Our Mission
            </span>{" "}
            <br />
            With over $2 Billion in sales, Our agency is the industry’s top
            luxury producer with over 27 years of experience in marketing
            Seattles’s most prestigious waterfront properties.
          </div>
          <p className={styles.textP2}>
            <span data-aos="fade-up" className={styles.black}>
              Our Vision
            </span>
            <br />
            Due to our unparalleled results, expertise and dedication, we rank
            amongst the Top 6 agencies in Seattle and our area. She is also and
            is an elite member to Corcoran’s Presidents Council.
          </p>
        </div>
        <div className={styles.secondText}>
          <div className={styles.textP}>
            <span data-aos="fade-up" className={styles.black}>
              Our Values
            </span>
            <br />
            With her years of experience, impressive property portfolio,
            celebrity clientele, and unparalleled knowledge of the market and
            pedigree estates, Simone estimable business is sophisticated and
            renowned.
          </div>
          <div className={styles.textP2}>
            <span data-aos="fade-up" className={styles.black}>
              Our Resources
            </span>
            <br />
            With her years of experience, impressive property portfolio,
            celebrity clientele, and unparalleled knowledge of the market and
            pedigree estates, Simone estimable business is sophisticated and
            renowned.
          </div>
        </div>
      </div>
      <p />
      <br />
      <div>
        <Slider {...settings}>
          <div data-aos="fade-up" className={styles.forSave}>
            <img
              src="https://www.vanulaw.com/wp-content/uploads/2017/10/house-03.jpg"
              alt="photo"
            />
          </div>
          <div className={styles.forSave}>
            <img
              src="https://assets-listings.rew.ca/crea_ddf/omreb/10259691/20220724154809/01_10259691_1.jpg"
              alt="photo"
            />
          </div>
          <div className={styles.forSave}>
            <img
              src="https://assets-listings.rew.ca/crea_ddf/omreb/10256232/20220711222126/01_10256232_1.jpg"
              alt="photo"
            />
          </div>
          <div className={styles.forSave}>
            <img
              src="https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2020/12/27110151/capi_3a371aaa59189d8ab27572bec9249862_cef87e1ec5289e3a364680284a896b06.jpeg"
              alt="photo"
            />
          </div>
          <div className={styles.forSave}>
            <img
              src="https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2021/12/29060210/capi_6a1d5f0dd92b174ccdc66bc1fd59dcd4_4f3b53861bb1bf71353d5a2358392744.jpeg"
              alt="photo"
            />
          </div>
        </Slider>
        <p data-aos="fade-up" className={styles.best}>
          Our best employees
        </p>
        <div data-aos="fade-down" className={styles.pBest}>
          If you want the best care possible for your real estate needs, our
          certified professionals are here to help
        </div>
        <div data-aos="fade-up" className={styles.pBest}>
          Testimonials and let know whatpossible for your real estate needs, our
          to help
        </div>
        <div className={styles.body}>
          <Link href="/agents/62f3aa99e67919f596b7b9ec">
            <div data-aos="fade-right" className={styles.carlos}>
              <img
                className={styles.logoCarlos}
                src="https://lasvegas.wpresidence.net/wp-content/uploads/2014/05/person-21-500x328.jpg"
                alt="photo"
              />
              <div className={styles.colorBlack}>Carlos Dobarro</div>
              <p />
              <div className={styles.infoAvatar}>
                Whether it is working with a first time homebuyer, a luxury home
                listing or a seasoned I'm gay...
              </div>
            </div>
          </Link>
          <Link href="/agents/62f3a975e67919f596b7b9e8">
            <div data-aos="fade-up" className={styles.carlos}>
              <img
                className={styles.logoCarlos}
                src="https://lasvegas.wpresidence.net/wp-content/uploads/2014/05/person3-27-500x328.jpg"
                alt="photo"
              />
              <div className={styles.colorBlack}>Alessandra Rosales</div>
              <p />
              <div className={styles.infoAvatar}>
                Alessandra Tortella’s knowledge, honesty, integrity, and
                fairness have been evident throug ...
              </div>
            </div>
          </Link>
          <Link href="/agents/62f3a738e67919f596b7b9dc">
            <div data-aos="fade-left" className={styles.carlos}>
              <div className={styles.ava}>
                <img
                  className={styles.logoCarlos}
                  src="https://lasvegas.wpresidence.net/wp-content/uploads/2014/05/person8-1-1-500x328.png"
                  alt="photo"
                />
              </div>
              <div className={styles.colorBlack}>Elena Pernía</div>
              <p />
              <div className={styles.infoAvatar}>
                As a fourth generation realtor, I was raised in a family where
                real estate was the primary ...
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.testimonials}>
        <h1 data-aos="fade-left" className={styles.headTest}>
          Testimonials
        </h1>
        <div data-aos="fade-right" className={styles.infoTest}>
          Publish the best of your client testimonials and let the world know
          what a great agent or real estate agency you are. Testimonials build
          trust
        </div>
        <p />

        <div data-aos="fade-left" className={styles.cards}>
          <Slider {...settings}>
            <div className={styles.oneCard}>
              <img
                className={styles.comment}
                src="https://n1s2.starhit.ru/e6/90/34/e69034a72e4867ca36cef22d089035e2/435x460_0_3d34fae80a51250dc2d5043798546e32@567x600_0xac120003_3634251971641365805.jpg"
                alt="photo"
              />
              <div className={styles.nick}>Hoxcho__95--</div>
              <p className={styles.namer}>
                I reviewed and purchased a number of different WordPress Themes
                before settling on Wp Residence.
              </p>
            </div>
            <div className={styles.oneCard}>
              <img
                className={styles.comment}
                src="http://sun9-66.userapi.com/s/v1/ig2/oouSY-hDxATgMUtsuU-52c4GrQPkHTkxdpLMRiuYeWiY9dyRfrFe75NnjgUZpUlnLo4RqbbokdT1so4t2Ae9Din8.jpg?size=400x400&quality=96&crop=280,0,720,720&ava=1"
                alt="photo"
              />
              <div className={styles.nick}>Bisick_Killer001</div>
              <p className={styles.namer}>
                I reviewed and purchased a number of different WordPress Themes
                before settling on Wp Residence.
              </p>
            </div>
            <div className={styles.oneCard}>
              <img
                className={styles.comment}
                src="https://www.meme-arsenal.com/memes/293a905ee71dfbd6f0f53b8e43e8d2cb.jpg"
                alt="photo"
              />
              <div className={styles.nick}>Adlan____Grozny95</div>
              <p className={styles.namer}>
                I reviewed and purchased a number of different WordPress Themes
                before settling on Wp Residence.
              </p>
            </div>
            <div className={styles.oneCard}>
              <img
                className={styles.comment}
                src="https://www.meme-arsenal.com/memes/55b2cf2957179e6806f00a21a8b8f240.jpg"
                alt="photo"
              />
              <div className={styles.nick}>Gigachad-05</div>
              <p className={styles.namer}>
                I reviewed and purchased a number of different WordPress Themes
                before settling on Wp Residence.
              </p>
            </div>
            <div className={styles.oneCard}>
              <img
                className={styles.comment}
                src="https://i.pinimg.com/280x280_RS/fb/73/e7/fb73e738f10e4ab46e8779a710bc703b.jpg"
                alt="photo"
              />
              <div className={styles.nick}>Gladiator---007</div>
              <p className={styles.namer}>
                I reviewed and purchased a number of different WordPress Themes
                before settling on Wp Residence.
              </p>
            </div>
            <div className={styles.oneCard}>
              <img
                className={styles.comment}
                src="https://media.2x2tv.ru/content/images/2021/04/MOSHED-2021-4-28-15-50-34.jpg"
                alt="photo"
              />
              <div className={styles.nick}>Xokage-_-0095</div>
              <p className={styles.namer}>
                I reviewed and purchased a number of different WordPress Themes
                before settling on Wp Residence.
              </p>
            </div>
          </Slider>
        </div>
      </div>

      <div className={styles.question}>
        <div data-aos="fade-down" className={styles.frequently}>
          Frequently Asked Questions
        </div>
        <p />
        <div data-aos="fade-right" className={styles.infoFre}>
          You can use this guide to familiarize yourself with rules, laws and
          other important information relating to your property.
        </div>
        <div className={styles.blockInfo}>
          <div className={styles.wrapper}>
            <div clasName={styles.half}>
              <div className={styles.tab}>
                <input id="tab-one" type="checkbox" name="tabs" />
                <label data-aos="fade-up" for="tab-one">
                  Why is it considered necessary to register for Sale?
                </label>
                <div className={styles.tabContent}>
                  <p className={styles.h1}>
                    The Registration Act, 1908, the Transfer of Property Act,
                    1882 and the Real Estate (Regulation and Development) Act,
                    2016 mandates the registration of an agreement for sale of
                    an immovable property. By registering the agreement for sale
                    of an immovable property, it becomes a permanent public
                    record. Further, a person is considered as the legal owner
                    of an immovable property only after he gets such property
                    registered in his name.
                  </p>
                </div>
              </div>
              <div className={styles.tab}>
                <input id="tab-two" type="checkbox" name="tabs" />
                <label data-aos="fade-up" for="tab-two">
                  What are the documents a buyer would need from me?
                </label>
                <div className={styles.tabContent}>
                  <p>
                    You can use this guide to familiarize yourself with rules,
                    laws and other important information relating to your
                    property.
                  </p>
                </div>
              </div>
              <div className={styles.tab}>
                <input id="tab-three" type="checkbox" name="tabs" />
                <label data-aos="fade-up" for="tab-three">
                  How soon would I receive a call from you after writing?
                </label>
                <div className={styles.tabContent}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.getPlan}>
        <div className={styles.imgDiv}>
          <img
            data-aos="fade-right"
            className={styles.imgSun}
            src="https://mota.ru/upload/wallpapers/source/2012/07/30/15/00/31887/XIQ4VDvJ5Z.jpg"
            alt="photo"
          />
        </div>
        <div data-aos="fade-left" className={styles.getInfo}>
          Get in touch with us to plan your next transaction
          <p className={styles.our}>
            Our experts and developers would love to contribute their expertise
            and insights and ...help you today.
          </p>
          <div className={styles.sentMail}>
            <div className={styles.email}>
              <div className={styles.center}>
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                  <label className={styles.textInput}>Name</label>
                  <input type="text" name="user_name" maxlength="20" />
                  <br />
                  <label className={styles.textInput}>Email</label>
                  <input type="email" name="user_email" maxlength="20" />
                  <br />

                  <label className={styles.textInput}>Message</label>
                  <textarea className={styles.form} name="message" />
                  <button className={styles.button} type="submit" value="Send">
                    sent Company
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
