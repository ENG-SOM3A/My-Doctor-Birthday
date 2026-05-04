// النص المراد كتابته (تم التعديل ليكون "My Doctor")
const textArr = ["Happy Birthday,", "My Doctor..."];
let currentArrIndex = 0;
let currentCharIndex = 0;
let isFirstLineDone = false;

// دالة تأثير الكتابة
function typeWriter() {
    const textElement = document.getElementById("typing-text");
    
    if (currentArrIndex < textArr.length) {
        if (!isFirstLineDone) {
            // كتابة السطر الأول
            textElement.innerHTML = textArr[currentArrIndex].substring(0, currentCharIndex + 1);
            currentCharIndex++;
            if (currentCharIndex === textArr[currentArrIndex].length) {
                isFirstLineDone = true;
                currentCharIndex = 0;
                currentArrIndex++;
                textElement.innerHTML += "<br>"; // إضافة سطر جديد
                setTimeout(typeWriter, 500); // وقفة قصيرة قبل السطر الثاني
            } else {
                setTimeout(typeWriter, 120); // سرعة الكتابة
            }
        } else {
            // كتابة السطر الثاني
            textElement.innerHTML = textArr[0] + "<br>" + textArr[currentArrIndex].substring(0, currentCharIndex + 1);
            currentCharIndex++;
            if (currentCharIndex === textArr[currentArrIndex].length) {
                // انتهت الكتابة، أطلق القصاصات!
                setTimeout(fireConfetti, 300);
            } else {
                setTimeout(typeWriter, 120);
            }
        }
    }
}

// دالة إطلاق القصاصات المتطايرة (Confetti)
function fireConfetti() {
    // إطلاق من اليسار
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6, x: 0.2 },
        colors: ['#c2185b', '#f8b9c3', '#ffffff', '#ffeb3b']
    });
    // إطلاق من اليمين
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6, x: 0.8 },
        colors: ['#c2185b', '#f8b9c3', '#ffffff', '#ffeb3b']
    });
    
    // إطلاق مستمر خفيف من الأعلى لثانيتين
    var duration = 2 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#c2185b', '#f8b9c3']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#c2185b', '#f8b9c3']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// تشغيل تأثير الكتابة عند تحميل الصفحة
window.onload = function() {
    setTimeout(typeWriter, 500); // وقفة قصيرة قبل بدء الكتابة
};
