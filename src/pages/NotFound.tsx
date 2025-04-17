import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import SplitType from "split-type";
import "../styles/notfound.css";

const NotFound = () => {
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const handleRef = useRef<HTMLSpanElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const baseText = "404, page not found.";

  const playAnimation = () => {
    if (!pRef.current || !handleRef.current) return;

    // Split the text into chars
    /*const split = */new SplitType(pRef.current, {
      types: "chars",
      tagName: "span",
    });

    const chars = document.querySelectorAll(".char");
    if (!chars.length || !handleRef.current) return;

    const charStagger = 0.05;

    const tl = gsap.timeline();

    // 초기 세팅
    tl.set(chars, { opacity: 0 });
    tl.set(handleRef.current, { x: 0, autoAlpha: 1 });

    // 커서 위치 및 타자 애니메이션
    chars.forEach((char, i) => {
      const charElement = char as HTMLElement;
      const xPos = charElement.offsetLeft + charElement.offsetWidth;
      const time = i * charStagger;

      // 타자 느낌 글자 등장
      tl.to(
        char,
        {
          opacity: 1,
          scale: 1.05,
          y: -1,
          ease: "steps(1)",
          duration: 0.03,
        },
        time
      );

      // 커서 이동
      tl.to(
        handleRef.current,
        {
          x: xPos,
          ease: "steps(1)",
          duration: 0.03,
        },
        time
      );
    });

    // 마지막 커서 깜빡임
    const blinkStart = chars.length * charStagger + 0.3;
    tl.to(
      handleRef.current,
      {
        autoAlpha: 0,
        repeat: 5,
        yoyo: true,
        duration: 0.4,
      },
      blinkStart
    );

    tlRef.current = tl;
  };

  useEffect(() => {
    playAnimation();

    const interval = setInterval(() => {
      if (tlRef.current) tlRef.current.kill();
      if (pRef.current) pRef.current.innerHTML = baseText;
      playAnimation();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-inner">
        <p ref={pRef}>{baseText}</p>
        <span className="handle" ref={handleRef}></span>
        <button className="home-button" onClick={() => navigate("/")}>
          <span>홈으로 이동</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
