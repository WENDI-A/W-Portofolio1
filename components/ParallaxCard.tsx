'use client';

import React from "react";
import Atropos from "atropos/react";

export default function ParallaxCard() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#0d1117]">
            <Atropos
                className="my-atropos w-[350px] h-[450px]"
                activeOffset={40}
                shadowScale={1.05}
                rotateXMax={15}
                rotateYMax={15}
            >
                <div
                    data-atropos-offset="5"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-700"
                ></div>

                <img
                    data-atropos-offset="10"
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    alt="Sample"
                    className="w-full h-full object-cover rounded-2xl"
                />

                <h1
                    data-atropos-offset="20"
                    className="absolute bottom-4 left-4 text-white text-2xl font-bold"
                >
                    Atropos 3D Card
                </h1>
            </Atropos>
        </div>
    );
}
