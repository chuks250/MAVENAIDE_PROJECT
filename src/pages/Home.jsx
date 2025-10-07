import { EyeIcon, SearchIcon } from "lucide-react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ArrowRight } from "lucide-react";
import Button from "../components/r.components/Button";
import { FaChevronDown } from "react-icons/fa6";

const Home = () => {
  return (
    // header start
    <div className="grid text-center bg-[#F3F5F4] overscroll-auto ">
      <div className="flex justify-between items-center p-10 pb-0">
        <div className="grid w-[500px] h-[200px] font-bricolageGrotesque">
          <h1 className="capitalize font-bold text-5xl text-left">
            learn. work. earn
          </h1>
          <h2 className="capitalize font-medium text-2xl text-left pt-3">
            become a certified virtual assistant
          </h2>
          <p className=" font-medium text-xl text-left pt-3 ">
            Master admin support, client management, AI tools & more all at your
            pace, on any device.
          </p>
          <div className="flex gap-2 pt-4">
            <Button
              btnText="browse courses"
              btnStyle="bg-[#BCCECD] rounded-2xl text-sm text-center w-[160px] capitalize h-[50px] px-5 py-3 cursor-pointer border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition-all duration-300"
            />
            <Button
              btnText="get certified"
              btnStyle="bg-[#BCCECD] rounded-2xl text-sm text-center w-[140px] capitalize h-[50px] px-5 py-3 cursor-pointer border-2 border-black hover:bg-red-600 hover:transition-all hover:text-white hover:border-white transition-all duration-300"
            />
          </div>
        </div>
        <div className=" grid place-items-center">
          <div className="flex justify-self-center w-[450px] h-[450px] bg-red-600 rounded-full" />
          <div className="flex items-center justify-center -mt-[500px]">
            <img
              className="w-[550px] h-[550px] object-cover"
              src="/ladyinsuit.png"
              alt="Lady in suit"
            />
          </div>
        </div>
      </div>
      {/* virtual_assistance_course_start */}
      <div className="grid items-center font-bricolageGrotesque bg-[#FAFCFC] pt-16">
        <div className="flex items-center justify-center space-x-2 text-lg pb-4  ">
          <p className="w-4 h-4 border-4 bg-[#0A4380] border-[#FFC8BC] rounded-full" />
          <p className="capitalize text-[16px] font-medium">
            the #1 virtual assistant courses
          </p>
        </div>
        <div className="grid">
          <p className="text-5xl font-bold pb-4">Start Learning Today.</p>
          <p className="capitalize text-[15px] font-normal">
            unlock new skills, elevate your career and achieve more
          </p>
        </div>
        <div className="grid w-[1200px] justify-self-center">
          <div className="flex items-center justify-center gap-5 pt-10 font-bricolageGrotesque">
            {/* start */}
            <div className="w-[130px]">
              <Button
                btnText="all courses"
                btnStyle="capitalize py-3 px-3 rounded-full border-2 hover:text-white hover:bg-[#495050] text-black text-[16px]  font-bold cursor-pointer transition-all duration-300"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="w-[200px]">
              <Button
                btnText="project management"
                btnStyle="flex justify-center capitalize py-3 px-3 text-center rounded-full border-2 hover:text-white hover:bg-[#495050] text-black text-[16px] font-bold cursor-pointer transition-all duration-300"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="w-[220px]">
              <Button
                btnText="administrative support"
                btnStyle="flex justify-center capitalize py-3 px-3 text-center rounded-full border-2 hover:text-white hover:bg-[#495050] text-black text-[16px] font-bold cursor-pointer transition-all duration-300"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="w-[200px]">
              <Button
                btnText="customer service"
                btnStyle="flex justify-center capitalize py-3 px-3 text-center rounded-full border-2 hover:text-white hover:bg-[#495050] text-black text-[16px] font-bold cursor-pointer transition-all duration-300"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="w-[220px]">
              <Button
                btnText="administrative support"
                btnStyle="flex justify-center capitalize py-3 px-3 text-center rounded-full border-2 hover:text-white hover:bg-[#495050] text-black text-[16px] font-bold cursor-pointer"
              />
            </div>
            {/* end */}
          </div>
          <div className="flex justify-center gap-x-5">
            {/* start */}
            <div className="grid">
              <p className="capitalize text-left pt-10 pb-5 text-[#14121999] font-medium text-[20px] cursor-pointer">
                levels
              </p>
              <p className="flex justify-center text-left capitalize py-3 px-10 rounded-full border-2 text-black text-[16px] gap-20 font-bold cursor-pointer">
                beginner <FaChevronDown />
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="grid">
              <p className="capitalize text-left pt-10 pb-5 text-[#14121999] font-medium text-[20px] cursor-pointer">
                duration
              </p>
              <p className="flex justify-center text-left capitalize py-3 px-10 rounded-full border-2 text-black text-[16px] gap-20 font-bold cursor-pointer">
                short <FaChevronDown />
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="grid">
              <p className="capitalize text-left pt-10 pb-5 text-[#14121999] font-medium text-[20px] cursor-pointer">
                pricing
              </p>
              <p className="flex justify-center text-left capitalize py-3 px-10 rounded-full border-2 text-black text-[16px] gap-20 font-bold cursor-pointer">
                free <FaChevronDown />
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="grid mx-20">
              <p className="capitalize text-left pt-10 pb-5 text-[#14121999] font-medium text-[20px] cursor-pointer">
                search
              </p>
              <p className="flex justify-center text-left capitalize py-3 px-10 gap-4 rounded-full border-2 text-black text-[16px] font-bold cursor-pointer">
                <SearchIcon /> all courses
              </p>
            </div>
            {/* end */}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 mt-32 mb-20 p-5">
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[500px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl mb-10">
            <img
              className="border lg:w-[350px] lg:h-[256px] rounded-2xl object-cover"
              src="./virtual_assistance_course_img1.jpeg"
              alt="smiling lady typing on the system"
            />
            <div className="text-left p-2">
              <h1 className="capitalize text-lg font-semibold ">
                administrative support
              </h1>
              <p className="text-[14px] font-normal pt-2">
                Learn how to manage office operations, enhance communication,
                organise schedules and handle documentation.
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2 pl-3">
                <img
                  className="lg:w-[40px] lg:h-[40px] border rounded-full object-fill"
                  src="./virtual_assistance_course_img4.jpeg"
                  alt="lady sitting on the chair"
                />
                <p className="font-semibold text-[14px]">Angela Moss</p>
              </div>
              <div className="flex items-center space-x-3 pr-5">
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <EyeIcon className="w-[16px] h-[16px]" />
                  2.4k
                </p>
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <AiOutlineClockCircle className="w-[14px] h-[14px]" />
                  15.56
                </p>
              </div>
            </div>
            <Button
              btnText="start learning"
              btnStyle={
                "capitalize rounded-xl px-5 py-3 cursor-pointer border-2 border-black hover:bg-[#D1E5E4] hover:border-[#D1E5E4]  transition-all duration-300"
              }
              btnFunc={() => navigate("/log-in")}
            />
          </div>
          {/* end */}
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[500px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl mb-10">
            <img
              className="border lg:w-[350px] lg:h-[256px] rounded-2xl object-cover"
              src="./virtual_assistance_course_img2.jpeg"
              alt="Lady typing on the system smiling"
            />
            <div className="text-left p-2">
              <h1 className="capitalize text-lg font-semibold ">
                product management
              </h1>
              <p className="text-[14px] font-normal pt-2">
                It covers the project lifecycle, stakeholder management, risk
                assessment, budgeting, scheduling, and execution.
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2 pl-3">
                <img
                  className="lg:w-[40px] lg:h-[40px] border rounded-full object-fill"
                  src="./virtual_assistance_course_img5.jpeg"
                  alt="lady sitting on the chair"
                />
                <p className="font-semibold text-[14px]">Steven Wise</p>
              </div>
              <div className="flex items-center space-x-3 pr-5">
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <EyeIcon className="w-[16px] h-[16px]" />
                  5.6k
                </p>
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <AiOutlineClockCircle className="w-[14px] h-[14px]" />
                  21.32
                </p>
              </div>
            </div>
            <Button
              btnText={"start learning"}
              btnStyle={
                "capitalize rounded-xl px-5 py-3 cursor-pointer border-2 border-black hover:bg-[#D1E5E4] hover:border-[#D1E5E4] transition-all duration-300"
              }
              btnFunc={() => navigate("/log-in")}
            />
          </div>
          {/* end */}
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[500px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl mb-10">
            <img
              className="border lg:w-[350px] lg:h-[256px] rounded-2xl object-cover"
              src="./virtual_assistance_course_img3.jpeg"
              alt="Lady typing on the system smiling"
            />
            <div className="text-left p-2">
              <h1 className="capitalize text-lg font-semibold ">
                customer service
              </h1>
              <p className="text-[14px] font-normal pt-2">
                Problem-solving, emotional intelligence, and customer retention
                techniques to help businesses.
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2 pl-3">
                <img
                  className="lg:w-[40px] lg:h-[40px] border rounded-full object-fill"
                  src="./virtual_assistance_course_img6.jpeg"
                  alt="lady sitting on the chair"
                />
                <p className="font-semibold text-[14px]">Steven Wise</p>
              </div>
              <div className="flex items-center space-x-3 pr-5">
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <EyeIcon className="w-[16px] h-[16px]" />
                  2.4k
                </p>
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <AiOutlineClockCircle className="w-[14px] h-[14px]" />
                  15.56
                </p>
              </div>
            </div>
            <Button
              btnText={"start learning"}
              btnStyle={
                "capitalize rounded-xl px-5 py-3 cursor-pointer border-2 border-black hover:bg-[#D1E5E4] hover:border-[#D1E5E4] transition-all duration-300"
              }
              btnFunc={() => navigate("/log-in")}
            />
          </div>
          {/* end */}
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[500px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl ">
            <img
              className="border lg:w-[350px] lg:h-[256px] rounded-2xl object-cover"
              src="./virtual_assistance_course_img3.jpeg"
              alt="Lady typing on the system smiling"
            />
            <div className="text-left p-2">
              <h1 className="capitalize text-lg font-semibold ">
                customer service
              </h1>
              <p className="text-[14px] font-normal pt-2">
                Problem-solving, emotional intelligence, and customer retention
                techniques to help businesses.
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2 pl-3">
                <img
                  className="lg:w-[40px] lg:h-[40px] border rounded-full object-fill"
                  src="./virtual_assistance_course_img6.jpeg"
                  alt="lady sitting on the chair"
                />
                <p className="font-semibold text-[14px]">Steven Wise</p>
              </div>
              <div className="flex items-center space-x-3 pr-5">
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <EyeIcon className="w-[16px] h-[16px]" />
                  2.4k
                </p>
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <AiOutlineClockCircle className="w-[14px] h-[14px]" />
                  15.56
                </p>
              </div>
            </div>
            <Button
              btnText={"start learning"}
              btnStyle={
                "capitalize rounded-xl px-5 py-3 cursor-pointer border-2 border-black hover:transition-all hover: hover:border-[#D1E5E4] transition-all duration-300"
              }
              btnFunc={() => navigate("/log-in")}
            />
          </div>
          {/* end */}
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[500px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl ">
            <img
              className="border lg:w-[350px] lg:h-[256px] rounded-2xl object-cover"
              src="./virtual_assistance_course_img3.jpeg"
              alt="Lady typing on the system smiling"
            />
            <div className="text-left p-2">
              <h1 className="capitalize text-lg font-semibold ">
                customer service
              </h1>
              <p className="text-[14px] font-normal pt-2">
                Problem-solving, emotional intelligence, and customer retention
                techniques to help businesses.
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2 pl-3">
                <img
                  className="lg:w-[40px] lg:h-[40px] border rounded-full object-fill"
                  src="./virtual_assistance_course_img6.jpeg"
                  alt="lady sitting on the chair"
                />
                <p className="font-semibold text-[14px]">Steven Wise</p>
              </div>
              <div className="flex items-center space-x-3 pr-5">
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <EyeIcon className="w-[16px] h-[16px]" />
                  2.4k
                </p>
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <AiOutlineClockCircle className="w-[14px] h-[14px]" />
                  15.56
                </p>
              </div>
            </div>
            <Button
              btnText={"start learning"}
              btnStyle={
                "capitalize rounded-xl px-5 py-3 cursor-pointer border-2 border-black hover:bg-[#D1E5E4] hover:border-[#D1E5E4] transition-all duration-300"
              }
              btnFunc={() => navigate("/log-in")}
            />
          </div>
          {/* end */}
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[500px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl ">
            <img
              className="border lg:w-[350px] lg:h-[256px] rounded-2xl object-cover"
              src="./virtual_assistance_course_img3.jpeg"
              alt="Lady typing on the system smiling"
            />
            <div className="text-left p-2">
              <h1 className="capitalize text-lg font-semibold ">
                customer service
              </h1>
              <p className="text-[14px] font-normal pt-2">
                Problem-solving, emotional intelligence, and customer retention
                techniques to help businesses.
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2 pl-3">
                <img
                  className="lg:w-[40px] lg:h-[40px] border rounded-full object-fill"
                  src="./virtual_assistance_course_img6.jpeg"
                  alt="lady sitting on the chair"
                />
                <p className="font-semibold text-[14px]">Steven Wise</p>
              </div>
              <div className="flex items-center space-x-3 pr-5">
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <EyeIcon className="w-[16px] h-[16px]" />
                  2.4k
                </p>
                <p className="flex justify-start items-center gap-1 text-[14px] font-normal">
                  <AiOutlineClockCircle className="w-[14px] h-[14px]" />
                  15.56
                </p>
              </div>
            </div>
            <Button
              btnText={"start learning"}
              btnStyle={
                "capitalize rounded-xl px-5 py-3 cursor-pointer border-2 border-black hover:bg-[#D1E5E4] hover: hover:border-[#D1E5E4] transition-all duration-300"
              }
              btnFunc={() => navigate("/log-in")}
            />
          </div>
          {/* end */}
        </div>
        {/* virtual_assistance_course_end */}
        {/* heading start */}
        <div className="grid place-items-center">
          <div className="flex items-center justify-center space-x-2 text-lg pb-4">
            <p className="capitalize py-3 px-3 bg-[#201F1F] rounded-full text-[#FFFFFF] text-[16px] font-semibold">
              browse courses
            </p>
          </div>
          {/* heading end */}
        </div>
        <div className="grid place-items-center font-bricolageGrotesque bg-[#FFFFFF] p-20">
          <div className="w-[600px] h-[200px] grid place-items-center">
            <div className="flex items-center  space-x-2 text-lg pb-4">
              <p className="w-4 h-4 border-2 bg-[#0A4380] border-[#FFC8BC] rounded-full" />

              <p className=" text-[16px] font-medium">How it works</p>
            </div>
            <div className="grid text-center">
              <p className="text-5xl font-bold ">
                Step by step to earn course certificates
              </p>
              <p className="mt-4 text-lg font-normal">
                Follow a guided learning path and get certified with ease
              </p>
            </div>
          </div>
        </div>
        <div className="grid place-items-center grid-cols-2 gap-10 pt-2">
          {/* start */}
          <div className="border-4 shadow-lg border-black rounded-3xl p-5 text-left w-[500px] h-[200px] cursor-pointer">
            <p className=" w-[27px] h-[27px] bg-black border rounded-full text-white text-center font-lg font-semibold mt-2">
              1
            </p>
            <p className="capitalize font-bold text-2xl pt-4">
              sign up & browse courses
            </p>
            <p className="text-base font-normal pt-3">
              Sign up today to gain access to expert led lessons, interactive
              content, and valuable resources.
            </p>
          </div>
          {/* end */}
          {/* start */}
          <div className="border-4 shadow-lg border-black  rounded-3xl p-5 text-left w-[500px] h-[200px] cursor-pointer">
            <p className=" w-[27px] h-[27px] bg-black border rounded-full text-white text-center font-lg font-semibold mt-2">
              2
            </p>
            <p className="capitalize font-bold text-2xl pt-4">
              browse from featured instructor
            </p>
            <p className="text-base font-normal pt-3">
              Learn from industry experts with real world experience. Explore
              top courses designed to help you succeed.
            </p>
          </div>
          {/* end */}
          {/* start */}
          <div className="border-4 shadow-lg border-black  rounded-3xl p-5 text-left w-[500px] h-[200px] cursor-pointer">
            <p className=" w-[27px] h-[27px] bg-black border rounded-full text-white text-center font-lg font-semibold mt-2">
              3
            </p>
            <p className="capitalize font-bold text-2xl pt-4">
              watch & finish course
            </p>
            <p className="text-base font-normal pt-3">
              Learn at your own pace and complete courses to unlock new skills
              and opportunities.
            </p>
          </div>
          {/* end */}
          {/* start */}
          <div className="border-4 shadow-lg border-black  rounded-3xl p-5 text-left w-[500px] h-[200px] cursor-pointer">
            <p className=" w-[27px] h-[27px] bg-black border rounded-full text-white text-center font-lg font-semibold mt-2">
              4
            </p>
            <p className="capitalize font-bold text-2xl pt-4">
              get your certificates
            </p>
            <p className="text-base font-normal pt-3">
              Sign up today to gain access to expert led lessons, interactive
              content, and valuable resources.
            </p>
          </div>
          {/* end */}
        </div>
      </div>
      <div className="flex pt-20 pb-10 justify-evenly bg-[#FAFCFC] ">
        <div className="grid w-[300px] p-2">
          <h1 className="font-bricolageGrotesque font-extrabold text-5xl text-left capitalize">
            get hired, today!
          </h1>
          <p className="font-bricolageGrotesque pt-[20px] font-medium text-lg text-left">
            Oportunities are waiting take the first step now.
          </p>
          <Button
            btnText="start now"
            btnStyle="grid place-content-center w-32 h-14 text-lg capitalize font-medium text-center rounded-2xl cursor-pointer bg-[#FE1919] text-slate-100 font-bricolageGrotesque"
          />
        </div>
        <div className="w-[400px] h-[300px]">
          <img
            src="/guy_sitting _on_computer.png"
            alt="guy sitting on computer"
          />
        </div>
      </div>
      <div className="p-20 bg-white">
        <div className="flex items-end justify-between">
          <div className="text-left">
            <h1 className="capitalize text-3xl font-medium">Meet the team</h1>
            <p className="capitalize text-sm pt-2">
              the experts behind your success
            </p>
          </div>
          <ArrowRight className="w-[16px] h-[16px]" />
        </div>
        <div className="grid md:grid-cols-2 md:gap-10">
          {/* start */}
          <div className="bg-[#DCE0E5] w-[500px] h-[200px] p-10 rounded-[40px] mt-20  ">
            <div className="flex items-center gap-3">
              <img
                className="w-[100px] h-[100px] border rounded-[35px]"
                src="/virtual_assistance_course_img7.jpeg"
                alt="guy in brown shirt"
              />
              <div className="text-left">
                <h1 className="capitalize text-lg font-semibold">
                  james herwitz
                </h1>
                <p className="text-sm font-normal">
                  Learn from an experienced professional with real-world
                  expertise. Gain valuable insights to enhance your skills and
                  career.
                </p>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className="bg-[#DCE0E5] w-[500px] h-[200px] p-10 rounded-[40px] mt-20  ">
            <div className="flex items-center gap-3">
              <img
                className="w-[100px] h-[100px] border rounded-[35px]"
                src="/virtual_assistance_course_img8.jpeg"
                alt="girl on a flower dress"
              />
              <div className="text-left">
                <h1 className="capitalize text-lg font-semibold">
                  Gretchen Kenter
                </h1>
                <p className="text-sm font-normal">
                  Learn from an experienced professional with real-world
                  expertise. Gain valuable insights to enhance your skills and
                  career.
                </p>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className="bg-[#DCE0E5] w-[500px] h-[200px] p-10 rounded-[40px] mt-2  ">
            <div className="flex items-center gap-3">
              <img
                className="w-[100px] h-[100px] border rounded-[35px]"
                src="/virtual_assistance_course_img5.jpeg"
                alt="a black woman"
              />
              <div className="text-left">
                <h1 className="capitalize text-lg font-semibold">
                  Rayna George
                </h1>
                <p className="text-sm font-normal">
                  Learn from an experienced professional with real-world
                  expertise. Gain valuable insights to enhance your skills and
                  career.
                </p>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className="bg-[#DCE0E5] w-[500px] h-[200px] p-10 rounded-[40px] mt-2  ">
            <div className="flex items-center gap-3">
              <img
                className="w-[100px] h-[100px] border rounded-[35px]"
                src="/virtual_assistance_course_img6.jpeg"
                alt="mustache guy on headphone"
              />
              <div className="text-left">
                <h1 className="capitalize text-lg font-semibold">
                  Justin Baptista
                </h1>
                <p className="text-sm font-normal">
                  Learn from an experienced professional with real-world
                  expertise. Gain valuable insights to enhance your skills and
                  career.
                </p>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};
export default Home;
