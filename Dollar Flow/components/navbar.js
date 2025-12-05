class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                nav {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #4F46E5;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                
                .logo-icon {
                    margin-right: 0.5rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: #1F2937;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                
                .nav-links a:hover {
                    color: #4F46E5;
                }
                
                .cta-button {
                    background-color: #4F46E5;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 500;
                    transition: all 0.3s;
                }
                
                .cta-button:hover {
                    background-color: #4338CA;
                    transform: translateY(-2px);
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            <nav>
                <a href="#" class="logo">
                    <i data-feather="dollar-sign" class="logo-icon"></i>
                    The Dollar Income Engine MasterSuite
</a>
                
                <div class="nav-links">
                    <a href="#features">Features</a>
                    <a href="#transformation">Results</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#guarantee">Guarantee</a>
                    <a href="#" class="cta-button">Get Started</a>
                </div>
                
                <button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);