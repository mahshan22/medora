import Hero from "../../components/common/Hero";
import TrustedStats from "../../components/common/TrustedStats";
import DepartmentSection from "../../components/common/DepartmentSection";
import FeaturedDoctors from "../../components/doctors/FeaturedDoctors";
import HowMedoraWorks from "../../components/common/HowMedoraWorks"; 
import PharmacyFeature from "../../components/common/PharmacyFeature";
import SkincareFeature from "../../components/products/SkincareFeature";
import LaboratoryFeature from "../../components/common/LaboratoryFeature";
import PatientPortalPreview from "../../components/dashboard/PatientPortalPreview";

function Home() {
  return (
    <main>
      <TrustedStats />

      <DepartmentSection />

      <FeaturedDoctors />

      <HowMedoraWorks />

      <PharmacyFeature />

      <SkincareFeature />

      <LaboratoryFeature />

      <PatientPortalPreview />

      <Hero />

    </main>
  );
}

export default Home;