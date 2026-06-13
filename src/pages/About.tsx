"use client";

const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">

      {/* 🌈 LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef0f6] via-[#f8f6f3] to-[#e8ecf2]" />

      <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] 
        bg-[#f4b6a3] opacity-40 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] 
        bg-[#dfe3ec] opacity-50 blur-[120px] rounded-full" />

      <div className="relative z-10 container mx-auto px-6">

        {/* 👑 FOUNDER SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* 📜 TEXT */}
          <div className="space-y-7 text-center md:text-left">

            <h2 className="text-5xl md:text-6xl font-bold text-[#2c1a0b] leading-tight">
              Meet Our Founder
            </h2>

            {/* 💎 NAME (LUXURY STYLE) */}
            <div className="inline-block">
              <p className="text-2xl md:text-3xl font-bold 
              bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 
              bg-clip-text text-transparent tracking-wide">
                PRASHANTH THATHACHAR
              </p>
              <p className="text-sm text-gray-500 tracking-widest mt-1">
                (KANNA)
              </p>

              {/* underline accent */}
              <div className="h-[2px] w-24 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded-full" />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a passion for preserving authentic Iyengar cuisine
              turned into a lifelong journey of serving tradition with devotion.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With over 30 years of experience, our founder has dedicated his life
              to maintaining the purity, taste, and spiritual essence of traditional
              Brahmin cooking.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Every meal served today carries his legacy — a blend of devotion,
              discipline, and divine flavor.
            </p>

            {/* ✨ PREMIUM BADGE */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
            bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 
            text-white font-medium shadow-lg hover:scale-105 transition duration-300">
              ⭐ 30+ Years of Experience
            </div>

          </div>

          {/* 🖼️ IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">

              {/* 🌟 GLOW */}
              <div className="absolute -inset-6 bg-gradient-to-tr 
              from-orange-300 via-yellow-200 to-orange-400 
              opacity-30 blur-3xl rounded-[40px] group-hover:opacity-50 transition duration-500"></div>

              {/* 💎 FRAME */}
              <div className="relative p-[6px] rounded-[30px] 
              bg-gradient-to-tr from-orange-400 via-yellow-300 to-orange-500 shadow-2xl">

                <img
                  src="/image/kanna.jpeg"
                  alt="Founder"
                  className="w-80 h-[420px] object-cover rounded-[26px] 
                  group-hover:scale-105 transition duration-500"
                />

                {/* ✨ GLASS OVERLAY */}
                <div className="absolute inset-0 rounded-[26px] 
                bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              </div>

            </div>
          </div>

        </div>

        {/* 📜 ABOUT SECTION */}
        <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-gray-700 leading-relaxed">

          <h3 className="text-3xl font-bold text-[#2c1a0b]">
            Our Sacred Tradition
          </h3>

          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full" />

          <p>
            Shree Prakaram Caterers is a renowned name in authentic Brahmin-style catering,
            dedicated to preserving and celebrating the rich culinary heritage of Iyengar traditions.
          </p>

          <p>
            From weddings to sacred ceremonies, every meal is prepared with devotion,
            following time-honored recipes passed down through generations.
          </p>

          <p>
            Our commitment to quality, purity, and authenticity ensures that every
            experience is not just food — but a divine celebration.
          </p>

          <p className="text-xl font-semibold text-[#5a2e0c] italic">
            "Serving tradition with devotion, creating memories with every meal"
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;