import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const CategoryRow1 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div
          className="flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between"
        >
          <div className="flex flex-col md:flex md:flex-row gap-5
          md::w-[43vw] lg:w-[50%] md:justify-between lg:justify-center">
            {/* frist column */}
            <div
              className="
                  md:w-[48%]
                  lg:w-[50%]
                  py-10
                  pl-5
                  bg-gradient-to-br
                  from-black/90
                  to-black/70
                  text-white
                  rounded-3xl
                  relative
                  h-[380px]
                  flex
                  items-end
              "
            >
              <div>
                <div className="mb-4">
                  <p
                    className="
                          mb-[2px]
                          text-gray-400
                      "
                  >
                    Enjoy
                  </p>
                  <p
                    className="
                          text-2xl
                          font-semibold
                          mb-[2px]
                      "
                  >
                    the
                  </p>
                  <p
                    className="
                          text-4xl
                          xl:text-5xl
                          font-bold
                          opacity-20
                          mb-2
                      "
                  >
                    Earphones
                  </p>
                  <Button
                    text="Browse"
                    bgColor="bg-primary"
                    textColor="text-white"
                  />
                </div>
              </div>
              <img
                src={Image1}
                alt="earphone"
                className="
                  w-[320px]
                  absolute
                  bottom-0
              "
              />
            </div>
            {/* end of frist column */}
            {/* second column */}
            <div
              className="
                  md:w-[48%]
                  lg:w-[50%]
                  py-10
                  pl-5
                  bg-gradient-to-br
                  from-brandYellow
                  to-brandYellow/90
                  text-white
                  rounded-3xl
                  relative
                  h-[380px]
                  flex
                  items-end
              "
            >
              <div>
                <div className="mb-4">
                  <p
                    className="
                          mb-[2px]
                          text-white
                      "
                  >
                    Enjoy
                  </p>
                  <p
                    className="
                          text-2xl
                          font-semibold
                          mb-[2px]
                      "
                  >
                    the
                  </p>
                  <p
                    className="
                          text-4xl
                          xl:text-5xl
                          font-bold
                          opacity-40
                          mb-2
                      "
                  >
                    Gadgets
                  </p>
                  <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-brandYellow"
                  />
                </div>
              </div>
              <img
                src={Image2}
                alt="earphone"
                className="
                  w-[320px]
                  absolute
                  -right-4
                  lg:top-[40px]
              "
              />
            </div>
            {/* end of second column */}
          </div>

          {/* third column */}
          <div className="w-[100%] lg:w-[50%]">
            <div
              className="
                  col-span-2
                  py-10
                  pl-5
                  bg-gradient-to-br
                  from-primary
                  to-primary/90
                  text-white
                  rounded-3xl
                  relative
                  h-[380px]
                  flex
                  items-end
              "
            >
              <div>
                <div className="mb-4">
                  <p
                    className="
                          mb-[2px]
                          text-white
                      "
                  >
                    Enjoy
                  </p>
                  <p
                    className="
                          text-2xl
                          font-semibold
                          mb-[2px]
                      "
                  >
                    the
                  </p>
                  <p
                    className="
                          text-4xl
                          xl:text-5xl
                          font-bold
                          opacity-40
                          mb-2
                      "
                  >
                    Laptops
                  </p>
                  <Button
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-primary"
                  />
                </div>
              </div>
              <img
                src={Image3}
                alt="earphone"
                className="
                  w-[320px]
                  absolute
                  top-1/2
                  -translate-y-1/2
                  right-0
                  "
              />
            </div>
          </div>
          {/* end of third column */}
        </div>
      </div>
    </div>
  );
};

export default CategoryRow1;
