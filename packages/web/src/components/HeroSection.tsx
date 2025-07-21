import React from "react";

interface HeroSectionProps {
  stats: {
    value: string;
    label: string;
  }[];
  title: string;
  description: string;
  ctaButton: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  stats,
  title,
  description,
  ctaButton,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Верхняя кнопка */}
        {/* <div className="mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-aspekta font-medium px-6 py-3 rounded-full transition-all duration-200 flex items-center space-x-2 mx-auto">
            <span>+</span>
            <span>Generate any proof</span>
          </button>
        </div> */}

        {/* Главный заголовок */}
        <h1 className="max-w-3xl text-gray-900 mb-6 leading-tight tracking-tight font-tasa text-[52px] leading-[1.1]">
          {title}
        </h1>

        {/* Подзаголовок */}
        <p className="font-tasa text-[700] text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA кнопка */}
        <div className="mb-16">
          <button className="relative bg-[#4c66d4] hover:bg-blue-700 text-white font-aspekta font-semibold px-4 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl">
            {ctaButton}

          </button>
        </div>

        {/* Центральная визуализация */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200">
            {/* Абстрактная сеть */}
            <div className="relative h-64  from-gray-100 to-gray-200 rounded-2xl overflow-hidden"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats?.map((stat: any, index: any) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="font-tasa text-[44px] leading-[1.1] text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="font-aspekta text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
