import React from "react";

const Slider = () => {
    return (
        <div>
            <aside className="md:hidden">
                <ul className="">
                    <li>
                        <a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a>
                    </li>
                    <li>
                        <a href="#projects" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
export default Slider