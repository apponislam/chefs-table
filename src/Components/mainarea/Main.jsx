import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";

const Main = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("food.json")
            .then((response) => response.json())
            .then((json) => setFood(json));
    }, []);

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-[40px] mb-6 text-center lexend text-black font-semibold">Our Recipes</h1>
                <p className="lexend text-center text-black mb-12">
                    Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque.
                </p>
            </div>
            <div className="flex gap-6">
                <div className="w-3/5">
                    <div className="grid grid-cols-2 gap-6">
                        {food.map((food, idx) => (
                            <Food key={idx} food={food}></Food>
                        ))}
                    </div>
                </div>
                <div className="w-2/5">
                    <h1>section 2</h1>
                </div>
            </div>
        </div>
    );
};

export default Main;
