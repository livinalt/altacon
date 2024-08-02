import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between bg-[#093262] text-white h-100vh p-12">
      <div className="">
        <h3 className="text-xl">Contact</h3>
        <p>Have ideas to you want to collaborate on? </p>
        <button className="px-10 py-2 border rounded-3xl outline-blue-600">
          Lets Connect!
        </button>
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl">Links</h3>
        <div className="flex text-sm gap-2 flex-wrap">
          <a href="">About</a>
          <a href="">Solutions</a>
          <a href="">Academy</a>
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
