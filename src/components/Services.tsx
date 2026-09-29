import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Building2,
  Users,
  Palette,
  Package,
  ClipboardCheck,
  Shield,
  ArrowRight,
  Zap
} from "lucide-react";

const Services = () => {

  const services = [
    {
      icon: Building2,
      title: "Construction",
      description:
        "Residential & commercial buildings, roads & infrastructure, renovation and repair.",
      features: [
        "Residential Buildings",
        "Commercial Projects",
        "Infrastructure",
        "Renovation"
      ]
    },
    {
      icon: Users,
      title: "Manpower Supply",
      description:
        "Skilled, semi-skilled and unskilled workforce for government and private projects.",
      features: [
        "Skilled Workers",
        "Semi-skilled Labor",
        "Site Management",
        "Training Programs"
      ]
    },
    {
      icon: Palette,
      title: "Interiors & Fit-outs",
      description:
        "Modular offices, furniture, false ceilings and lighting solutions.",
      features: [
        "Modular Offices",
        "Custom Furniture",
        "False Ceilings",
        "Lighting Design"
      ]
    },
    {
      icon: Package,
      title: "Materials",
      description:
        "Cement, bricks, aggregates, steel alternatives, tiles, paints and GFRP bars.",
      features: [
        "GFRP Bars",
        "Quality Cement",
        "Aggregates",
        "Finishing Materials"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Consultancy",
      description:
        "Architectural & structural design, project management and estimation.",
      features: [
        "Design Services",
        "Project Management",
        "Quantity Surveying",
        "Estimation"
      ]
    },
    {
      icon: Shield,
      title: "Safety & QA",
      description:
        "Site safety protocols, quality checks and documented handovers.",
      features: [
        "Safety Protocols",
        "Quality Assurance",
        "Site Audits",
        "Documentation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
            Our Services
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end solutions from civil works to interiors and manpower supply.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <Card
              key={index}
              className="group hover:shadow-construction-card transition-all duration-300 hover:-translate-y-2"
            >

              <CardContent className="p-6">

                <div className="mb-4">

                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-semibold text-construction-gray mb-2">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                </div>

                <ul className="space-y-2 mb-6">

                  {service.features.map((feature, idx) => (

                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-accent" />
                      {feature}
                    </li>

                  ))}

                </ul>

                {/* BUTTON */}

                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                  onClick={() => {
                    const formSection = document.getElementById("quote-form");
                    formSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Request Quote
                </Button>

              </CardContent>

            </Card>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-16">

          <p className="text-lg text-muted-foreground mb-6">
            Prime service with quality work. We plan to execute projects with a unified approach:
            <span className="font-semibold text-construction-gray">
              {" "}
              materials → construction → interiors → maintenance
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <div className="flex items-center space-x-2 text-construction-gray">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-medium">End-to-end</span>
              <span className="text-muted-foreground">
                Single partner from foundation to furniture
              </span>
            </div>

            <div className="flex items-center space-x-2 text-construction-gray">
              <Zap className="w-5 h-5 text-accent" />
              <span className="font-medium">Future-ready</span>
              <span className="text-muted-foreground">
                GFRP, eco-friendly mixes, digital tracking
              </span>
            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* QUOTE FORM */}
        {/* ========================= */}

        <div
          id="quote-form"
          className="mt-24 bg-black rounded-3xl border border-yellow-500/20 p-8 md:p-12"
        >

          <div className="text-center mb-10">

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Request a Quote
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Looking for construction, interior, consultancy or material supply services?
              Fill out the form and our team will contact you shortly.
            </p>

          </div>

          <form
            action="https://formsubmit.co/hello@srjconstruction.in"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New SRJ Construction Lead" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none"
            />

            <select
              name="service"
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none"
            >
              <option>Select Service</option>
              <option>Construction</option>
              <option>House Plan / 2D-3D Design</option>
              <option>Interior Design</option>
              <option>Consultancy</option>
              <option>Material Supply</option>
              <option>GFRP Bars</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Project Location"
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Project Details"
              className="md:col-span-2 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none"
            />

            <Button className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-6 text-lg rounded-xl">
              Submit Request
            </Button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Services;