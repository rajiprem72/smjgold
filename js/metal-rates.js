/* ==========================================
   Shiva Mahajothi Jewellers
   Metal Rates
========================================== */

const WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbzp8S8A1s32vkuNqZKQPDe5amPeKR-rjJiyaPnHKHqcSn-LFmWhcwznUOAHtuRM5dCbjg/exec";

const form =
    document.getElementById(
        "metalRatesForm"
    );

const message =
    document.getElementById(
        "metal-rates-message"
    );

form.addEventListener(
    "submit",
    async function(e){

        e.preventDefault();

        const now = new Date();

        const updated =
            now.toLocaleString(
                "en-IN",
                {
                    day:"2-digit",
                    month:"short",
                    year:"numeric",
                    hour:"2-digit",
                    minute:"2-digit",
                    hour12:true
                }
            );
  const g24 = document.getElementById("gold24");

console.log(g24);

console.log(g24.tagName);

console.log(g24.outerHTML);

console.log(g24.value);

       
       const g22 = document.getElementById("gold22");

console.log(g22);

console.log(g22.tagName);

console.log(g22.outerHTML);

console.log(g22.value);
        
       
       const silver1 = document.getElementById("silver");

console.log(silver1);

console.log(silver1.tagName);

console.log(silver1.outerHTML);

console.log(silver1.value);
       
       
       const data = {

            city : "Tirunelveli",

            gold24 :
                parseFloat(
                    document.getElementById(
                        "gold24"
                    ).value
                ),

            gold22 :
                parseFloat(
                    document.getElementById(
                        "gold22"
                    ).value
                ),

            silver :
                parseFloat(
                    document.getElementById(
                        "silver"
                    ).value
                ),

            updated_at : updated,

            disclaimer :
                "Rates are indicative."

        };

        message.innerHTML =
            "Updating...";

        try{

            const response =
                await fetch(
                    WEBAPP_URL,
                    {
                        method:"POST",

                        body:JSON.stringify(data)
                    }
                );

            const result =
                await response.json();

            message.innerHTML =
                result.message;

        }

        catch(err){

            message.innerHTML =
                err.message;

        }

    }
);
