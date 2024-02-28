import React from 'react'

const About = () => {
  return (
    <div>
        <div class="bg-blue-100 font-['montserrat'] mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-4">About Us</h1>
            <p class="text-gray-700 mb-6">Welcome to DeepOcean, your go-to destination for purchasing high-performance cloud CPUs. We specialize in providing cutting-edge CPU solutions tailored to meet your computing needs.</p>
            <p class="text-gray-700 mb-6">At DeepOcean, we understand the importance of reliable and efficient computing power in today's fast-paced digital landscape. Whether you're a small business looking to scale your operations or a large enterprise in need of robust computing infrastructure, we've got you covered.</p>
            <p class="text-gray-700 mb-6">Our team of experts is dedicated to delivering top-quality products and exceptional customer service. We work tirelessly to ensure that you get the best value for your investment, with solutions designed to optimize performance and minimize downtime.</p>
            <p class="text-gray-700 mb-6">With DeepOcean, you can trust that you're getting state-of-the-art technology backed by years of industry experience. We're committed to helping you stay ahead of the curve and achieve your business objectives with ease.</p>
            <p class="text-gray-700 mb-6">Thank you for choosing DeepOcean. We look forward to serving you!</p>
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
