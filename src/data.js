import Mealify from "./images/mealify.png";
import Shoppe from "./images/shoppe.png";
import Brochure from "./images/brochure.png";

export const skills = ["HTML", "CSS", "SaSS", "JavaScript", "React JS"];

export const text = [<>Objective and purpose</>];

export const projects = [
  {
    title: "Recipe Search App",
    description: "Search for recipes based on a single ingredient",
    href: "https://mealify.jasonanthonblack.com/",
    backgroundImage: Mealify,
    github: "https://github.com/j-a-black/mealify",
    content: [
      <h2>Purpose and Objectives</h2>,
      <p>
        The purpose of this project was to explore how to use the{" "}
        <a
          alt="The Meal Database"
          href="https://www.themealdb.com/api.php"
          target="_blank"
          rel="noreferrer"
        >
          Meal API
        </a>{" "}
        to search for recipes based on a single ingredient. If the client
        entered ‘egg,’ then the application would yield the recipes that used
        eggs as an ingredient, based on what is currently available in the
        database. My objectives were to:
      </p>,
      <ol>
        <li>Learn how to fetch an API and the basics of async and await</li>
        <li>
          Take the input value from the user and extract the information from
          the API
        </li>
        <li>
          Display search results with a button that opens a modal when clicked
          by the user
        </li>
        <li>
          Display the ingredients, meal preparation & cooking instructions, and
          link to a YouTube video for more information
        </li>
        <li>
          Allow the user to exit the modal by clicking on the close button,
          pressing escape, or clicking anywhere outside of the modal
        </li>
      </ol>,
      <h2>Challenges</h2>,
      <p>
        I initially created the template and ensured the code for opening and
        closing the modal worked prior to writing the code for dynamically
        inserting elements. However, I did not take under consideration that the
        event listeners that were added prior to the rendering of the dynamic
        content would not fire. By the power of Google, I eventually learned how
        Event Delegation targeting the parent element would assist me overcoming
        this obstacle.
      </p>,
      <p>
        Additionally, each Meal API recipe contains up to 20 ingredients
        (strIngredient1, strIngredient2, etc.). I experienced difficulties
        displaying all the ingredients because I could think of a way to loop
        through all the names in a single object. This was due to a habit of
        primarily using dot notation to access the name/value pair, versus using
        the bracket notation. Using a for loop and placing the iterator within
        the bracket notation (e.g. objectName[‘strIngredient’ + i], I was able
        to push the object properties into an array, and then mapped the
        ingredients – as well as the quantity/measurements – individually.
      </p>,
    ],
  },
  {
    title: "Shopping Cart",
    description: "Shopping Cart feature for a fictitious bakery",
    href: "https://shoppe.jasonanthonblack.com/",
    backgroundImage: Shoppe,
    github: "https://github.com/j-a-black/shoppe-v2",
    content: [
      <h2>Purpose and Objectives</h2>,
      <p>
        The purpose of this project was to explore how to traverse the DOM,
        update and delete information within a shopping, and to craft a website
        layout based on a landing page design. My objectives were to:
      </p>,
      <ol>
        <li>
          Add items to the cart by utilizing for loops to iterate through a
          collection of class names and adding event listeners
        </li>
        <li>
          Remove items from the cart by developing a familiarity with selecting
          a parent element and removing all children nodes
        </li>
        <li>Utilize open source for website layout designs</li>
      </ol>,
      <h2>Challenges</h2>,
      <p>
        Running a for loop that displays the numbers one through 10 is very
        straight forward compared to using a for loop to iterate through a
        collection of class names, then adding event listeners to each element,
        and subsequently using a high order function – like the addEventListener
        – to pass another function as an argument. This required research, trial
        and error, and plenty of console logs.
      </p>,
      <p>
        This process alone was very important to understand as it played an
        instrumental role in adding items to a cart, removing items from a cart,
        and updating the total price.
      </p>,
      <p>
        Website design was derived from{" "}
        <a
          alt="Emporium Pies"
          href="https://emporiumpies.com/"
          target="_blank"
          rel="noreferrer"
        >
          Emporium Pies
        </a>{" "}
        and{" "}
        <a
          alt="Mah Ze Dahr"
          href="https://mahzedahrbakery.com/"
          target="_blank"
          rel="noreferrer"
        >
          Mah Ze Dahr
        </a>
        .
      </p>,
    ],
  },
  {
    title: "Brochure Website",
    description: "Advertising website for a fictitious catering company",
    href: "https://seasidecatering.jasonanthonblack.com/",
    backgroundImage: Brochure,
    github: "https://github.com/j-a-black/brochure",
    content: [
      <h2>Purpose and Objectives</h2>,
      <p>
        The purpose of this project was to create a simple advertisement website
        for a fictitious private catering services. Website design was derived
        from{" "}
        <a
          alt="The Highland Kitchen"
          href="https://www.thehighlandkitchen.com/"
          target="_blank"
          rel="noreferrer"
        >
          The Highland Kitchen
        </a>
        .
      </p>,
    ],
  },
];
