import PropTypes from "prop-types";

const Ingredient = ({ ingredient }) => {
    console.log(ingredient);
    return <li>{ingredient}</li>;
};

Ingredient.propTypes = {
    ingredient: PropTypes.string.isRequired,
};

export default Ingredient;
