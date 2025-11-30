        // Create particles
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position around the portal
            const angle = Math.random() * Math.PI * 2;
            const distance = 120 + Math.random() * 80;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            
            // Random delay
            particle.style.animationDelay = `${Math.random() * 4}s`;
            
            particlesContainer.appendChild(particle);
        }
        
        // Create floating elements
        const floatingContainer = document.getElementById('floatingElements');
        const floatingCount = 15;
        
        for (let i = 0; i < floatingCount; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            
            // Random position
            const startX = Math.random() * 800 - 400;
            const startY = Math.random() * 600 - 300;
            const floatX = (Math.random() - 0.5) * 800;
            const floatY = (Math.random() - 0.5) * 600;
            
            element.style.left = `${startX}px`;
            element.style.top = `${startY}px`;
            element.style.setProperty('--float-x', `${floatX}px`);
            element.style.setProperty('--float-y', `${floatY}px`);
            
            // Random size and opacity
            const size = 5 + Math.random() * 15;
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.opacity = Math.random() * 0.5;
            
            // Random animation delay and duration
            element.style.animationDelay = `${Math.random() * 15}s`;
            element.style.animationDuration = `${15 + Math.random() * 10}s`;
            
            floatingContainer.appendChild(element);
        }
        
        // Update status text during loading
        const statusText = document.getElementById('statusText');
        const statusMessages = [
            "Establishing connection...",
            "Calibrating energy matrix...",
            "Stabilizing quantum field...",
            "Initializing portal core...",
            "Syncing dimensional frequencies...",
            "Verifying containment field...",
            "Portal activation in progress...",
            "Gateway stabilization complete..."
        ];
        
        let statusIndex = 0;
        const statusInterval = setInterval(() => {
            statusText.textContent = statusMessages[statusIndex];
            statusIndex++;
            
            if (statusIndex >= statusMessages.length) {
                clearInterval(statusInterval);
                
                // Show completion message after a delay
                setTimeout(() => {
                    document.querySelector('.loading-text').style.display = 'none';
                    document.querySelector('.progress-container').style.display = 'none';
                    statusText.style.display = 'none';
                    
                    const loadingComplete = document.getElementById('loadingComplete');
                    loadingComplete.style.display = 'block';
                }, 1000);
            }
        }, 1000);
        
        // Enter button functionality
        document.getElementById('enterButton').addEventListener('click', function() {
            // Add a flash effect
            document.body.style.backgroundColor = '#ffffff';
            setTimeout(() => {
                document.body.style.backgroundColor = '#0a0a16';
                
                // Here you would typically redirect to the main content
                alert('Portal entered! In a real application, this would navigate to the main content.');
            }, 200);
        });