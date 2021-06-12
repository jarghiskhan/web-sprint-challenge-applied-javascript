const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const divHeader = document.createElement("div");
  divHeader.classList.add("header");
  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  const h1Title = document.createElement("h1");
  const spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");
  
  
  divHeader.appendChild(spanDate);
  divHeader.appendChild(h1Title);
  divHeader.appendChild(spanTemp);



  spanDate.textContent = `${date}`;
  h1Title.textContent = `${title}`;
  spanTemp.textContent = `${temp}`;

  return divHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const selectorNode = document.querySelector(selector);
  selectorNode.append(Header(`Javascript`,`2021-06-12`,64));
}

export { Header, headerAppender }
