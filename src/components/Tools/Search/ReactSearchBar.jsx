import React, { useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';




<div className={searchClass}>
<form className="sm:w-1/2 md:w-full" method="get" action="/search/" target={target}>
  <label
    for="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >Search</label
  >
  <div className="relative">
    <div
      className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
     {HiInformationCircle}
    </div>
    <input
      type="search"
      id="default-search"
      name="q"
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
      placeholder="Search Everything!"
      required
    />
    <button
      type="submit"
      className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-pink-500 to-purple-700 hover:grayscale ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
      >Search</button
    >
  </div>
</form>
</div>
