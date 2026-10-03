import { message } from "./greeting.js";

//@ts-expect-error
import "../styles/style.css";

//@ts-expect-error
import joshAllenImage from "../assets/images/Josh-Allen.jpg";

const image: HTMLImageElement = document.createElement("img");

image.setAttribute("src", joshAllenImage);

document.body.appendChild(image);

console.log(message);
