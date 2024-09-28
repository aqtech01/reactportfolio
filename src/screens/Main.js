import React from "react";
import Image from "next/image";
import portfolio from "../../public/assets/images/developer.webp";
export default function Main() {
  return (
    <div>
      <main className="">
        <div className="grid grid-cols-2 m-3">
          <div class="">
            <Image src={portfolio} alt="portfolio pic" width={500} />
          </div>
          <div class="">
            <h1 class="text-3xl font-extrabold">
              Turning vision into reality with code and design.
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
