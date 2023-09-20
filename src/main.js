import { createApp } from "vue";
// Import Bootstrap
import "@fontsource-variable/raleway";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

library.add(
  faBuilding,
  faArrowsRotate,
  faHouse,
  faTruck,
  faSuitcase,
  faUsers,
  faGlobe,
  faLink,
  faMagnifyingGlass,
  faSun,
  faLightbulb
);

import App from "./App.vue";
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
