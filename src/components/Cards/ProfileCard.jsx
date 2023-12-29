import React from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="border-b-2">
      <div className="relative">
        <img className="h-48 w-[520px] " src={user.user.image} alt="cover" />
        <img
          className="w-28 h-28 absolute top-32 rounded-full left-3"
          src={user.user.image}
          alt="profile"
        />
      </div>

      <div className="mt-14 mx-3 ">
        <span className="font-bold text-2xl block">
          {user.user.displayName}
        </span>
        <span>@{user.user.userName}</span>
      </div>

      <div className="m-3">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          dolore nam.
        </p>
        <section className="mt-3">
          <div className="flex flex-row mb-2">
            <article className="flex flex-row text-slate-600 mr-6">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
            </article>
          </div>

          <div className="flex flex-row">
            <article className="flex flex-row text-slate-600 mr-6">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                  />
                </svg>
              </div>
              <div>{user.user.dob}</div>
            </article>

            <article className="flex flex-row text-slate-600">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
              <div>{user.user.joiningTime}</div>
            </article>
          </div>
        </section>

        <section className="flex flex-row mt-3">
          <div className="mr-5">
            <span className="font-bold">1</span> Following
          </div>
          <div>
            <span className="font-bold">0</span> Followers
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
