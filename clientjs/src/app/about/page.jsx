import Link from "next/link";
import Image from "next/image";

const Founders = [
  {
    name: "Sallin Koutev",
    linkedin: "https://www.linkedin.com/in/sallin-koutev-216b0016b/",
    github: "https://github.com/Sallin142",
    role: "CEO / President / Tech Lead",
    image: "/sallin-profile-picture.jpg",
  },

  {
    name: "Joao Correa",
    linkedin: "https://www.linkedin.com/in/joaoishida",
    github: "https://github.com/JoaoIshida",
    role: "Senior Full Stack Developer",
    image: "/joao-profile-picture.jpg",
  },
  {
    name: "Edison Wei",
    linkedin: "https://www.linkedin.com/in/edison-wei/",
    github: "https://github.com/Edison-Wei",
    role: "Senior Full Stack Developer",
    image: "/edison-profile-picture.jpg",
  },
  {
    name: "Samuel Antunes",
    linkedin: "https://www.linkedin.com/in/samuel-antunes-467a0a214/",
    github: "https://github.com/samuel-antunes",
    role: "Senior Full Stack Developer",
    image: "/samuel-profile-picture.jpg",
  },


];

const BusinessTeam = [
  {
    name: "Daniel",
    linkedin: "https://www.linkedin.com/in/sallin-koutev-216b0016b/",
    github: "",
    role: "Buissness Analyst",
    image: "/daniel-profile-picture.jpg",
  },
];

const DesignTeam = [
  {
    // name: "Kiran",
    // linkedin: "/",
    // github: "/",
    // role: "Designer",
    // image: "/profile-picture.jpg",
  },
];

const Sponsors = [

  {
    name: "SFU Surge",
    linkedin: "https://www.linkedin.com/company/sfu-surge/",
    github: "https://github.com/sfusurge",
    image: "/sfu-surge-logo.jpg",
  },

  {
    name: "SFU OS",
    linkedin: "https://www.linkedin.com/company/sfu-osdev/",
    github: "",
    image: "/osDev-logo.jpg",
  },

];

export default function About() {
  return (
    <div className="py-6 flex flex-col items-center">
      <div className="felx flex-row justify-center">
        <h2 className="text-5xl font-semibold  125rem ml-[30vw]">Founders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Founders.map((profile) => (
            <Profile
              name={profile.name}
              role={profile.role}
              linkedin={profile.linkedin}
              github={profile.github}
              image={profile.image}
              key={profile.name}
            />
          ))}
        </div>

        <h2 className="text-5xl font-semibold  125rem">Business Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BusinessTeam.map((profile) => (
            <Profile
              name={profile.name}
              role={profile.role}
              linkedin={profile.linkedin}
              github={profile.github}
              image={profile.image}
              key={profile.name}
            />
          ))}
        </div>

        <h2 className="text-5xl font-semibold  125rem">Design Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DesignTeam.map((profile) => (
            <Profile
              name={profile.name}
              role={profile.role}
              linkedin={profile.linkedin}
              github={profile.github}
              image={profile.image}
              key={profile.name}
            />
          ))}
        </div>

        <h2 className="text-5xl font-semibold  125rem">Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Sponsors.map((profile) => (
            <Profile
              name={profile.name}
              linkedin={profile.linkedin}
              github={profile.github}
              image={profile.image}
              key={profile.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Profile({ name, role, linkedin, github, image }) {
  return (
    <div className={`p-4 md:p-6 grid grid-cols-2 place-items-center`}>
      <div className="col-span-1 sm:col-span-2 md:col-span-1">
        <Image
          src={image}
          alt={"Picture of " + name}
          width={200}
          height={200}
          className="w-[30vw] h-[30vw] sm:w-[25vw] sm:h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full object-cover shadow-md"
        />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-1 py-2">
        <p className="text-lg sm:text-xl font-bold">{name}</p>
        {role && (
          <p className="text-base sm:text-lg font-medium">{role}</p>
        )} <div className="py-2"></div>
        {linkedin && (
          <Link href={linkedin} className="text-base flex flex-row mb-2  hover:text-primary-yellow gap-2 sm:text-lg font-normal">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
              <path d="M24.2559 0.789062H2.25586C1.72543 0.789063 1.21672 0.999776 0.841646 1.37485C0.466573 1.74992 0.255859 2.25863 0.255859 2.78906V24.7891C0.255859 25.3195 0.466573 25.8282 0.841646 26.2033C1.21672 26.5783 1.72543 26.7891 2.25586 26.7891H24.2559C24.7863 26.7891 25.295 26.5783 25.6701 26.2033C26.0451 25.8282 26.2559 25.3195 26.2559 24.7891V2.78906C26.2559 2.25863 26.0451 1.74992 25.6701 1.37485C25.295 0.999776 24.7863 0.789063 24.2559 0.789062ZM24.2559 24.7891H2.25586V2.78906H24.2559V24.7891ZM9.25586 11.7891V19.7891C9.25586 20.0543 9.1505 20.3086 8.96297 20.4962C8.77543 20.6837 8.52108 20.7891 8.25586 20.7891C7.99064 20.7891 7.73629 20.6837 7.54875 20.4962C7.36122 20.3086 7.25586 20.0543 7.25586 19.7891V11.7891C7.25586 11.5238 7.36122 11.2695 7.54875 11.082C7.73629 10.8944 7.99064 10.7891 8.25586 10.7891C8.52108 10.7891 8.77543 10.8944 8.96297 11.082C9.1505 11.2695 9.25586 11.5238 9.25586 11.7891ZM20.2559 15.2891V19.7891C20.2559 20.0543 20.1505 20.3086 19.963 20.4962C19.7754 20.6837 19.5211 20.7891 19.2559 20.7891C18.9906 20.7891 18.7363 20.6837 18.5488 20.4962C18.3612 20.3086 18.2559 20.0543 18.2559 19.7891V15.2891C18.2559 14.626 17.9925 13.9901 17.5236 13.5213C17.0548 13.0525 16.4189 12.7891 15.7559 12.7891C15.0928 12.7891 14.4569 13.0525 13.9881 13.5213C13.5193 13.9901 13.2559 14.626 13.2559 15.2891V19.7891C13.2559 20.0543 13.1505 20.3086 12.963 20.4962C12.7754 20.6837 12.5211 20.7891 12.2559 20.7891C11.9906 20.7891 11.7363 20.6837 11.5488 20.4962C11.3612 20.3086 11.2559 20.0543 11.2559 19.7891V11.7891C11.2571 11.5441 11.3482 11.3081 11.5119 11.1259C11.6756 10.9437 11.9004 10.8279 12.1438 10.8004C12.3872 10.773 12.6322 10.8358 12.8324 10.9771C13.0325 11.1183 13.1739 11.328 13.2296 11.5666C13.9061 11.1077 14.6948 10.8417 15.511 10.7972C16.3273 10.7527 17.1402 10.9314 17.8626 11.3141C18.5849 11.6968 19.1893 12.2691 19.611 12.9694C20.0327 13.6697 20.2556 14.4716 20.2559 15.2891ZM9.75586 8.28906C9.75586 8.58573 9.66789 8.87574 9.50306 9.12242C9.33824 9.36909 9.10397 9.56135 8.82988 9.67488C8.5558 9.78841 8.25419 9.81812 7.96322 9.76024C7.67225 9.70236 7.40498 9.5595 7.1952 9.34972C6.98542 9.13994 6.84256 8.87267 6.78468 8.5817C6.7268 8.29073 6.75651 7.98913 6.87004 7.71504C6.98357 7.44095 7.17583 7.20668 7.4225 7.04186C7.66918 6.87704 7.95919 6.78906 8.25586 6.78906C8.65368 6.78906 9.03522 6.9471 9.31652 7.2284C9.59782 7.50971 9.75586 7.89124 9.75586 8.28906Z" fill="black" />
            </svg>
            Linkedin
          </Link>
        )}
        {github && (
          <Link href={github} className="text-base flex flex-row  hover:text-primary-yellow gap-2 sm:text-lg font-normal">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M26.3044 6.5772C26.61 5.5912 26.7081 4.55256 26.5923 3.52677C26.4766 2.50098 26.1496 1.51031 25.6319 0.617204C25.5441 0.465152 25.4178 0.338893 25.2658 0.251122C25.1137 0.163352 24.9412 0.117164 24.7656 0.117204C23.6009 0.114766 22.4517 0.384784 21.4099 0.905684C20.3681 1.42658 19.4625 2.18393 18.7656 3.1172H15.7656C15.0687 2.18393 14.1632 1.42658 13.1214 0.905684C12.0796 0.384784 10.9304 0.114766 9.76562 0.117204C9.59005 0.117164 9.41756 0.163352 9.2655 0.251122C9.11344 0.338893 8.98716 0.465152 8.89937 0.617204C8.38168 1.51031 8.05466 2.50098 7.93891 3.52677C7.82317 4.55256 7.92121 5.5912 8.22687 6.5772C7.60903 7.6556 7.27808 8.87442 7.26562 10.1172V11.1172C7.26773 12.8092 7.88196 14.4433 8.9949 15.7178C10.1078 16.9922 11.6443 17.821 13.3206 18.051C12.6364 18.9265 12.265 20.006 12.2656 21.1172V22.1172H9.26562C8.46998 22.1172 7.70691 21.8011 7.1443 21.2385C6.5817 20.6759 6.26563 19.9129 6.26562 19.1172C6.26563 18.4606 6.1363 17.8104 5.88502 17.2038C5.63375 16.5972 5.26545 16.046 4.80116 15.5817C4.33687 15.1174 3.78567 14.7491 3.17904 14.4978C2.57241 14.2465 1.92223 14.1172 1.26562 14.1172C1.00041 14.1172 0.746055 14.2226 0.558518 14.4101C0.370982 14.5976 0.265625 14.852 0.265625 15.1172C0.265625 15.3824 0.370982 15.6368 0.558518 15.8243C0.746055 16.0118 1.00041 16.1172 1.26562 16.1172C2.06127 16.1172 2.82434 16.4333 3.38695 16.9959C3.94955 17.5585 4.26562 18.3216 4.26562 19.1172C4.26562 20.4433 4.79241 21.7151 5.73009 22.6527C6.66777 23.5904 7.93954 24.1172 9.26562 24.1172H12.2656V26.1172C12.2656 26.3824 12.371 26.6368 12.5585 26.8243C12.7461 27.0118 13.0004 27.1172 13.2656 27.1172C13.5308 27.1172 13.7852 27.0118 13.9727 26.8243C14.1603 26.6368 14.2656 26.3824 14.2656 26.1172V21.1172C14.2656 20.3216 14.5817 19.5585 15.1443 18.9959C15.7069 18.4333 16.47 18.1172 17.2656 18.1172C18.0613 18.1172 18.8243 18.4333 19.3869 18.9959C19.9496 19.5585 20.2656 20.3216 20.2656 21.1172V26.1172C20.2656 26.3824 20.371 26.6368 20.5585 26.8243C20.7461 27.0118 21.0004 27.1172 21.2656 27.1172C21.5308 27.1172 21.7852 27.0118 21.9727 26.8243C22.1603 26.6368 22.2656 26.3824 22.2656 26.1172V21.1172C22.2663 20.006 21.8949 18.9265 21.2106 18.051C22.8869 17.821 24.4234 16.9922 25.5363 15.7178C26.6493 14.4433 27.2635 12.8092 27.2656 11.1172V10.1172C27.2532 8.87442 26.9222 7.6556 26.3044 6.5772ZM25.2656 11.1172C25.2656 12.4433 24.7388 13.7151 23.8012 14.6527C22.8635 15.5904 21.5917 16.1172 20.2656 16.1172H14.2656C12.9395 16.1172 11.6678 15.5904 10.7301 14.6527C9.79241 13.7151 9.26562 12.4433 9.26562 11.1172V10.1172C9.27789 9.11724 9.57727 8.14186 10.1281 7.3072C10.2308 7.17185 10.2973 7.01257 10.3214 6.84439C10.3454 6.6762 10.3262 6.50466 10.2656 6.34595C10.0052 5.6742 9.8798 4.95765 9.89674 4.23736C9.91369 3.51708 10.0726 2.80722 10.3644 2.14845C11.1828 2.23649 11.9709 2.5076 12.6702 2.94167C13.3696 3.37574 13.9623 3.96164 14.4044 4.65595C14.4945 4.79684 14.6184 4.91287 14.765 4.99345C14.9115 5.07403 15.0759 5.11658 15.2431 5.1172H19.2869C19.4547 5.11721 19.6199 5.07496 19.7671 4.99435C19.9144 4.91374 20.0389 4.79737 20.1294 4.65595C20.5714 3.96158 21.1641 3.37563 21.8635 2.94155C22.5628 2.50747 23.351 2.23641 24.1694 2.14845C24.4607 2.80738 24.6192 3.51733 24.6357 4.23761C24.6523 4.9579 24.5265 5.67436 24.2656 6.34595C24.2052 6.50315 24.185 6.67295 24.2068 6.83994C24.2286 7.00693 24.2918 7.16583 24.3906 7.3022C24.9469 8.13686 25.2508 9.11425 25.2656 10.1172V11.1172Z" fill="black" />
            </svg>
            Github
          </Link>
        )}
      </div>
    </div>
  );
}