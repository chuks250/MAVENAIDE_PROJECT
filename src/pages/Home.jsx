import Button from "../components/r.components/Button";

const Home = () => {
  return (
    <div className="grid">
      <div className="text-center bg-[#D1E5E4]">
        <p className="text-6xl font-italiana font-bold">
          Our business is taking care
        </p>
        <p className="text-8xl font-serif font-extrabold">of your business.</p>
        <div className="flex items-center justify-center -mt-[150px]">
          <img
            className="w-[1091px] h-[1091px] object-cover "
            src="/ladyinsuit.png"
            alt="Lady in suit"
          />
        </div>
        <div className="flex p-10 gap-10 bg-black justify-between">
          <div className="text-left w-[500px]">
            <h1 className="text-5xl uppercase font-bold text-[#D1E5E4]">
              efficient
            </h1>
            <p className="text-white text-xl">
              we provide seamless virtual assistant services that help
              businesses and entrepreneurs streamline task, build productivity,
              and stay ahead.
            </p>
          </div>
          <div className="capitalize text-lg">
            <Button
              btnText={"virtual assistant training"}
              btnStyle={
                "text-white rounded-full px-5 py-3 cursor-pointer border-2 border-white"
              }
            />
            <Button
              btnText={"certification"}
              btnStyle={
                "text-white rounded-full px-5 py-3 cursor-pointer border-2 border-white"
              }
            />
            <Button
              btnText={"virtual assistant services"}
              btnStyle={
                "text-white rounded-full px-5 py-3 cursor-pointer border-2 border-white"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
