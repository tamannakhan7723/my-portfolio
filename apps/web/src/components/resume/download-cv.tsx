import { IoCloudDownloadOutline } from "react-icons/io5";
import IconBox from "../icon-box";
import Link from "next/link";

function DownloadCV() {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <IconBox icon={IoCloudDownloadOutline} />
        <Link
          id="download-cv"
          href="./Tamannak_CS_CV.pdf"
          target="_blank"
          className="text-orange-yellow-crayola underline font-bold flex items-center gap-4 hover:text-opacity-70">
          Download Tamanna's full Curriculum Vitae/Resume (2026)
        </Link>
      </div>
    </section>
  );
}

export default DownloadCV;
