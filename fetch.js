import fetch from "node-fetch";

const params = new URLSearchParams({ postId: 1 });
/* const res = await fetch(
  `https://jsonplaceholder.typicode.com/comments?${params}`
).then((res) => res.json()); */

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";
const url = (url) => `${JSON_PLACEHOLDER_URL}/${url}`;

const res = await fetch(url("/posts"), {
  method: "POST",
  body: JSON.stringify({
    userId: 15,
    title: "at nam consequatur ea labore ea harum",
    body:
      "cupiditate quo est a modi nesciunt soluta\n" +
      "ipsa voluptas error itaque dicta in\n" +
      "autem qui minus magnam et distinctio eum\n" +
      "accusamus ratione error aut",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then((res) => res.json());

//console.log(res);

const jsonString = JSON.stringify(res);

console.log(JSON.parse(jsonString));
