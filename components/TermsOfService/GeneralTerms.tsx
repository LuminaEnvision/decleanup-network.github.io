import LegalSection, { LegalH3, LegalList } from "./LegalSection";

export default function GeneralTerms() {
  return (
    <LegalSection
      id="general"
      title="I. General terms"
      subtitle="Applies to decleanup.net, this site’s content, and your use of DeCleanup Network information and links unless a product-specific section below says otherwise."
    >
      <p>
        <strong>Effective date:</strong> April 23, 2026
        <br />
        <strong>Operator:</strong> DeCleanup Network (“DeCleanup”, “we”, “us”, “our”)
        <br />
        <strong>Covered services:</strong> The website at{" "}
        <a href="https://decleanup.net" className="text-[#58B12F] hover:underline">
          decleanup.net
        </a>
        , including <strong>www.decleanup.net</strong>, and related pages, documentation, and community or support channels we operate (collectively, the “Site”).
      </p>

      <LegalNote>
        <strong>Important: not legal advice.</strong> This document is a practical template for an early-stage web3 project. Laws vary by country and change over time. Have qualified counsel review these terms before relying on them for a production launch, fundraising, or regulated activities.
      </LegalNote>

      <LegalH3>1. Acceptance</LegalH3>
      <p>
        By accessing or using the Site (including browsing, following links, downloading materials, or contacting us), you agree to these Terms. If you do not agree, do not use the Site.
      </p>

      <LegalH3>2. What the Site provides</LegalH3>
      <p>
        The Site provides information about DeCleanup Network: mission, litepaper and tokenomics summaries, theory of change, developer and user guides, links to repositories, and pointers to{" "}
        <strong>separate applications</strong> (for example on Base or Celo). The Site does not itself execute blockchain transactions unless we explicitly add that functionality later.
      </p>
      <p>
        Onchain products have <strong>additional terms</strong> in Sections II and III below. If there is a conflict between Section I and a product-specific section for that product, the product-specific section controls for that product only.
      </p>

      <LegalH3>3. Eligibility</LegalH3>
      <p>
        The Site is offered worldwide. You must be legally able to enter contracts where you live and at least 18 (or the age of majority there). You may not use the Site if barred under any law that applies to you. You are responsible for confirming that your use is allowed in your location.
      </p>

      <LegalH3>4. No professional advice</LegalH3>
      <p>
        Content on the Site is for <strong>general information only</strong>. It is not legal, tax, investment, environmental compliance, or other professional advice. Token, governance, and impact descriptions are not offers or solicitations to buy or sell any financial instrument.
      </p>

      <LegalH3>5. Third-party links and services</LegalH3>
      <p>
        The Site may link to GitHub, social platforms, donation or funding tools, block explorers, wallet providers, IPFS gateways, and deployed apps (for example{" "}
        <a href="https://dapp.decleanup.net" className="text-[#58B12F] hover:underline">
          dapp.decleanup.net
        </a>
        ). We do not control those services; their terms and privacy practices apply when you use them.
      </p>

      <LegalH3>6. Intellectual property</LegalH3>
      <p>
        Unless stated otherwise, DeCleanup or its licensors own Site content, branding, and materials. Open-source code is subject to the licenses in the applicable repositories. You may not use our marks or copy Site content for commercial purposes without permission, except as allowed by law or open-source licenses.
      </p>

      <LegalH3>7. Acceptable use</LegalH3>
      <p>You agree not to:</p>
      <LegalList>
        <li>Use the Site to violate law or others’ rights.</li>
        <li>Attempt unauthorized access, scrape in a way that harms availability, or distribute malware.</li>
        <li>Misrepresent affiliation with DeCleanup or submit false information through any contact channel we provide.</li>
      </LegalList>
      <p>We may restrict access where reasonably necessary to protect the Site, users, or legal compliance.</p>

      <LegalH3>8. Disclaimers</LegalH3>
      <p>
        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
      </p>

      <LegalH3>9. Limitation of liability</LegalH3>
      <p>
        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> DEcleanup AND ITS CONTRIBUTORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SITE IS LIMITED TO THE GREATER OF (A) USD $100 OR (B) THE AMOUNTS YOU PAID US IN FEES FOR THE SITE IN THE TWELVE (12) MONTHS BEFORE THE CLAIM (if any).
      </p>
      <p>Some jurisdictions do not allow certain limitations; in those cases, the limitations apply to the fullest extent allowed.</p>

      <LegalH3>10. Indemnity</LegalH3>
      <p>
        You will defend and indemnify DeCleanup and its affiliates, contributors, and personnel against claims, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your use of the Site or your violation of these Terms or law.
      </p>

      <LegalH3>11. Privacy</LegalH3>
      <p>
        How we handle personal data on the Site will be described in a Privacy Policy when published (for example at <strong>/privacy</strong> on this domain). Until then, treat any data you send us as handled only for the purpose you contacted us about.
      </p>

      <LegalH3>12. Changes</LegalH3>
      <p>
        We may update these Terms by posting a revised version with a new effective date. Continued use after the effective date constitutes acceptance. Material changes may also be announced on the Site or in our repositories where practical.
      </p>

      <LegalH3>13. Global users; law and disputes</LegalH3>
      <p>
        DeCleanup is a global project. Mandatory consumer, contract, or privacy rights under the laws of your country of residence are not waived by anything here. You must comply with all laws that apply to you when using the Site.
      </p>
      <p>
        For disputes, you and DeCleanup should first try good-faith resolution via the contact method below. If that fails, claims may be brought only in courts or tribunals with jurisdiction under applicable law. Where your country’s law requires a specific venue or process for consumers, that law controls for you.
      </p>

      <LegalH3>14. Contact</LegalH3>
      <p>
        Use the official support or legal contact published on{" "}
        <a href="https://decleanup.net" className="text-[#58B12F] hover:underline">
          decleanup.net
        </a>{" "}
        or in linked applications (for example footer links on deployed products). Replace with a dedicated legal email when you publish one.
      </p>
    </LegalSection>
  );
}
