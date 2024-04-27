import { User } from "firebase/auth";
import Image from "next/image";
import GoogleImage from "../atoms/GoogleImage";

interface IGoogleAccountProps {
  user: User;
}

const GoogleAccount = ({ user }: IGoogleAccountProps) => {
  return ( 
    <div id="google-account" className="text-xs flex items-center justify-center m-4 p-2 rounded-lg bg-gray-bg gap-2 border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        {user?.photoURL ? (
          <Image
            className="rounded-xl"
            src={user?.photoURL!}
            width={40}
            height={40}
            alt="profile_img"
          />
        )
        : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] h-[30px]"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        )
        }
      </div>
      <div>
        <p className="font-semibold">Sign in as {user?.displayName ? user?.displayName : "Jhon Doe"}</p>
        <p>{user?.email}</p>
      </div>
      {user?.photoURL && (
        <div>
          <GoogleImage width={30} height={30} />
        </div>
      )}
    </div>
  );
}

export default GoogleAccount;