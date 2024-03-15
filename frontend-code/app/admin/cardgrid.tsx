import React from "react";

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const CardGrid = ({ items }) => (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:cursor-pointer">
        {items.map((item, i) => (
            <div
                key={i}
                className={`col-span-1 ${i === 3 || i === 6 ? "md:col-span-2" : ""
                    }`}
            >
                <div className="bg-white bg-opacity-25 hover:bg-opacity-35 rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 flex flex-col justify-between h-[300px]">
                        <div>
                            <div className="mb-2">{item.header || <Skeleton />}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-white">{item.description}</p>
                        </div>
                        <div className="mt-4 flex justify-center">{item.icon}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default CardGrid;
