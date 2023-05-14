function Footer() {
    const date = new Date();
  return (
    <div className=" flex flex-col  bg-white dark:bg-black w-full  mt-auto justify-center  items-center border-t-2 gap-2  p-10 text-xs mb-2">
        <div> 
              Enigma {date.getFullYear()} Created with ❤️ using:
        </div>
        <div>
          <span className="bg-blue-300 p-1 rounded-lg mt-1 mr-2"><a href= "https://react.dev">React.js</a></span>
    <span className="p-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-300 rounded-lg mt-1">TailwindCSS</span>
        </div>
    
    </div>
  );
}
export default Footer;
