import React from 'react'

const About = () => {
  return (
    <div>
        <div class="bg-blue-100 font-['montserrat'] mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-4">About Us</h1>
            <p class="text-gray-700 mb-6">Welcome to Fresh Flower Haven, your ultimate destination for all things floral! We are passionate about
                bringing the beauty of fresh flowers into your life, whether it's through stunning bouquets for special
                occasions, elegant floral arrangements for events, or simply brightening up your living space with a
                touch of nature's charm.</p>
            <p class="text-gray-700 mb-6">At Fresh Flower Haven, we believe in the power of flowers to uplift spirits, evoke emotions, and
                transform ordinary moments into extraordinary memories. Our dedicated team works tirelessly to source
                the finest blooms, ensuring that each arrangement is a masterpiece crafted with love and attention to
                detail.</p>
            <p class="text-gray-700 mb-6">Whether you're celebrating a special milestone, expressing your love and appreciation, or simply
                indulging in the beauty of nature, Fresh Flower Haven is here to fulfill all your floral desires. Join
                us on this blooming journey and let's spread joy, one flower at a time!</p>
        </div>  

        <div class="bg-lime-100  mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-4">Customer Service</h1>
            <div class="flex flex-col md:flex-row md:space-x-6">
                <div class="md:w-1/2">
                    <h2 class="text-xl font-bold mb-2">Contact Information</h2>
                    <p class="text-gray-700 mb-4">For any inquiries or assistance, feel free to reach out to our customer service team.</p>
                    <div class="flex items-center space-x-4">
                        
                        <p class="text-gray-700 pl-6">📞 Phone: 1-800-123-4567</p>
                    </div>
                    <div class="flex items-center space-x-4 mt-2">
                        
                        <p class="text-gray-700 pl-6">✉  Email: support@cloudcpusellers.com</p>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-xl font-bold mb-2">Frequently Asked Questions</h2>
                    <div class="space-y-4">
                        <div>
                            <h3 class="text-lg font-semibold">How can I place an order?</h3>
                            <p class="text-gray-700">You can easily place an order through our website by browsing our products and adding them to your cart. Follow the checkout process to complete your purchase.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold">What payment methods do you accept?</h3>
                            <p class="text-gray-700">We accept major credit cards (Visa, Mastercard, American Express) as well as PayPal for secure and convenient payments.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold">Do you offer refunds?</h3>
                            <p class="text-gray-700">Yes, we offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase, you can contact our customer service team for assistance with returns and refunds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
