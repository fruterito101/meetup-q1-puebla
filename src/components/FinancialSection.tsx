import { Wallet, CheckCircle2 } from "lucide-react";

const FinancialSection = () => {
    const budgetItems = [
        { name: "Venue", description: "Thinkhub Coworking" },
        { name: "Refreshments", description: "Snacks and beverages for ~20 people" },
        { name: "Materials", description: "Digital materials" },
        { name: "Documentation", description: "Photo coverage" },
    ];

    return (
        <section id="finanzas" className="section-container" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.3)' }}>
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title text-center">
                    <Wallet className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-dark-blue" />
                    <span className="text-brand-dark-blue">Financial Transparency</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 text-lg">
                    Budget Utilization Overview
                </p>

                <div className="card-frutal overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left column - Budget items */}
                        <div className="md:w-[30%] flex flex-col gap-3">
                            {budgetItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-3 rounded-2xl bg-background border border-border hover:border-brand-dark-blue/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-brand-dark-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-brand-dark-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark-blue text-sm">{item.name}</h4>
                                            <p className="text-xs text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right column - Financial image */}
                        <div className="md:w-[70%] flex justify-center items-center">
                            <div className="max-w-md overflow-hidden rounded-3xl border border-border shadow-sm">
                                <img
                                    src="/ticket-puebla.jpg"
                                    alt="Ticket de pago Thinkhub Coworking - $3,060.00 MXN"
                                    className="w-full h-auto object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialSection;
