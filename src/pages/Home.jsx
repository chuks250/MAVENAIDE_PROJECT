import { EyeIcon } from "lucide-react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    // header start
    <div className="grid text-center bg-[#D1E5E4]">
      <div className="font-bricolageGrotesque">
        <p className="text-6xl font-bold">Our business is taking care</p>
        <p className="text-8xl font-extrabold">of your business.</p>
      </div>
      <div className="flex items-center justify-center -mt-[160px]">
        <img
          className="w-[1091px] h-[1091px] object-cover"
          src="/ladyinsuit.png"
          alt="Lady in suit"
        />
      </div>
      <div className="flex pb-28 p-5 bg-[#FFFFFF] justify-between place-items-center">
        <div className="text-left h-[128px] p-5">
          <h1 className="capitalize text-black text-6xl text-left font-bricolageGrotesque">
            <span className="text-gray-500"> seamless</span> virtual assistance
            for productivity.
          </h1>
        </div>
      </div>
      <div className="flex items-center bg-[#FFFFFF] justify-center gap-10 pb-14">
        <img
          className="rounded-full p-3 w-[350px] h-[650px] object-cover border-2 bg-[#D1E5E4]"
          src="./virtual_assistant1.jpeg"
          alt="owl_pics"
        />
        {/* header end */}
        <div className="w-[800px] H-[128px] text-left font-bricolageGrotesque p-10">
          <div className="w-[700px] h-[2px] bg-gray-600" />
          <p className="text-[20px] pt-10">
            MavenAide Virtual Assistant Agency offers professional virtual
            assistant services and training. Services like administrative
            support, project management and customer service excellence are
            delivered to corporate businesses and entrpreneurs.
          </p>
          <div className="grid uppercase font-medium text-[12px] items-center lg:grid-cols-2 pt-20">
            {/* start */}
            <div>
              <div className="flex items-center space-x-2 pb-2">
                <div className="w-3 h-3 bg-slate-100 border border-black rounded-full"></div>
                <span>virtual assistant training</span>
              </div>
              <div className="w-[290px] h-[2px] bg-gray-600" />
            </div>
            {/* end */}
            {/* start */}
            <div>
              <div className="flex items-center space-x-2 pb-2">
                <div className="w-3 h-3 bg-slate-100 border border-black rounded-full"></div>
                <span>certification</span>
              </div>
              <div className="w-[290px] h-[2px] bg-gray-600" />
            </div>
            {/* end */}
            {/* start */}
            <div className="pt-5">
              <div className="flex items-center space-x-2 pb-2">
                <div className="w-3 h-3 bg-slate-100 border border-black rounded-full"></div>
                <span>virtual assistant services</span>
              </div>
              <div className="w-[290px] h-[2px] bg-gray-600" />
            </div>
            {/* end */}
            {/* start */}
            <div className="pt-5">
              <div className="flex items-center space-x-2 pb-2">
                <div className="w-3 h-3 bg-slate-100 border border-black rounded-full"></div>
                <span>executive assistant</span>
              </div>
              <div className="w-[290px] h-[2px] bg-gray-600" />
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      {/* virtual_assistance_course_start */}
      <div className="grid items-center font-bricolageGrotesque bg-[#F1F7F7] pt-16">
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
        <div className="grid lg:grid-cols-3 mt-32 mb-20 p-5">
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[450px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl ">
            <img
              className="border lg:w-[350px] lg:h-[256px] rounded-2xl object-cover"
              src="./virtual_assistance_course_img1.jpeg"
              alt="Lady typing on the system smiling"
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
          </div>
          {/* end */}
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[450px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl ">
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
          </div>
          {/* end */}
          {/* start*/}
          <div className="lg:w-[370px] lg:h-[450px] m-auto p-auto p-2 grid items-center justify-center bg-[#FFFFFF] border rounded-2xl ">
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
                techniques to help businesses
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
          </div>
          {/* end */}
        </div>
        {/* virtual_assistance_course_end */}
        {/* heading start */}
        <div className="flex items-center justify-center space-x-2 text-lg pb-4  ">
          <p className="capitalize py-3 px-3 border-4 bg-[#201F1F] rounded-full text-[#FFFFFF] text-[16px] font-semibold">
            browse courses
          </p>
        </div>
        {/* heading end */}
      </div>
      <div className="grid items-center font-bricolageGrotesque bg-[#F1F7F7] p-20">
        <div className="w-[600px] h-[200px]">
          <div className="flex items-center space-x-2 text-lg pb-4 text-left">
            <p className="w-4 h-4 border-4 bg-[#0A4380] border-[#FFC8BC] rounded-full" />
            <p className=" text-[16px] font-medium">How it works</p>
          </div>
          <div className="grid text-left">
            <p className="text-5xl font-bold ">
              Step by step to earn course certificates
            </p>
            <p className="text-lg font-normal">
              Follow a guided learning path and get certified with ease
            </p>
          </div>
        </div>
        <div className="grid items-center justify-center grid-cols-2 gap-10 pt-10">
          {/* start */}
          <div className="bg-[#D7D4D2] border rounded-3xl p-5 text-left w-[500px] h-[200px]">
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
          <div className="bg-[#D7D4D2] border rounded-3xl p-5 text-left w-[500px] h-[200px]">
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
          <div className="bg-[#D7D4D2] border rounded-3xl p-5 text-left w-[500px] h-[200px]">
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
          <div className="bg-[#D7D4D2] border rounded-3xl p-5 text-left w-[500px] h-[200px]">
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
                src="/virtual_assistance_course_img6.jpeg"
                alt="mustache guy on headphone"
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
        </div>
      </div>
    </div>
  );
};
export default Home;
