import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";


// const [image, setImage] = useState(“”);
// const clientId = “t_YxM0Taxyt2MhS4ve9lviN-EApwUOrVRjNIbJYD10w”;
// const [result, setResult] = useState([]);

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={20} color="#5f6368" />
            </span>
            <span className="h-10 w-10 relative flex justify-center items-center">
                <img className="absolute" src={ProfileRing} />
                <span className="h-8 w-8 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src= "https://api.lorem.space/image/face?w=150&h=150" />
                    {/* <img src="https://api.unsplash.com/photos/random/?client_id={-aZedE6p_z21CAzvXZPJCDmiZ6KdrTSzHG71kNVgPuI}"></img> */}
                </span>
            </span>
        </div>
    );
};

export default ProfileIcon;
