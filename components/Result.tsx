export default function Result() {
  return (
    <div className="container my-[120px] max-md:my-16" data-aos="fade-down">
      <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
        <div className="flex flex-col">
          <div className="text-[64px] font-bold max-md:text-[48px]">
            +{" "}
            <span className="bg-gradient-to-l from-[#9855FF] to-[#E336FF] bg-clip-text text-transparent">
              150
            </span>
          </div>
          <p className="mb-8 text-2xl max-md:mb-0 max-md:text-xl md:pr-20">
            Проектов выполнено нашей командой
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-[64px] font-bold max-md:text-[48px]">
            {"> "}
            <span className="bg-gradient-to-l from-[#9855FF] to-[#E336FF] bg-clip-text text-transparent">
              1 000 000
            </span>
          </div>
          <p className="mb-8 text-2xl max-md:mb-0 max-md:text-xl md:pr-20">
            Человек посещают сайты и сервисы, разарботанные нами ежедневно
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-[64px] font-bold max-md:text-[48px]">
            +{" "}
            <span className="bg-gradient-to-l from-[#9855FF] to-[#E336FF] bg-clip-text text-transparent">
              17
            </span>
          </div>
          <p className="mb-8 text-2xl max-md:mb-0 max-md:text-xl md:pr-20">
            Профессионалов в международной команде
          </p>
        </div>
      </div>
    </div>
  );
}
