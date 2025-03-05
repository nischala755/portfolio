document.addEventListener('DOMContentLoaded', () => {
    // Particle Field Animation
    const particleField = document.querySelector('.particle-field');
    for (let i = 0; i < 300; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        particle.style.opacity = Math.random();
        particle.style.width = `${Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(0, 255, 255, 0.7)';
        particleField.appendChild(particle);
    }

    // Quantum Interaction Sound Effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    function createQuantumSound(frequency = 440, duration = 0.1) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
        gainNode.gain.exponentialDecayToValueAtTime(0.001, audioContext.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);
    }

    // Navigation Interactions
    const navSpheres = document.querySelectorAll('.nav-sphere');
    const sections = document.querySelectorAll('.quantum-section');

    navSpheres.forEach(sphere => {
        sphere.addEventListener('click', () => {
            // Quantum navigation sound
            createQuantumSound(540, 0.05);
            
            const sectionId = sphere.getAttribute('data-section');
            
            // Remove active from all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Add active to selected section
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Advanced Quantum AI Assistant
    window.sendQuantumMessage = function() {
        const input = document.getElementById('quantum-input');
        const chatMessages = document.getElementById('chat-messages');
        
        if (input.value.trim() === '') return;

        // Quantum input sound
        createQuantumSound(600, 0.1);

        // User message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('quantum-user-message');
        userMessageDiv.textContent = `> ${input.value}`;
        chatMessages.appendChild(userMessageDiv);

        // Advanced Quantum AI Responses
        const quantumResponses = {
            'skills': [
                "Quantum skills activated: Python, Machine Learning, Blockchain, and AI technologies synchronizing...",
                "Neural networks calibrating. Programming languages: Python, JavaScript, C++. Deep learning frameworks engaged.",
                "Skill matrix detected: AI/ML expertise, blockchain innovation, computational problem-solving capabilities."
            ],
            'project': [
                "Project Cradle: A decentralized finance quantum protocol bridging blockchain and AI innovations.",
                "Hack-A-League 3.0 Victory Protocol: First-place algorithm successfully deployed. KBR Inc internship secured.",
                "Research Paper Quantum Signature: IEEE-validated decentralized application analysis complete."
            ],
            'contact': [
                "Quantum communication channels activated: nischalamasri@gmail.com | Quantum Transmitter: +91 9591035732",
                "Networking protocols online. LinkedIn: https://www.linkedin.com/in/nischala-g-s-9609b8282",
                "GitHub quantum repository: https://github.com/nischala755"
            ],
            'education': [
                "Academic quantum state: BNM Institute of Technology | AI & Machine Learning | 9.95 GPA | Expected Graduation: 07/2027",
                "Certification modules: IIT Madras Machine Learning, Neural Networks, Google Cloud Large Language Models",
                "Scholarly achievements: Best Student [Semesters I, II, III]"
            ],
            'default': [
                "Quantum AI Assistant processing... Awaiting specific quantum query.",
                "Computational matrices scanning. Please refine quantum input.",
                "Neural networks receptive. Enhance query specificity for optimal response generation."
            ]
        };

        // Intelligent Response Generation
        const messageText = input.value.toLowerCase();
        let responseSet = quantumResponses['default'];

        // Context-aware response selection
        if (messageText.includes('skill') || messageText.includes('technology')) responseSet = quantumResponses['skills'];
        if (messageText.includes('project') || messageText.includes('work')) responseSet = quantumResponses['project'];
        if (messageText.includes('contact') || messageText.includes('reach')) responseSet = quantumResponses['contact'];
        if (messageText.includes('education') || messageText.includes('study')) responseSet = quantumResponses['education'];

        // Random response selection
        const response = responseSet[Math.floor(Math.random() * responseSet.length)];

        // AI Response with Typing Effect
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.classList.add('quantum-bot-message');
        chatMessages.appendChild(aiMessageDiv);

        let charIndex = 0;
        function typeResponse() {
            if (charIndex < response.length) {
                aiMessageDiv.textContent += response.charAt(charIndex);
                charIndex++;
                setTimeout(typeResponse, 30);
                
                // Quantum typing sound
                if (charIndex % 3 === 0) {
                    createQuantumSound(500 + Math.random() * 100, 0.02);
                }
            }
        }
        typeResponse();

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input
        input.value = '';
    };

    // Quantum Verification Simulation
    const verifyButtons = document.querySelectorAll('.quantum-verify-btn');
    verifyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            createQuantumSound(700, 0.2);
            alert('🔬 Quantum Blockchain Verification Complete\n✅ Project Authenticity: 99.99%\n🔗 Verification Hash: QNTM-2024-CRADLE-001');
        });
    });
});

// Add dynamic CSS for particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
.particle {
    position: absolute;
    background: rgba(0, 255, 255, 0.7);
    border-radius: 50%;
    animation: particleMove linear infinite;
}

@keyframes particleMove {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
    100% { transform: scale(1) rotate(360deg); }
}
`;
document.head.appendChild(particleStyle);