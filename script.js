
function setLanguage(lang) {
    const label = document.getElementById('prompt-label');
    const button = document.querySelector('button');
    if (lang === "en") {
        label.innerText = "What do you want me to be?";
        button.innerText = "Start";
        document.documentElement.lang = "en";
        document.body.style.direction = "ltr";
    } else {
        label.innerText = "ماذا تريد مني أن أكون؟";
        button.innerText = "ابدأ";
        document.documentElement.lang = "ar";
        document.body.style.direction = "rtl";
    }
}

function handleStart() {
    const desc = document.getElementById("description").value.trim();
    if (desc === "علي علي لبيك ياعلي") {
        alert("لوحة التحكم السرية ستظهر هنا (نموذجية فقط حالياً).");
        return;
    }
    if (!desc) {
        alert("يرجى كتابة وصف للبرنامج.");
        return;
    }
    const generatedCode = `// برنامج تم توليده بناءً على وصفك:\n// ${desc}\n\nfunction main() {\n    console.log("مرحبا بك في برنامج: ${desc}");\n}`;
    document.getElementById("output").style.display = "block";
    document.getElementById("generated").value = generatedCode;
}

function saveFile() {
    const content = document.getElementById("generated").value;
    const blob = new Blob([content], { type: "text/javascript" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "generatedProgram.js";
    a.click();
    setTimeout(() => {
        location.reload();
    }, 2000);
}
