function Footer() {
    const date = new Date();
  return (
    <div className=" flex flex-col fixed justify-center items-center border-t-2 -mt-32 p-10 text-xs">
        <div>
              Enigma {date.getFullYear()} Created with ❤️ using:
        </div>
    <span className="bg-blue-300 p-1 rounded-lg mt-1"><a href= "https://react.dev">React.js</a></span>
    <span className="p-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-300 rounded-lg mt-1">TailwindCSS</span>
    </div>
  );
}
export default Footer;
