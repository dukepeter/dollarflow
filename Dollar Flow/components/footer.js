class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1F2937;
                    color: white;
                    padding: 4rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }
                
                .footer-logo-icon {
                    margin-right: 0.5rem;
                }
                
                .footer-description {
                    color: #D1D5DB;
                    margin-bottom: 1.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-icon {
                    color: white;
                    transition: color 0.3s;
                }
                
                .social-icon:hover {
                    color: #4F46E5;
                }
                
                .footer-heading {
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    font-size: 1.125rem;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #D1D5DB;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .copyright {
                    max-width: 1200px;
                    margin: 3rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid #374151;
                    color: #9CA3AF;
                    text-align: center;
                }
                
                @media (max-width: 640px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-container">
                <div>
                    <div class="footer-logo">
                    <i data-feather="dollar-sign" class="footer-logo-icon"></i>
                    The Dollar Income Engine MasterSuite
</div>
                    <p class="footer-description">
                        The AI-powered money system helping people build consistent income streams.
</p>
                    <div class="social-links">
                        <a href="#" class="social-icon"><i data-feather="facebook"></i></a>
                        <a href="#" class="social-icon"><i data-feather="twitter"></i></a>
                        <a href="#" class="social-icon"><i data-feather="instagram"></i></a>
                        <a href="#" class="social-icon"><i data-feather="linkedin"></i></a>
                    </div>
                </div>
                
                <div>
                    <h4 class="footer-heading">Product</h4>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Features</a>
                        <a href="#" class="footer-link">Pricing</a>
                        <a href="#" class="footer-link">Guarantee</a>
                        <a href="#" class="footer-link">FAQs</a>
                    </div>
                </div>
                
                <div>
                    <h4 class="footer-heading">Company</h4>
                    <div class="footer-links">
                        <a href="#" class="footer-link">About Us</a>
                        <a href="#" class="footer-link">Contact</a>
                        <a href="#" class="footer-link">Careers</a>
                        <a href="#" class="footer-link">Blog</a>
                    </div>
                </div>
                
                <div>
                    <h4 class="footer-heading">Legal</h4>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Privacy</a>
                        <a href="#" class="footer-link">Terms</a>
                        <a href="#" class="footer-link">Cookie Policy</a>
                        <a href="#" class="footer-link">Refund Policy</a>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} DollarFlow AI Engine. All rights reserved.
</div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);