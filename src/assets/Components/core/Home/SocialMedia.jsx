import { socialMedia } from "../../../Data/socialLinks";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 w-fit flex-wrap items-center justify-center ">
      {socialMedia.map((media) => {
        const Icon = media.icon;
        return (
          <div
            key={media.id}
            className="capsule flex items-center gap-2 cursor-pointer hover:scale-95 hover:shadow-2xl hover:shadow-amber-300 transition-all duration-300 "
          >
            <Icon className="text-lg " />
            <p className="font-semibold ">{media.platform}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
