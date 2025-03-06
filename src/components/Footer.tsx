import footerData from "@/Data/FooterData";
import { Globe } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-white mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {footerData.copyright}</p>
        <a href={footerData.termsUrl} className="text-sm hover:underline">{footerData.termsUrl}</a>
        <div className="flex items-center gap-2 text-sm">
          <Globe />
          <span>{footerData.language}</span>
        </div>
      </div>
    </footer>
  );
}
