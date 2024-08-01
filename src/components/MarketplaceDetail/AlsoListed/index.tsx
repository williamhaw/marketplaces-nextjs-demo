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
    <div className="p-4 border rounded-2xl">
      <div>
        <div>
          <div>
            <div>Where companies on this marketplace also list</div>
            <div>Based on the most popular companies</div>
          </div>

          <div className="">
            <div></div>
            <div className="flex gap-2">
              <div className="grow"></div>
              <button onClick={showPrevious}>&lt; Previous</button>
              <button onClick={showNext}>Next &gt;</button>
            </div>
          </div>
        </div>
        <hr className="solid" />
        <div className="flex py-3">
          {props.alsoListed
            .filter((v, i) => i >= windowIndex && i < windowIndex + windowSize)
            .map((marketplace) => (
              <div key={marketplace.name}>
                <Image
                  src={marketplace.logoLink}
                  alt={marketplace.name + " logo"}
                  width={40}
                  height={40}
                />
                <div>{marketplace.name}</div>
                <div>{marketplace.type}</div>
                <hr className="solid w-1/2" />
                <div>Show companies like you who list here</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
