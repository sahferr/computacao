import { useMemo, useState } from "react";
import { roadmap } from "./data/roadmap.js";
import { textLibrary as copy } from "./content/textLibrary.js";
import { AreaList } from "./components/AreaList.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { RoadmapDetail } from "./components/RoadmapDetail.jsx";

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function areaMatches(area, query) {
  if (!query) return true;

  const haystack = normalize(
    [
      area.title,
      ...area.phases.flatMap((phase) => [phase.title, ...phase.topics]),
    ].join(" "),
  );

  return haystack.includes(normalize(query));
}

function getStats() {
  return {
    areas: roadmap.length,
    phases: roadmap.reduce((total, area) => total + area.phases.length, 0),
    topics: roadmap.reduce(
      (total, area) =>
        total +
        area.phases.reduce(
          (phaseTotal, phase) => phaseTotal + phase.topics.length,
          0,
        ),
      0,
    ),
  };
}

export function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(roadmap[0].id);
  const stats = useMemo(getStats, []);

  const visibleAreas = useMemo(
    () => roadmap.filter((area) => areaMatches(area, query.trim())),
    [query],
  );

  const selectedArea = useMemo(() => {
    const selectedIsVisible = visibleAreas.some((area) => area.id === selectedId);
    return (
      (selectedIsVisible && roadmap.find((area) => area.id === selectedId)) ||
      visibleAreas[0] ||
      roadmap[0]
    );
  }, [selectedId, visibleAreas]);

  return (
    <>
      <Hero
        copy={copy}
        query={query}
        setQuery={setQuery}
        stats={stats}
      />

      <main className="shell app-layout" id="roadmap">
        <AreaList
          areas={visibleAreas}
          selectedId={selectedArea.id}
          onSelect={setSelectedId}
          copy={copy}
        />
        <RoadmapDetail area={selectedArea} hasResults={visibleAreas.length > 0} copy={copy} />
      </main>

      <Footer copy={copy} />
    </>
  );
}
