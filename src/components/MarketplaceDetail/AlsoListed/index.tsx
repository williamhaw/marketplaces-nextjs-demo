import { AlsoListed } from "@/lib/client/models/models";
import React, { useState } from "react";
import Image from "next/image";

export interface AlsoListedProps {
  alsoListed: AlsoListed[];
}

export const AlsoListedComponent: React.FC<AlsoListedProps> = (
  props: AlsoListedProps
) => {
  const windowSize = 2;
  const [windowIndex, setWindowIndex] = useState(0);

  const showNext = () => {
    if (windowIndex < props.alsoListed.length - 1)
      setWindowIndex(windowIndex + 1);
  };

  const showPrevious = () => {
    if (windowIndex > 0) setWindowIndex(windowIndex - 1);
  };

  return (
    <div className="p-8 border rounded-2xl">
      <div>
        <div>
          <div>
            <div className="font-semibold">
              Where companies on this marketplace also list
            </div>
            <div className="text-sm font-light">Based on the most popular companies</div>
          </div>
          <div className="p-3"></div>
          <div className="">
            <div className="flex gap-2">
              <div className="grow"></div>
              <button
                onClick={showPrevious}
                className={
                  "text-sm " + (windowIndex === 0 ? "text-gray-400" : "")
                }
              >
                &lt; Previous
              </button>
              <button
                onClick={showNext}
                className={
                  "text-sm " +
                  (windowIndex === props.alsoListed.length - 1
                    ? "text-gray-400"
                    : "")
                }
              >
                Next &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
        <hr className="solid" />
        <div className="py-5"></div>
        <div className="flex py-3">
          {props.alsoListed
            .filter((v, i) => i >= windowIndex && i < windowIndex + windowSize)
            .map((marketplace) => (
              <div key={marketplace.name} className="w-1/2">
                <Image
                  src={marketplace.logoLink}
                  alt={marketplace.name + " logo"}
                  width={40}
                  height={40}
                />
                <div className="font-semibold">{marketplace.name}</div>
                <div className="text-xs">{marketplace.type}</div>
                <div className="py-5"></div>
                <hr className="solid w-1/2" />
                <div className="py-5"></div>
                <div className="text-xs text-gray-400">
                  Show companies like you who list here
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
