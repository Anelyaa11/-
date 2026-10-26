document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const counterValueEl = document.getElementById("counterValue");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");

    function updateCounter(newVal) {
        if (newVal >= 0) {
            count = newVal;
            counterValueEl.textContent = count;
        }
    }

    increaseBtn.addEventListener("click", () => updateCounter(count + 1));
    decreaseBtn.addEventListener("click", () => updateCounter(count - 1));
    resetBtn.addEventListener("click", () => updateCounter(0));

    const liveInput = document.getElementById("liveInput");
    const textPreview = document.getElementById("textPreview");
    const charCount = document.getElementById("charCount");
    const clearInputBtn = document.getElementById("clearInputBtn");

    liveInput.addEventListener("input", (e) => {
        const text = e.target.value;
        charCount.textContent = text.length;
        if (text.trim() === "") {
            textPreview.textContent = "Your text will appear here";
        } else {
            textPreview.textContent = text;
        }
    });

    clearInputBtn.addEventListener("click", () => {
        liveInput.value = "";
        textPreview.textContent = "Your text will appear here";
        charCount.textContent = "0";
        liveInput.focus();
    });

    const imageSelect = document.getElementById("imageSelect");
    const displayImage = document.getElementById("displayImage");
    const imageCaption = document.getElementById("imageCaption");

    const imageData = {
        "spider-man": { src: "images/spider-man.jpeg", alt: "Spider-Man", caption: "Caption: Spider-Man" },
        "loki": { src: "images/Loki.jpeg", alt: "Loki", caption: "Caption: Loki" },
        "captain": { src: "images/Captain America.jpeg", alt: "Captain America", caption: "Caption: Captain America" }
    };

    imageSelect.addEventListener("change", (e) => {
        const selectedKey = e.target.value;
        const data = imageData[selectedKey];
        if (data) {
            displayImage.src = data.src;
            displayImage.alt = data.alt;
            imageCaption.textContent = data.caption;
        }
    });

    const keyInput = document.getElementById("keyInput");
    const keyPressedStatus = document.getElementById("keyPressedStatus");
    const keyResult = document.getElementById("keyResult");

    keyInput.addEventListener("keydown", (e) => {
        keyPressedStatus.textContent = e.key;

        if (e.key === "Enter") {
            e.preventDefault();
            keyResult.textContent = keyInput.value;
        }

        if (e.key === "Escape") {
            keyInput.value = "";
            keyResult.textContent = "None";
            keyPressedStatus.textContent = "None";
        }
    });

    const focusableCard = document.getElementById("focusableCard");
    const cardInstruction = document.getElementById("cardInstruction");

    function activateCard(triggerType) {
        focusableCard.classList.add("highlight");
        if (triggerType === "mouse") {
            cardInstruction.textContent = "Instruction: Mouse is over the card (mouseenter event).";
        } else {
            cardInstruction.textContent = "Instruction: Card is focused via keyboard (focus event).";
        }
    }

    function deactivateCard() {
        focusableCard.classList.remove("highlight");
        cardInstruction.textContent = "Instruction: Move your mouse over the card or tab into it.";
    }

    focusableCard.addEventListener("mouseenter", () => activateCard("mouse"));
    focusableCard.addEventListener("mouseleave", deactivateCard);
    focusableCard.addEventListener("focus", () => activateCard("focus"));
    focusableCard.addEventListener("blur", deactivateCard);
});