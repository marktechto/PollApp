const poll = {
  question: "What is Your Favorite Programming",
  option: ["0:Javascript", "1:Python", "2:Rust", "3:C++"],
  // answer:new Array(4).fill(0),
  answers: [0, 0, 0, 0],
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.option.join(
          "\n"
        )}\n (write an option number)`
      )
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll Results are ${this.answers.join(", ")})`);
    }
  },
};

document
  .querySelector(".btn-answer")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
poll.displayResult.call({ answers: [3, 5, 2] });
poll.displayResult.call({ answers: [1, 4, 6, 3, 5, 2] }, "string");
