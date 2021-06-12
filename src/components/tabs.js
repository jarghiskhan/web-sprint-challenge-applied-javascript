const axios = require("axios").default;

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const divTopics = document.createElement("div");
  divTopics.classList.add("topics");

  function isURL(string) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(string);
  }

  if (isURL(topics)) {
    axios.get(topics).then(function (response) {
      response.data.topics.forEach((element) => {
        const divTab = document.createElement("div");
        divTab.classList.add("tab");
        divTab.textContent = element;
        divTopics.appendChild(divTab);
      });
    });
  } else {
    topics.forEach((element) => {
      const divTab = document.createElement("div");
      divTab.classList.add("tab");
      divTab.textContent = element;
      divTopics.appendChild(divTab);
    });
  }

  return divTopics;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const selectorNode = document.querySelector(selector);
  selectorNode.append(Tabs(`https://lambda-times-api.herokuapp.com/topics`));
};

export { Tabs, tabsAppender };
