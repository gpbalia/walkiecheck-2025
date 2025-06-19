import { Check, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Startup",
    description: "Perfect for small production teams getting started with equipment management.",
    price: "$40",
    period: "/ month",
    features: [
      "Up to 50 walkie-talkies",
      "Basic audit trail",
      "Email support",
      "Mobile app access"
    ],
    popular: false,
    buttonVariant: "outline" as const
  },
  {
    name: "Growth",
    description: "Ideal for growing production companies with multiple projects.",
    price: "$80",
    period: "/ month",
    features: [
      "Up to 200 walkie-talkies",
      "Advanced audit trail",
      "Priority support",
      "Team collaboration",
      "Custom reporting"
    ],
    popular: true,
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    description: "For large studios and production houses with complex needs.",
    price: "$150",
    period: "/ month",
    features: [
      "Unlimited walkie-talkies",
      "Full audit trail",
      "24/7 phone support",
      "Advanced analytics",
      "Custom integrations"
    ],
    popular: false,
    buttonVariant: "outline" as const
  }
]

function Pricing() {
  return (
    <section className="bg-gradient-to-br from-[#f5f7fa] via-white to-[#e3f2fd]/50 py-20 relative" id="pricing">
      <div className="absolute inset-0 bg-[#1a237e]/[0.02]"></div>
      <div className="container z-10 mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg border-[#1a237e] text-[#1a237e] bg-white/90 backdrop-blur-sm shadow-sm">Pricing</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-6 text-[#1a237e] text-center">Prices that make sense!</h2>
          <p className="text-center mt-6 opacity-75 text-gray-700 max-w-[480px] text-lg">
            Choose the perfect plan for your production team size and needs.
          </p>
        </div>
        <div className="grid pt-16 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8 lg:gap-10 mt-16">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-2xl border shadow-lg hover:shadow-xl flex flex-col p-8 lg:p-10 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-2 border-[#1a237e] shadow-2xl relative' : 'border-[#e3f2fd]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1a237e] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-0 pb-8">
                <CardTitle className="text-2xl font-semibold text-[#1a237e]">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col gap-8">
                  <p className="flex items-center gap-2 text-2xl">
                    <span className="text-5xl text-[#1a237e] font-bold">{plan.price}</span>
                    <span className="text-base text-gray-700">{plan.period}</span>
                  </p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <Check className="w-5 h-5 mt-1 text-[#1a237e] flex-shrink-0" />
                        <span className="text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={plan.buttonVariant} 
                    className={`gap-2 mt-8 w-full py-3 text-base font-semibold ${
                      plan.buttonVariant === 'outline' 
                        ? 'border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white' 
                        : 'bg-[#1a237e] text-white hover:bg-[#2962ff]'
                    }`}
                  >
                    Sign up today <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Pricing as PricingSection } 