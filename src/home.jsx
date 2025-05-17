import React from "react";
import { FaFileAlt, FaSave, FaCopy } from "react-icons/fa";
import "./home.css";
import { RiTwitterXFill } from "react-icons/ri";

const text = `
ok so here’s the thing:

I’ve been trading meme coins for like 6 weeks now started with nothing, still got nothing but bro… I felt like I was close


all I need is like $300 or maybe like $670
enough to get back in the game before the next $PEPE -- drops
I swear I saw one that looked legit this morning


What’s the plan?
find the dumbest coin on solana check if the dev is anonymous (yes = bullish)
buy it  hope for the best tweet "gm" and manifest
(maybe launch my own if this doesn't work out)

Why u should fund me:
I don’t rug
I’ve been rugged, like, a lot — so I know what to avoid (probably)
I got a MetaMask and 2.5 hours of sleep
I believe in memes more than in fiat
I once turned $8 into $13 (then back into $2 but that part’s not important)

What u get:
emotional updates
alpha (maybe)
my eternal gratitude
if I hit 100× I’ll remember you (unless I don’t)`;

let font_option = {
  "font-size": 22,
  "letter-spacing": 1,
  "line-height": 28,
};
const marker = [
  "$",
  "6",
  "7",
  "0",
  "3",
  "8",
  "1",
  "2",
  "4",
  "5",
  "9",
  "P",
  "E",
  ".",
  "×",
];

const modifiedText = (text) => {
  let modifiedHTML = "";
  const baseFontSize = font_option["font-size"];
  const baseLetterSpacing = font_option["letter-spacing"];
  const highlightChance = 0.4;
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char === " ") {
      modifiedHTML += `<span>&nbsp;&nbsp;&nbsp;</span>`;
      continue;
    }
    if (char === "\n") {
      modifiedHTML += `<br />`;
      continue;
    }
    const isMarker = marker.includes(char) ? "#46f3a290" : "transparent";
    let dynamicStyles = `font-size: ${baseFontSize}px; letter-spacing: ${baseLetterSpacing}px; font-style: normal; line-height: ${font_option["line-height"]}px; background-color: ${isMarker};`;
    if (Math.random() < highlightChance) {
      const largerFontSize = baseFontSize + 5;
      const randomLetterSpacing = baseLetterSpacing + 0.5;
      const isItalic = Math.random() > 0.8 ? "italic" : "normal";
      const isBold = Math.random() > 0.8 ? "bold" : "normal";
      dynamicStyles = `font-size: ${largerFontSize}px; letter-spacing: ${randomLetterSpacing}px; font-style: ${isItalic}; line-height: ${font_option["line-height"]}px; font-weight: ${isBold}; background-color: ${isMarker};`;
    }
    modifiedHTML += `<span style="${dynamicStyles}" letter-index="${i}" class="rd5">${char}</span>`;
  }
  return modifiedHTML;
};

export const App = () => {
  const handleClick = (event) => {
    const letterIndex = event.target.getAttribute("letter-index");
    alert(`Letter index: ${letterIndex}`);
  };
  return (
    <div className="w100 df fdc aic app-wrapper">
      <div className="w100 df fdc aic gap-30 py3 links">
        <p>Follow me on Twitter for updates:</p>
        <a
          href="https://twitter.com/your_twitter_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="df aic gap-10 button-53"
        >
          <RiTwitterXFill size={24} /> Follow Me
        </a>
      </div>
      <div className="df fdc white-list">
        <div className="df fdc aic app-header">
          <h1>My Meme Trading Masterplan</h1>
          <p>(totally not a scam, fr)</p>
        </div>
        <div className="df fdc aic app-text">
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: modifiedText(text),
            }}
            onClick={handleClick}
          ></div>
        </div>
      </div>
      <div className="df aic gap-20 app-buttons">
        <button className="button-86">
          View more <FaFileAlt size={18} />
        </button>
        <button className="button-86">
          Save <FaSave size={18} />
        </button>
        <button className="button-86">
          Copy <FaCopy size={18} />
        </button>
      </div>
      <div className="df fdc aic app-footer">
        <p>© 2025 Meme Trading Masterplan</p>
        <p>Disclaimer: This is not financial advice. Trade at your own risk.</p>
      </div>
    </div>
  );
};
