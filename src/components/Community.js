import React from 'react';
import { useRef, useState, useEffect } from 'react';
import CommunityCard from './CommunityCard';

function Community() {

  let image1 = "../picture.png";
  let image2 = "../picture1.png";
  let image3 = "../picture3.png";

  let text1 = {
    handle: "@buzzfeedfood",
    text: "It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good🌮 . Find the recipe from thelink in our bio! 📸 :@taylormillerphoto",
    comments: 60,
    likes: 14.7,
  };

  let text2 = {
    handle: "@love_food",
    text: "Waffle sticks in Copenhagen!\n🇩🇰😍 Milk chocolate with\nsprinkles, dark chocolate with\ncoconut and milk chocolate\nwith peanuts! [📷: @foodwithmichel] #lovefood",
    comments: 789,
    likes: 14.7,
  };

  let text3 = {
    handle: "@buzzfeedfood",
    text: "Getting into long weekend\nmode like 🍤 #pancitpalabok\n(📷 @jeepneynyc)",
    comments: 152,
    likes: 18.2,
  };



  const ref = useRef();
  const onScreen = useOnScreen(ref, "-150px");

  const [loaded, setLoaded] = useState(false);


  // To trigger the animation only once
  useEffect(() => {
  
    if (onScreen && (!loaded)) {
      setLoaded(1);
    } else if (onScreen && loaded === 1) {
      setLoaded(2);
    }

  }, [onScreen])



  return (
    <>
      <div ref={ref} className="container">

        <div className="row topRow">

          <div className="col "></div>

          <div className="col meet">
              <h1>MEET OUR</h1>

              <span></span> 

              <div className="line">
                <h1 id="community">COMMUNITY</h1>
              </div>
              

              <p id="know">KNOW MORE</p>

              <p>
                LOREM IPSUM DOLOR SIT <br/>AMET ERNUT TEMPARTERO <br/>SERTU PER NABORE EN <br/>TORNA ENTALTO
              </p>
          </div>
          

          
          <div className={"col visibleCol" + (onScreen && (loaded === 1) ? " slideUp" : "")}>     {/*slideUp */}

            <img className="detail1" src="../detail02.png" alt="detail01"/>

            <CommunityCard image={image1} /> 
            
          </div>
          

          
          <div ref={ref} className="col visibleCol">

            <img className="detail2" src="../detail01@2x.png" alt="detail02" />

            <CommunityCard text={text1}/>

          </div>
          

        </div>

        
        <div className="row">

          <div className="col visibleCol ">

            <img className="detail3" src="../detail03@2x.png" alt="detail03" />

            <CommunityCard text={text2}/>

          </div>

          <div className="col visibleCol ">
            <CommunityCard image={image3} />
          </div>

          <div className="col "></div>

          <div className="col "></div>

        </div>
        

        
        <div className="row bottomMargin">

          <div className="col center">
            <p id="lorem">
              Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed<br/>do eiusmod tempor incididunt<br/>ut labore et dolore magna<br/>aliqua. Duis aute irure.   
            </p>
          </div>

          <div className="col ">
          </div>

          <div className="col visibleCol ">
            <CommunityCard text={text3}/>
          </div>

          <div className="col visibleCol ">
            <CommunityCard image={image2} />
          </div>

        </div>
        

      </div>
    </>
  );
}

export default Community;




function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);
  return isIntersecting;
}