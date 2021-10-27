import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form")! as HTMLFormElement;

// inputs
const type = document.querySelector("#type")! as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
const details = document.querySelector("#details")! as HTMLInputElement;
const amount = document.querySelector("#amount")! as HTMLInputElement;

const ul = document.querySelector(".item-list")! as HTMLUListElement;
const li = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  li.render(doc, type.value, "end");
});

// enums
interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceType: 3,
  data: { title: "name of the wind" },
};

const docThree: Resource<object> = {
  uid: 2,
  resourceType: 4,
  data: { name: "yoshi" },
};

console.log(docTwo, docThree);
