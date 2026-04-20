import FeatureCard from "./FeatureCard";

const features = [
  "Feature One",
  "Feature Two",
  "Feature Three",
  "Feature Four",
  "Feature Five",
  "Feature Six",
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature} title={feature} />
      ))}
    </div>
  );
}