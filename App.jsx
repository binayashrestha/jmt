import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Clock, Gift, Star, Zap, Trophy, Target, Rocket } from 'lucide-react'
import './App.css'

const pricingPlans = [
  {
    id: 'fasttrack',
    name: 'FastTrack',
    icon: Zap,
    tests: 10,
    duration: 10,
    price: 300,
    description: 'Perfect for quick preparation',
    features: [
      '10 Full Mock Tests',
      '10 days access',
      'Instant results',
      'Performance analytics',
      'Mobile friendly'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Star,
    tests: 20,
    duration: 30,
    price: 500,
    description: 'Most popular choice for serious preparation',
    features: [
      '20 Full Mock Tests',
      '30 days access',
      'Detailed explanations',
      'Progress tracking',
      'Email support',
      'Study materials'
    ],
    popular: true,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Target,
    tests: 35,
    duration: 45,
    price: 700,
    description: 'Comprehensive preparation package',
    features: [
      '35 Full Mock Tests',
      '45 days access',
      'Advanced analytics',
      'Personalized feedback',
      'Priority support',
      'Bonus practice sets',
      'Performance comparison'
    ],
    popular: false,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'ultra',
    name: 'Ultra',
    icon: Rocket,
    tests: 50,
    duration: 60,
    price: 1000,
    description: 'Ultimate preparation experience',
    features: [
      '50 Full Mock Tests',
      '60 days access',
      'AI-powered insights',
      'One-on-one mentoring',
      '24/7 support',
      'Exclusive content',
      'Success guarantee',
      'Certificate of completion'
    ],
    popular: false,
    color: 'from-orange-500 to-red-500'
  }
]

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPlans = () => {
    document.getElementById('pricing-plans').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pricing-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              JFT Mock Test
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Choose the perfect plan for your exam preparation journey
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
              Comprehensive mock tests designed to help you excel in your JFT examination. 
              Practice with confidence and achieve your goals.
            </p>
            <Button 
              onClick={scrollToPlans}
              size="lg" 
              className="bg-white text-purple-600 hover:bg-blue-50 text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing-plans" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the package that best fits your preparation timeline and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card 
                  key={plan.id} 
                  className={`pricing-card relative overflow-hidden ${plan.popular ? 'featured' : ''} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        ₹{plan.price}
                      </div>
                      <div className="text-gray-500">
                        for {plan.duration} days
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Gift className="w-5 h-5 text-blue-600 feature-icon" />
                        <span className="font-medium">{plan.tests} Full Mock Tests</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Clock className="w-5 h-5 text-green-600 feature-icon" />
                        <span className="font-medium">{plan.duration} days access</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg`}
                      size="lg"
                    >
                      Choose {plan.name}
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Why Choose JFT Mock Test?
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accurate Assessment</h3>
              <p className="text-gray-600">
                Our mock tests are designed to closely simulate the actual JFT exam pattern and difficulty level.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Thousands of students have successfully cleared their JFT exam using our comprehensive test series.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
              <p className="text-gray-600">
                Get immediate results and detailed explanations to understand your strengths and areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Preparation?</h3>
          <p className="text-gray-300 mb-8">
            Join thousands of successful candidates who chose JFT Mock Test for their exam preparation.
          </p>
          <Button 
            onClick={scrollToPlans}
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full"
          >
            Get Started Today
          </Button>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400">
            <p>&copy; 2025 JFT Mock Test. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

