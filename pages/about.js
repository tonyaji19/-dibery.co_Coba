import React from "react";
import Navbar from "../components/Navbar/Navbar";

const about = () => {
  return (
    <div className="font-quicksand">
      <Navbar />
      <div className="mt-12 text-center font-bold text-4xl text-gray-700 ">
        About Us
      </div>
      <div class="container my-20 px-10 mx-auto">
        <section class="mb-32 text-gray-800">
          <div class="container mx-auto xl:px-32 text-center lg:text-left">
            <div class="grid lg:grid-cols-2 flex items-center">
              <div class="mb-12 lg:mb-0">
                <div class="about block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14">
                  <h3 class="text-2xl font-bold mb-3">@dibery.co</h3>
                  <h5 class="text-lg text-blue-600 font-bold mb-12 lg:mb-10 xl:mb-12">
                    Best Leather Product 2021
                  </h5>

                  <p class="font-bold mb-4">
                    Anim pariatur cliche reprehenderit?
                  </p>
                  <p class="text-gra-500 mb-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt autem numquam dolore molestias aperiam culpa alias
                    veritatis architecto eos, molestiae vitae ex eligendi libero
                    eveniet dolorem, doloremque rem aliquid perferendis.
                  </p>

                  <p class="font-bold mb-4">
                    Non cupidatat skateboard dolor brunch?
                  </p>
                  <p class="text-gra-500 mb-6">
                    Distinctio corporis, iure facere ducimus quos consectetur
                    ipsa ut magnam autem doloremque ex! Id, sequi. Voluptatum
                    magnam sed fugit iusto minus et suscipit? Minima sunt at
                    nulla tenetur, numquam unde quod modi magnam ab deserunt
                    ipsam sint aliquid dolores libero repellendus cupiditate
                    mollitia quidem dolorem odit
                  </p>

                  <p class="font-bold mb-4">
                    Praesentium voluptatibus temporibus consequatur non
                    aspernatur?
                  </p>
                  <p class="text-gra-500">
                    Minima sunt at nulla tenetur, numquam unde quod modi magnam
                    ab deserunt ipsam sint aliquid dolores libero repellendus
                    cupiditate mollitia quidem dolorem.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/desk.webp"
                  class="w-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default about;
