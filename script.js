// Floating Hearts Animation
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['❤️', '💕', '💗', '💖', '💓', '💘', '💝', '💑'];
    
    // Create initial hearts
    for (let i = 0; i < 20; i++) {
        createHeart(container, hearts);
    }
    
    // Add new hearts periodically
    setInterval(() => {
        createHeart(container, hearts);
    }, 500);
}

function createHeart(container, hearts) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 6) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 13000);
}

// Reveal Message Section
function revealMessage() {
    const messageSection = document.getElementById('messageSection');
    const loveMessage = document.querySelector('.love-message');
    
    // Scroll to message section
    messageSection.scrollIntoView({ behavior: 'smooth' });
    
    // Add revealed class with delay for animation
    setTimeout(() => {
        loveMessage.classList.add('revealed');
    }, 300);
}

// Random Reasons Generator
const reasons = [
    "Your smile brightens up my darkest days",
    "The way you laugh makes my heart skip a beat",
    "Your kindness inspires me every single day",
    "You understand me like no one else can",
    "Your eyes hold the most beautiful secrets",
    "The way you care for others shows your beautiful soul",
    "You're my biggest supporter and best friend",
    "Your voice is my favorite melody",
    "You make even ordinary moments feel magical",
    "Your strength amazes me every day",
    "The way you look at me makes me feel loved",
    "You believe in me even when I don't believe in myself",
    "Your hugs are my safe place",
    "You accept me for who I am, flaws and all",
    "Your creativity and passion inspire me",
    "The little things you do show how much you care",
    "You always know exactly what to say",
    "Your presence makes everything better",
    "You're not just my love, you're my home",
    "The way you love unconditionally teaches me so much",
    "Your sense of humor matches mine perfectly",
    "You make me want to be a better person",
    "Your dreams and ambitions drive me to support you",
    "The warmth in your heart touches everyone around you",
    "You're my sunshine on cloudy days",
    "Your determination is truly admirable",
    "The way you love is pure and beautiful",
    "You celebrate my successes as if they were your own",
    "Your patience with me knows no bounds",
    "The little notes you leave make my day",
    "You always find the silver lining in situations",
    "Your honesty and integrity are admirable",
    "The way you hold my hand makes me feel secure",
    "You never give up on us, even when it's hard",
    "Your laughter is the sweetest music to my ears",
    "The sacrifices you make show your immense love",
    "You make me feel like the luckiest person alive",
    "Your stories always keep me entertained",
    "The way you care for your family shows your character",
    "You're gentle yet strong at the same time",
    "Your random acts of kindness warm my heart",
    "The way you say 'good morning' starts my day right",
    "You turn ordinary days into extraordinary memories",
    "Your ambition motivates me to chase my dreams",
    "The way you comfort me when I'm sad is precious",
    "Your love has taught me what it truly means to live",
    "You're my partner in all of life's adventures",
    "The way you dance when no one's watching is adorable",
    "You accept my quirks and oddities with love",
    "Your resilience in difficult times inspires me",
    "The way you look at the world with wonder is beautiful",
    "You make our home a place of love and warmth",
    "Your random text messages throughout the day mean everything",
    "The way you prioritize our relationship shows your commitment",
    "You're my biggest fan and I'm yours",
    "The little things you remember show how attentive you are",
    "Your love has given my life new meaning",
    "The way you handle challenges with grace is remarkable",
    "You make me feel beautiful inside and out",
    "Your dreams for our future excite me",
    "The way you surprise me keeps our love alive",
    "You stand by me through thick and thin",
    "Your love is my greatest blessing",
    "The way you encourage me to pursue my passions",
    "You celebrate the small victories with me",
    "Your comforting words heal my wounds",
    "The way you include me in everything shows your love",
    "You make me feel special every single day",
    "Your love story with me is my favorite story",
    "The way you plan our dates shows how much you care",
    "You make long-distance feel shorter with your love",
    "Your patience while waiting for me is appreciated",
    "The way you introduce me to new experiences",
    "You trust me with your heart completely",
    "Your love has taught me to be more compassionate",
    "The way you defend our love is brave",
    "You make sacrifices without ever complaining",
    "Your love has made me a better human being",
    "The way you communicate your feelings openly",
    "You support my dreams even when they're scary",
    "Your consistency in loving me is everything",
    "The way you handle disagreements with maturity",
    "You never let a day go by without showing love",
    "Your love has been the greatest adventure",
    "The way you make me feel safe and protected",
    "You accept my past and love my present",
    "Your future with me gives me so much hope",
    "The way you say 'I love you' feels like coming home",
    "You are my yesterday, today, and tomorrow",
    "Your love is the fairy tale I always dreamed of",
    "The way you love me is beyond words",
    "You are my forever and always",
    "My love for you grows stronger every single day"
];

let currentReasonIndex = 0;

function showRandomReason() {
    const reasonText = document.getElementById('reasonText');
    const reasonDisplay = document.getElementById('reasonDisplay');
    
    // Add a subtle animation effect
    reasonDisplay.style.transform = 'scale(0.95)';
    reasonDisplay.style.opacity = '0.7';
    
    setTimeout(() => {
        // Get next reason (cycle through all 100)
        reasonText.textContent = reasons[currentReasonIndex];
        currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
        
        reasonDisplay.style.transform = 'scale(1)';
        reasonDisplay.style.opacity = '1';
    }, 150);
}

// Timeline Animation on Scroll
function handleTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add cursor heart effect
function createCursorHeart(e) {
    const heart = document.createElement('div');
    heart.style.cssText = `
        position: fixed;
        left: ${e.pageX}px;
        top: ${e.pageY}px;
        font-size: 20px;
        pointer-events: none;
        animation: cursorFloat 1s ease-out forwards;
        z-index: 10000;
    `;
    heart.textContent = '❤️';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// Add CSS for cursor animation
const style = document.createElement('style');
style.textContent = `
    @keyframes cursorFloat {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Only add cursor effect on mobile/touch devices
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function(e) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const touch = e.touches[i];
                if (touch) {
                    const heart = document.createElement('div');
                    heart.style.cssText = `
                        position: fixed;
                        left: ${touch.pageX}px;
                        top: ${touch.pageY}px;
                        font-size: 20px;
                        pointer-events: none;
                        animation: cursorFloat 1s ease-out forwards;
                        z-index: 10000;
                    `;
                    heart.textContent = '❤️';
                    document.body.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 1000);
                }
            }, i * 100);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    handleTimelineAnimation();
    
    // Add some initial visible timeline items
    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.classList.add('visible');
        });
    }, 500);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

