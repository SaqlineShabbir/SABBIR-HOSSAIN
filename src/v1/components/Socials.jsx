import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  const socials = [
    {
      icon: "https://cdn.prod.website-files.com/5f10ed4b2ae6bc09c03f5d7a/64959d5f65a257fb51a4259c_github.png",
      link: "https://github.com/SaqlineShabbir/",
      name: "GitHub",
    },
    {
      icon: "https://image.similarpng.com/very-thumbnail/2021/01/Black-linkedin-logo-design-on-transparent-background-PNG.png",
      link: "https://www.linkedin.com/in/sabbir0911/",
      name: "LinkedIn",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/023/986/885/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png",
      link: "/",
      name: "Instagram",
    },
    {
      icon: "https://i.pinimg.com/originals/84/68/5b/84685ba9637a951591040426a46da70f.jpg",
      link: "https://www.facebook.com/SabbirHossain0911/",
      name: "Facebook",
    },
  ];
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="3000"
      className="mt-20 lg:px-[150px] p-5"
    >
      <div className="grid lg:md:grid-cols-4 grid-cols-2 lg:md:gap-[32px] gap-10 items-center lg:md:justify-center ">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ background: "rgba(217, 217, 217, 0.1)" }}
              className="cursor-pointer border rounded-xl lg:md:px-24 px-8 py-[30px] mx-auto lg:md:h-[100%] h-[70px] flex items-center transform transition-transform hover:scale-110"
            >
              <h3 className="text-lg p-1"> {social.name}</h3>

              <Image
                src={social.icon}
                alt={`Social Media ${index}`}
                className=""
                width={30}
                height={30}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
