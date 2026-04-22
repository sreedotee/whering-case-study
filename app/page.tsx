'use client';

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import SessionSignal from "@/components/SessionSignal";
import SectionTimeline from "@/components/SectionTimeline";
import Footer from "@/components/Footer";

const load = (path: string) => dynamic(() => import(`@/components/sections/${path}`), { loading: () => null });

const Overview = load("Overview");
const BriefChallenge = load("BriefChallenge");
const MarketContext = load("MarketContext");
const UserPersonas = load("UserPersonas");
const AuditAndMethod = load("AuditAndMethod");
const UserResearch = load("UserResearch");
const CurrentStateProblems = load("CurrentStateProblems");
const CompetitiveLandscape = load("CompetitiveLandscape");
const CompetitiveInspiration = load("CompetitiveInspiration");
const UserInsights = load("UserInsights");
const JobsToBeDone = load("JobsToBeDone");
const StrategicOpportunity = load("StrategicOpportunity");
const CardSorting = load("CardSorting");
const InteractionClarityTerminology = load("InteractionClarityTerminology");
const ModeDecisions = load("ModeDecisions");
const DesignLanguage = load("DesignLanguage");
const InformationArchitecture = load("InformationArchitecture");
const ProductPrinciples = load("ProductPrinciples");
const Iterations = load("Iterations");
const DesignSystem = load("DesignSystem");
const BrandPreservation = load("BrandPreservation");
const VideoAndPrototype = load("VideoAndPrototype");
const ProblemEvolution = load("ProblemEvolution");
const Validation = load("Validation");
const ImpactMetrics = load("ImpactMetrics");
const Monetization = load("Monetization");
const Constraints = load("Constraints");
const Reflection = load("Reflection");

export default function Home() {
  return (
    <main className="bg-white min-h-screen lg:ml-[260px]">
      <SectionTimeline />
      <Hero />
      <SessionSignal />
      <div className="flex flex-col">
        <Overview />
        <BriefChallenge />
        <CompetitiveInspiration />
        <AuditAndMethod />
        <UserInsights />
        <StrategicOpportunity />
        <InteractionClarityTerminology />
        <DesignLanguage />
        <InformationArchitecture />
        <ProductPrinciples />
        <div id="designs" />
        <section className="py-10 bg-white">
          <div className="container-standard">
            <SectionHeader number="05" title="Prototype Screens" subtitle="Annotated reference sheet" />
            <div className="rounded-[28px] border border-black/5 bg-[#FAFAF8] p-4 shadow-sm">
              <img
                src="/assets/images/5-competing-actions-crop.png"
                alt="Annotated prototype screen"
                className="w-full rounded-[22px] object-contain"
              />
            </div>
          </div>
        </section>
        <BrandPreservation />
        <Monetization />
        <Reflection />
      </div>
      <Footer />
    </main>
  );
}
