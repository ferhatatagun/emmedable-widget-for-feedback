// import positiveVoteSvg from "/assets/images/positive-vote.svg";

export class FeedbackWidget {
  constructor({ data, position, situation, darkMode }) {
    this.position = this.getPosition(position);
    this.situation = situation;
    this.open = false;
    this.data = data;
    this.darkMode = darkMode;
    this.baseClass = "beavers--questionnaire";
    this.initialise();
    this.createStyles();
  }

  init(data) {
    console.log(data);
  }

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  refactorSituation() {
    switch (this.situation) {
      case "right":
        return "tab-right";
        break;
      case "left":
        return "tab-left";
        break;
      default:
        return "tab-right";
    }
  }

  initialise() {
    const container = document.createElement("div");
    container.classList = this.baseClass;
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );

    document.body.appendChild(container);

    const buttonContainer = document.createElement("div");
    const buttonContainerClassArgs = [
      this.baseClass + "__button",
      this.baseClass + "__button--open-survey",
      "tab",
      "allow-button",
      "round",
    ];

    for (let i = 0; i < buttonContainerClassArgs.length; i++) {
      buttonContainer.classList.add(buttonContainerClassArgs[i]);
    }

    buttonContainer.classList.add(this.refactorSituation());

    const chatIcon = document.createElement("img");
    // chatIcon.src = positiveVoteSvg;
    chatIcon.classList.add(this.baseClass + "__button--icon");
    this.chatIcon = chatIcon;

    const spanText = document.createElement("span");
    spanText.innerHTML = "Feedback";
    spanText.classList.add(this.baseClass + "__button--text");
    this.spanText = spanText;

    const closeIcon = document.createElement("img");
    closeIcon.src = "assets/images/cross.svg";
    closeIcon.classList.add("icon", "hidden");
    this.closeIcon = closeIcon;

    buttonContainer.appendChild(this.chatIcon);
    buttonContainer.appendChild(this.spanText);
    // buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    this.messageContainer = document.createElement("div");
    this.messageContainer.classList.add("hidden", "message-container");

    this.createMessageContainerContent();

    container.appendChild(this.messageContainer);
    container.appendChild(buttonContainer);
  }

  createMessageContainerContent() {
    this.messageContainer.innerHTML = "";
    const title = document.createElement("h2");
    title.textContent = `Burada değiliz, bize bir e-posta bırakın...`;

    const form = document.createElement("form");
    form.classList.add("content");
    const email = document.createElement("input");
    email.required = true;
    email.id = "email";
    email.type = "email";
    email.placeholder = "Email Adresiniz";

    const message = document.createElement("textarea");
    message.required = true;
    message.id = "message";
    message.placeholder = "Mesajınız";

    const btn = document.createElement("button");
    btn.textContent = "Gönder";
    form.appendChild(email);
    form.appendChild(message);
    form.appendChild(btn);
    form.addEventListener("submit", this.submit.bind(this));

    this.messageContainer.appendChild(title);
    this.messageContainer.appendChild(form);
  }

  createStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
            .icon {
                cursor: pointer;
                width: 70%;
                position: absolute;
                top: 9px;
                left: 9px;
                transition: transform .3s ease;
            }
            .hidden {
                transform: scale(0);
            }
            .button-container {
                background-color: #04b73f;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            .message-container {
                box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
                width: 400px;
                right: -25px;
                bottom: 75px;
                max-height: 400px;
                position: absolute;
                transition: max-height .2s ease;
                // font-family: Helvetica, Arial ,sans-serif;
                font-family: inherit;
            }
            .message-container.hidden {
                max-height: 0px;
            }
            .message-container h2 {
                margin: 0;
                font-size: 16px;
                padding: 20px 20px;
                color: #fff;
                background-color: #04b73f;
            }
            .message-container .content {
                margin: 20px 10px ;
                border: 1px solid #dbdbdb;
                padding: 10px;
                display: flex;
                background-color: #fff;
                flex-direction: column;
            }
            .message-container form * {
                margin: 5px 0;
            }
            .message-container form input {
                padding: 10px;
            }
            .message-container form textarea {
                height: 100px;
                padding: 10px;
            }
            .message-container form textarea::placeholder {
                // font-family: Helvetica, Arial ,sans-serif;
                font-family: inherit;
            }
            .message-container form button {
                cursor: pointer;
                background-color: #04b73f;
                color: #fff;
                border: 0;
                border-radius: 4px;
                padding: 10px;
            }
            .message-container form button:hover {
                background-color: #16632f;
            }
        `.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    // console.log("toggleOpen")
    const htmlBody = document.getElementsByTagName("body");
    htmlBody && htmlBody[0].classList.add(this.baseClass + "__modal-active");

    this.open = !this.open;
    if (this.open) {
      this.chatIcon.classList.add("hidden");
      this.closeIcon.classList.remove("hidden");
      this.messageContainer.classList.remove("hidden");
    } else {
      this.createMessageContainerContent();
      this.chatIcon.classList.remove("hidden");
      this.closeIcon.classList.add("hidden");
      this.messageContainer.classList.add("hidden");
    }
  }

  submit(event) {
    event.preventDefault();
    const formSubmission = {
      email: event.srcElement.querySelector("#email").value,
      message: event.srcElement.querySelector("#message").value,
    };

    this.messageContainer.innerHTML =
      '<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry';

    console.log(formSubmission);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    document.querySelectorAll(".feedback li").forEach((entry) =>
      entry.addEventListener("click", (e) => {
        if (!entry.classList.contains("active")) {
          document
            .querySelector(".feedback li.active")
            .classList.remove("active");
          entry.classList.add("active");
        }
        e.preventDefault();
      })
    );
  }
});
