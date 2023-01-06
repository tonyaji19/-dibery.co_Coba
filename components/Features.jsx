import React from "react";
/*eslint-disable */
export const Features = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            possimus iste id saepe omnis vel voluptatem, adipisci aliquid earum
            harum tempora neque! Amet eligendi illum fugiat? Quia fuga cum
            dolorum?
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Origin</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Designed by dibery.co
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Material</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Using Genuine Leather
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Finish</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Hand sanded and finished with natural oil
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Considerations</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Made from natural materials. Grain and color vary with each
                item.
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://cf.shopee.co.id/file/56ca2ebd954180cc5de51c2c70778536"
            alt="pouch"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://cf.shopee.co.id/file/3d753ac0ce2ec409b681f97a7e5948c5"
            alt="keychain"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://cf.shopee.co.id/file/249ffd37644fb857e66ca9f2adffe653"
            alt="mask"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://cf.shopee.co.id/file/364544382e7178633c2d2aa12007e1a0"
            alt="badge"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};
