import { useState } from "react";
import { copyTextToClipboard } from "../utils/HandleCopie";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

  function SareBox({ textToShare }:{ textToShare:any }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const URL = "https://enigma.io"
  const msg = `${textToShare}\n${URL}`
  const isCopied = () => {
    copyTextToClipboard(msg)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className="w-32 h-10 flex justify-between items-center mt-1 ">
      <TwitterShareButton url={msg}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      {
        /*
      <FacebookShareButton url={msg}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      */
      }
      <WhatsappShareButton url={msg}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>

      <div className="relative flex items-center">
        <span
          className={
            show
              ? "absolute translate-x-6 flex items-center"
              : "absolute invisible"
          }
        >
          <div className="h-0 w-0 border-x-8 border-x-transparent rotate-[270deg] border-b-[16px] border-b-slate-200 dark:border-b-slate-700"></div>
          <span className="bg-slate-200 dark:bg-slate-700 p-2 rounded-md text-xs font-thin w-20 shadow-lg">
            {copied ? "Copied!" : "Copie stats"}
          </span>
        </span>
        <button
          onClick={isCopied}
          disabled={copied}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
export default SareBox;
