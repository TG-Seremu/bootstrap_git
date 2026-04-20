export default function FeatureCard({ title }) {
  return (
    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-200 text-white font-semibold text-2xl sm:text-xl text-center">
      {title}
    </div>
  );
}