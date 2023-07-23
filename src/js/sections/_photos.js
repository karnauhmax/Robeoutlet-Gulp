import Accordion from "../functions/accordion";
import Tab from "../functions/tabs";

if (document.querySelector('.photos')) {
  new Tab('.photos').renderTab();
}

if (document.querySelector('.photos__accordion')) {
  new Accordion('.photos__accordion').renderaccordionDefault();
}


