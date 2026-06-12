import Hero from '@/components/common/Hero';
import StatsBar from '@/components/common/StatsBar';
import PillarGrid from '@/components/common/PillarGrid';
import TeacherPreview from '@/components/common/TeacherPreview';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <main className="w-full overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="stats">
        <StatsBar />
      </section>

      <section id="teachings">
        <PillarGrid />
      </section>

      <section id="teachers">
        <TeacherPreview />
      </section>
    </main>
  );
}