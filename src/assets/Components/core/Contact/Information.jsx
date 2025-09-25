import { address } from "../../../Data/constactpage";

const Information = () => {
  const { name, workingHours, email, phone, location, social } = address;

  return (
    <section className="w-full max-w-[400px] flex flex-col gap-4 text-white p-4 bg-[#111111] rounded-lg py-5 my-5 sm:my-0">
      {/* Name */}
      <p className="text-xl font-bold">{name.text}</p>

      {/* Location */}
      <p className="flex items-center gap-2">
        {location.icon && <location.icon className="text-blue-400" />}
        {location.text}
      </p>

      {/* Email */}
      <p className="flex items-center gap-2">
        {email.icon && <email.icon className="text-green-400" />}
        <a href={`mailto:${email.text}`} className="hover:underline">
          {email.text}
        </a>
      </p>

      {/* Phone */}
      <p className="flex items-center gap-2">
        {phone.icon && <phone.icon className="text-orange-400" />}
        <a href={`tel:${phone.text}`} className="hover:underline">
          {phone.text}
        </a>
      </p>

      {/* Working Hours */}
      <p className="flex items-center gap-2">
        {workingHours.icon && <workingHours.icon className="text-yellow-400" />}
        {workingHours.text}
      </p>

      {/* Social Links */}
      <div className="flex gap-4 mt-2 text-xl">
        {social.links.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            // target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <item.icon />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Information;
