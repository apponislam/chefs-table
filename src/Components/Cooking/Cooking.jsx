const Cooking = () => {
    return (
        <div className="py-8 rounded-2xl border border-[#28282833] mx-4 md:mx-0">
            <div className="w-1/2 mx-auto pb-4 mb-6 border-b border-[#2828281A]">
                <h1 className="lexend text-2xl font-semibold text-center">Want to cook: 01</h1>
            </div>
            <table className="w-full text-center mb-8">
                <tr className="text-[#878787] fira">
                    <th className="pb-4"></th>
                    <th className="pb-4">Name</th>
                    <th className="pb-4">Time</th>
                    <th className="pb-4">Calories</th>
                    <th className="pb-4"></th>
                </tr>
                <tr className="bg-[#28282808] fira">
                    <td className="p-4">1</td>
                    <td className="py-4 text-[#282828B3]">Chicken Caesar Salad</td>
                    <td className="py-4 text-[#282828B3]">20 minutes</td>
                    <td className="py-4 text-[#282828B3]">400 calories</td>
                    <td className="py-4">
                        <button className="btn lexend font-medium py-2 px-4 rounded-full bg-[#0BE58A]">Preparing</button>
                    </td>
                </tr>
            </table>
            <div className="w-1/2 mx-auto pb-4 mb-6 border-b border-[#2828281A]">
                <h1 className="lexend text-2xl font-semibold text-center">Currently cooking: 02</h1>
            </div>
            <table className="w-full text-center mb-8">
                <tr className="text-[#878787] fira">
                    <th className="pb-4"></th>
                    <th className="pb-4">Name</th>
                    <th className="pb-4">Time</th>
                    <th className="pb-4">Calories</th>
                </tr>
                <tr className="bg-[#28282808] fira">
                    <td className="p-4">1</td>
                    <td className="py-4 text-[#282828B3]">Chicken Caesar Salad</td>
                    <td className="py-4 text-[#282828B3]">20 minutes</td>
                    <td className="py-4 text-[#282828B3]">400 calories</td>
                </tr>
            </table>
        </div>
    );
};

export default Cooking;
