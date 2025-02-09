const countdownElement = document.getElementById('countdown');
const motivationElement = document.getElementById('motivation');
const motivationAudio = document.getElementById('motivationaudio');

let examDate;
let interval;

const motivationalQuotes = [
    "📖 Stay focused, stay determined! You got this! 💪",
    "⏳ Every second counts. Keep pushing forward! 🚀",
    "📝 Success is the sum of small efforts, repeated daily! 🔥",
    "💡 Your hard work will pay off. Believe in yourself! ⭐",
    "🏆 One step closer to your goal. Stay strong! 💯",
    "📚 Knowledge is power. Keep studying, you're doing great! 🎯",
    "🌟 Mistakes are proof that you are trying. Keep going! 🎓",
    "🔥 You are capable of amazing things. Give it your best! 💡",
    "💪 Difficult roads lead to beautiful destinations. Keep moving! 🏁"
];

function startCountdown() {
    const inputElement = document.getElementById('examDateInput');
    examDate = new Date(inputElement.value); // Get user input date

    if (isNaN(examDate.getTime())) {
        countdownElement.innerHTML = "Please enter a valid date and time!";
        return;
    }

    clearInterval(interval); // Clear previous countdown if any
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const inElement = document.getElementById('examTimeInput').value;
    const [hours, minutes] = inElement.split(':').map(Number);
    
    // Set the time to the exam date and time
    examDate.setHours(hours, minutes, 0, 0);

    // Calculate the remaining time
    const timeRemaining = examDate.getTime() - now.getTime();
    
    if (timeRemaining > 0) {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);

        // Display countdown
        countdownElement.innerHTML = 
            `${daysRemaining} Days <br>` +
            `${hoursRemaining} Hours <br>` +
            `${minutesRemaining} Minutes <br>` +
            `${secondsRemaining} Seconds`;

        // Show motivational quote and play audio at the last 10 seconds
        if (secondsRemaining === 10) {
            motivationElement.innerHTML = getRandomQuote();
            playMotivationAudio();
        }
    } else {
        countdownElement.innerHTML = "Exam Will Commence Soon!";
        motivationElement.innerHTML = "🎉 You've got this! Do your best!";
        clearInterval(interval);
        playMotivationAudio();
        setTimeout(() => {
            motivationElement.innerHTML = "";
        }, 12000);
    }
}

function getRandomQuote() {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

function playMotivationAudio() {
    motivationAudio.currentTime = 0; // Reset audio
    motivationAudio.play().catch(error => console.log("Audio playback failed:", error));
}