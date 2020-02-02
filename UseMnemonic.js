/**
 * @projectname UseMnemonic.js
 * @version 0.1
 * @author Lars Kölker
 * @copyright 2020
 * 
 * Check out {@link https://lars.koelker.dev/} for more cool stuff.
 */
var UseMnemonic = {};

/**
 * Applies mnemonic to selected elements
 * @param selector the elements to select
 */
UseMnemonic.run = (selector="button, label, a, .UseMnemonic", controlChar="_") => {
    const elements = document.querySelectorAll(selector);
    const reserveredChars = [];

    for(let i=0; i<elements.length; i++) {
        const el = elements[i];
        const ampIndex = el.textContent.indexOf(controlChar);
        const charToUse = el.textContent.charAt(ampIndex+1);

        if(ampIndex === -1) continue;
        else if(reserveredChars.includes(charToUse.toLowerCase())) {
            console.warn("The char '" + charToUse + "' is already being used. Skipping.");
            continue;
        }

        const regex = new RegExp(controlChar.replace("&","&amp;") + charToUse, "i");
        el.innerHTML = el.innerHTML.replace(regex, "<span data-mnemonic>" + charToUse + "</span>");

        document.addEventListener("keypress",e => {

            if(e.key.toLowerCase() === charToUse.toLowerCase() && e.target === document.body) {
                if(el.tagName === "LABEL") {
                    if(el.hasAttribute("for")) {
                        document.getElementById(el.getAttribute("for")).click();
                        return;
                    }
                    else if(el.querySelector("input") !== null) {
                        e.preventDefault();
                        el.querySelector("input").focus();
                        return;
                    }
                }

                el.click();
            }
        });
        reserveredChars.push(charToUse.toLowerCase());
    }

    const mnemonics = document.querySelectorAll("[data-mnemonic]");

    document.addEventListener("keyup", e => {
        if(e.key === "Alt" && e.target === document.body) {
            mnemonics.forEach(mnemonic => {
                if(mnemonic.style.textDecoration === (null || "")) mnemonic.style.textDecoration = "underline";
                else mnemonic.style.textDecoration = null;
            });
        }
    });
    document.addEventListener("click",() => {
        mnemonics.forEach(mnemonic => {
            mnemonic.style.textDecoration = null;
        });
    });


}