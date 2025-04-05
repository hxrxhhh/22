document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            setTimeout(function() {
                document.getElementById('main-content').style.opacity = '1';
            }, 50);
        }, 1000);
    }, 3000);

    // Start the celebration
    const startBtn = document.getElementById('startBtn');
    const birthdaySong = document.getElementById('birthdaySong');
    const heroSection = document.getElementById('hero');
    const memoryGrid = document.querySelector('.memory-grid');
    
    // Sample memories data - replace with your actual photos and captions
    const memories = [
        { img: 'memory1.jpg', },
        { img: 'memory2.jpg', },
        { img: 'memory3.jpg', },
        { img: 'memory4.jpg', },

    ];

    // Create memory items
    memories.forEach(memory => {
        const memoryItem = document.createElement('div');
        memoryItem.className = 'memory-item animate__animated';
        
        const img = document.createElement('img');
        img.src = memory.img;
        img.alt = memory.caption;
        img.className = 'memory-img';
        
        const caption = document.createElement('div');
        caption.className = 'memory-caption';
        caption.textContent = memory.caption;
        
        memoryItem.appendChild(img);
        memoryItem.appendChild(caption);
        memoryGrid.appendChild(memoryItem);
        
        // Add animation with delay
        setTimeout(() => {
            memoryItem.classList.add('animate__fadeInUp');
        }, Math.random() * 1000);
    });

    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        const heartCount = 30;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.width = `${10 + Math.random() * 20}px`;
            heart.style.height = heart.style.width;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.animationDuration = `${5 + Math.random() * 10}s`;
            
            heartsContainer.appendChild(heart);
            
            // Animate hearts
            setTimeout(() => {
                heart.style.opacity = '0.7';
                heart.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
            }, 100);
        }
    }

    // Create floating balloons
    function createBalloons() {
        const balloonsContainer = document.querySelector('.floating-balloons');
        const balloonColors = ['#ff69b4', '#00ffff', '#ffff00', '#ff8c00', '#9370db'];
        const balloonCount = 15;
        
        for (let i = 0; i < balloonCount; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.top = '100%';
            balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            balloon.style.opacity = '0.8';
            
            // Balloon string
            const string = document.createElement('div');
            string.style.position = 'absolute';
            string.style.bottom = '-30px';
            string.style.left = '50%';
            string.style.width = '2px';
            string.style.height = '30px';
            string.style.backgroundColor = 'rgba(255,255,255,0.5)';
            
            balloon.appendChild(string);
            balloonsContainer.appendChild(balloon);
            
            // Animate balloons
            setTimeout(() => {
                balloon.style.opacity = '0.8';
                balloon.style.transition = `all ${10 + Math.random() * 10}s linear`;
                balloon.style.transform = `translate(${Math.random() * 100 - 50}px, -100vh)`;
            }, i * 500);
        }
    }

    // Start button click event
    startBtn.addEventListener('click', function() {
        // Play music
        birthdaySong.play();
        
        // Create floating elements
        createHearts();
        createBalloons();
        
        // Animate hero section
        heroSection.classList.add('celebrate');
        
        // Scroll to memories after a delay
        setTimeout(() => {
            document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
        }, 2000);
        
        // Hide start button
        this.style.display = 'none';
    });

    // Surprise button
    const surpriseBtn = document.getElementById('surpriseBtn');
    surpriseBtn.addEventListener('click', function() {
        // Create confetti explosion
        createConfetti();
        
        // Show final message
        const finalMessage = document.createElement('div');
        finalMessage.className = 'final-message animate__animated animate__zoomIn';
        finalMessage.innerHTML = `
            <h2>You're the best friend anyone could ask for!</h2>
            <p>Thank you for being you ❤️</p>
        `;
        this.parentElement.appendChild(finalMessage);
        
        // Disable button
        this.disabled = true;
    });

    // Confetti effect
    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const container = document.querySelector('.surprise-section');
        
        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = `${5 + Math.random() * 10}px`;
            confetti.style.height = `${5 + Math.random() * 10}px`;
            confetti.style.borderRadius = '50%';
            confetti.style.opacity = '0';
            
            container.appendChild(confetti);
            
            // Animate confetti
            setTimeout(() => {
                confetti.style.opacity = '1';
                confetti.style.transition = `all ${3 + Math.random() * 2}s ease-out`;
                confetti.style.transform = `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) rotate(${Math.random() * 360}deg)`;
                confetti.style.opacity = '0';
            }, 10);
        }
    }

    // Animate memory items when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.memory-item').forEach(item => {
        observer.observe(item);
    });
});
heart.textContent = '❤️';
heart.style.fontSize = '24px';
heart.style.background = 'transparent';