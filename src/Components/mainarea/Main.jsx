import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
import Cooking from "../Cooking/Cooking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("food.json")
            .then((response) => response.json())
            .then((json) => setFood(json));
    }, []);

    const [foods, setFoods] = useState([]);
    const [clicked, setclicked] = useState([]);
    const addToCook = (food) => {
        const foodid = food.recipe_id;
        const newClick = [...clicked, foodid];
        setclicked(newClick);
        if (!clicked.includes(foodid)) {
            const newCook = [...foods, food];
            setFoods(newCook);
        } else {
            notify();
        }
    };

    const notify = () => toast("Already Added!");

    const [newFood, setNewFood] = useState([]);
    const cookFood = (ids) => {
        const newFoods = foods.filter((id) => id.recipe_id !== ids.recipe_id);
        setFoods(newFoods);
        const newCooking = [...newFood, ids];
        setNewFood(newCooking);
    };

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-[40px] mb-6 text-center lexend text-black font-semibold">Our Recipes</h1>
                <p className="lexend text-center text-black mb-12">
                    Discover Our Delicious Recipes: Explore a Variety of Tastes, from Comforting Classics <br className="hidden md:block" /> to Exotic Flavors. Start Cooking Today!
                </p>
            </div>
            <div className="flex gap-6 flex-col md:flex-row mb-10">
                <div className="md:w-3/5 w-full">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-6">
                        {food.map((food, idx) => (
                            <Food key={idx} food={food} addToCook={addToCook} onClick={notify}></Food>
                        ))}
                    </div>
                </div>
                <div className="md:w-2/5 w-full">
                    <Cooking foods={foods} cookFood={cookFood} newFood={newFood}></Cooking>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;
