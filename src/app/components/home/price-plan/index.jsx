"use client";
import { useState } from "react";
import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import PricingCard from "@/src/app/components/home/price-plan/PricingCard";

const pricePlanData = [
	{
	  id: crypto.randomUUID(),
	  plan: "Essential",
	  price: [
		{ id: 1, value: 19 },
		{ id: 2, value: 39 },
	  ],
	  img: "/images/v1/icon7.png",
	  features: [
		"Lead, deal, contact, calendar and pipeline management",
		"Seamless data import and 400+ integrations",
		"24/7, multi-language support",
	  ],
	  featureIcon: "/images/v1/icon7.png",
	  highlighted: false,
	  imgWidth: 47,
	  ImgHeight: 60
	},
	{
	  id: crypto.randomUUID(),
	  plan: "Professional",
	  price: [
		{ id: 1, value: 49 },
		{ id: 2, value: 69 },
	  ],
	  img: "/images/v1/icon5.png",
	  features: [
		"Full email sync with templates, open, click tracking & emailing",
		"Automations builder, including email sequences",
		"Meeting, email and video call",
	  ],
	  featureIcon: "/images/v1/icon5.png", 
	  highlighted: true,
	  imgWidth: 107,
	  ImgHeight: 60
	},
	{
	  id: crypto.randomUUID(),
	  plan: "Enterprise",
	  price: [
		{ id: 1, value: 129 },
		{ id: 2, value: 199 },
	  ],
	  img: "/images/v1/icon6.png",
	  features: [
		"Streamlined lead routing and account access control",
		"Document and contract management with e-signatures",
		"Revenue forecasts & reporting",
	  ],
	  featureIcon: "/images/v1/icon8.png", 
	  highlighted: false,
	  imgWidth: 65,
	  ImgHeight: 62
	},
  ];
  

function PricePlan() {
	const frequencies = [
		{ id: 1, label: "Per Yearly" },
		{ id: 2, label: "Per Month" },
	];

	const [frequency, setFrequency] = useState(frequencies[0]);

	function handleChange(e) {
		if (e.target.checked) {
			setFrequency(frequencies[1]);
		} else {
			setFrequency(frequencies[0]);
		}
	}

	return (
		<section className="section sofax-section-padding bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2>Discover the right price plan for you</h2>
					</div>
				</div>

				<div className="pricing-btn">
					<label>Per Month</label>
					<div className="toggle-btn">
						<input
							className="form-check-input btn-toggle price-deck-trigger"
							type="checkbox"
							onChange={handleChange}
						/>
					</div>
					<label>Per Year</label>
				</div>

				<div className="row" id="table-price-value">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard pricing={pricing} frequency={frequency} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;
